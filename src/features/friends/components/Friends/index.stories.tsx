import { Mock } from "@storybook/test";

import { Friends } from ".";

import { getFriendsHandler } from "@/services/backend/users/me/friends/mock";
import { LIFF } from "@/tests/mocks/liff";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Friends;
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
      handlers: [getFriendsHandler({ isNetworkError: true })],
    },
  },
};

export const ServerError: Story = {
  parameters: {
    msw: {
      handlers: [getFriendsHandler({ error: { status: 500 } })],
    },
  },
};

export const Error401: Story = {
  parameters: {
    msw: {
      handlers: [getFriendsHandler({ error: { status: 401 } })],
    },
  },
};

export default {
  component: Friends,
  parameters: {
    liffProvider: {
      liff: LIFF,
    },
    msw: {
      handlers: [getFriendsHandler()],
    },
  },
  title: "Features/friends/Friends",
} satisfies Meta<T>;
