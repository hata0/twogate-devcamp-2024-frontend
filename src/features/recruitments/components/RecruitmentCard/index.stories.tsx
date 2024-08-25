import { RecruitmentType } from "@prisma/client";

import { RecruitmentCard } from ".";

import { createRecruitments } from "@/tests/mocks/createRecruitments";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof RecruitmentCard;
type Story = StoryObj<T>;

export const Default: Story = {};

export const OtherPeople: Story = {
  args: {
    recruitment: createRecruitments(RecruitmentType.Location)[0],
  },
};

export default {
  args: {
    recruitment: createRecruitments(RecruitmentType.Friend)[0],
  },
  component: RecruitmentCard,
  title: "Features/recruitments/RecruitmentCard",
} satisfies Meta<T>;
