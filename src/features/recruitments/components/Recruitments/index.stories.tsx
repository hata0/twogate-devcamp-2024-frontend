import { Recruitments } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Recruitments;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Recruitments,
  title: "Features/recruitments/Recruitments",
} satisfies Meta<T>;
