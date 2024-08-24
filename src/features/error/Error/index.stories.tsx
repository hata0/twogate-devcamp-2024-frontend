import { fn } from "@storybook/test";

import { Error } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Error;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  args: {
    reset: fn(),
  },
  component: Error,
  title: "Features/error/Error",
} satisfies Meta<T>;
