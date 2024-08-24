import { Custom500 } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Custom500;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Custom500,
  title: "Features/error/Custom500",
} satisfies Meta<T>;
