import { Mock } from "@storybook/test";

import { Recruitments } from ".";

import { getRecruitmentsHandler } from "@/services/backend/recruitments/mock";
import { LIFF } from "@/tests/mocks/liff";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Recruitments;
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
      handlers: [getRecruitmentsHandler({ isNetworkError: true })],
    },
  },
};

export const ServerError: Story = {
  parameters: {
    msw: {
      handlers: [getRecruitmentsHandler({ error: { status: 500 } })],
    },
  },
};

export const Error401: Story = {
  parameters: {
    msw: {
      handlers: [getRecruitmentsHandler({ error: { status: 401 } })],
    },
  },
};

export const FriendOnlyRecruitments: Story = {
  parameters: {
    searchParams: {
      type: "Friend",
    },
  },
};

export const EmptySearchParams: Story = {
  parameters: {
    searchParams: "undefined",
  },
};

export const InvalidSearchParams: Story = {
  parameters: {
    searchParams: {
      type: "bar",
    },
  },
};

export default {
  component: Recruitments,
  parameters: {
    liffProvider: {
      liff: LIFF,
    },
    msw: {
      handlers: [getRecruitmentsHandler()],
    },
    searchParams: {
      type: "Location",
    },
  },
  title: "Features/recruitments/Recruitments",
} satisfies Meta<T>;
