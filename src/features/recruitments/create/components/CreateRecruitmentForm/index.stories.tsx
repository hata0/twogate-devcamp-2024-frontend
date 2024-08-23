import { fn } from "@storybook/test";

import { CreateRecruitmentForm } from ".";

import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof CreateRecruitmentForm;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  args: {
    onSubmit: fn(),
  },
  component: CreateRecruitmentForm,
  title: "Features/recruitments/create/CreateRecruitmentForm",
} satisfies Meta<T>;
