import { CreateRecruitment } from ".";

import { postRecruitmentsHandler } from "@/services/backend/recruitments/mock";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof CreateRecruitment;
type Story = StoryObj<T>;

export const Default: Story = {};

export const NetworkError: Story = {
  parameters: {
    msw: {
      handlers: [postRecruitmentsHandler({ isNetworkError: true })],
    },
  },
};

export const ServerError: Story = {
  parameters: {
    msw: {
      handlers: [postRecruitmentsHandler({ error: { status: 401 } })],
    },
  },
};

export default {
  component: CreateRecruitment,
  parameters: {
    msw: {
      handlers: [postRecruitmentsHandler()],
    },
  },
  title: "Features/recruitments/create/CreateRecruitment",
} satisfies Meta<T>;
