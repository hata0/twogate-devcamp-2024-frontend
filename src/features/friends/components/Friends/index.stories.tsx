import { Friends } from ".";

import { FRIENDS } from "@/tests/mocks/friends";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Friends;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  args: {
    friends: FRIENDS,
  },
  component: Friends,
  title: "Features/friends/Friends",
} satisfies Meta<T>;
