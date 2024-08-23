import { CreateRecruitment } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof CreateRecruitment;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: CreateRecruitment,
  title: "Features/recruitments/create/CreateRecruitment",
} satisfies Meta<T>;
