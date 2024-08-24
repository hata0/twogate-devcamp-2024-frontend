import { Custom401 } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Custom401;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Custom401,
  title: "Features/error/Custom401",
} satisfies Meta<T>;
