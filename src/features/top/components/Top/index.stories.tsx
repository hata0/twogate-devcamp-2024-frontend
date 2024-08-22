import { Top } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Top;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Top,
  title: "Features/top/Top",
} satisfies Meta<T>;
