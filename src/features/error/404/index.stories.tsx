import { Custom404 } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Custom404;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Custom404,
  title: "Features/error/Custom404",
} satisfies Meta<T>;
