import { Friends } from ".";

import { getFriendsHandler } from "@/services/backend/friends/mock";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Friends;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Friends,
  parameters: {
    msw: {
      handlers: [getFriendsHandler()],
    },
  },
  title: "Features/friends/Friends",
} satisfies Meta<T>;
