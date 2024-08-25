import { Mock } from "@storybook/test";

import { Top } from ".";

import { getUserHandler } from "@/services/backend/users/me/mock";
import { LIFF } from "@/tests/mocks/liff";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Top;
type Story = StoryObj<T>;

const beforeEach = () => {
  (LIFF.getIDToken as Mock).mockReturnValue("idToken");
};

export const Default: Story = {
  beforeEach,
};

export const EmptyLiff: Story = {
  beforeEach,
  parameters: {
    liffProvider: "undefined",
  },
};

export const EmptyGetIDToken: Story = {
  beforeEach: () => {
    (LIFF.getIDToken as Mock).mockReturnValue(null);
  },
};

export const NetworkError: Story = {
  parameters: {
    msw: {
      handlers: [getUserHandler({ isNetworkError: true })],
    },
  },
};

export const ServerError: Story = {
  parameters: {
    msw: {
      handlers: [getUserHandler({ error: { status: 500 } })],
    },
  },
};

export const Error401: Story = {
  parameters: {
    msw: {
      handlers: [getUserHandler({ error: { status: 401 } })],
    },
  },
};

export default {
  component: Top,
  parameters: {
    liffProvider: {
      liff: LIFF,
    },
    msw: {
      handlers: [getUserHandler()],
    },
  },
  title: "Features/top/Top",
} satisfies Meta<T>;
