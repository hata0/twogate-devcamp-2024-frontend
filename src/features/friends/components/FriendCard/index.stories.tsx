import { FriendCard } from ".";

import { FRIENDS } from "@/tests/mocks/friends";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof FriendCard;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  args: {
    friend: FRIENDS[0],
  },
  component: FriendCard,
  title: "Features/friends/FriendCard",
} satisfies Meta<T>;
