import { Mock } from "@storybook/test";

import { CreateRecruitment } from ".";

import { postRecruitmentsHandler } from "@/services/backend/recruitments/mock";
import { LIFF } from "@/tests/mocks/liff";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof CreateRecruitment;
type Story = StoryObj<T>;

const beforeEach = () => {
  (LIFF.getIDToken as Mock).mockReturnValue("idToken");
};

export const Default: Story = {
  beforeEach,
};

export const EmptyGetIDToken: Story = {
  beforeEach: () => {
    (LIFF.getIDToken as Mock).mockReturnValue(null);
  },
};

export const EmptyLiff: Story = {
  args: {
    liff: undefined,
  },
};

export const NetworkError: Story = {
  beforeEach,
  parameters: {
    msw: {
      handlers: [postRecruitmentsHandler({ isNetworkError: true })],
    },
  },
};

export const ServerError: Story = {
  beforeEach,
  parameters: {
    msw: {
      handlers: [postRecruitmentsHandler({ error: { status: 401 } })],
    },
  },
};

export default {
  args: {
    liff: LIFF,
  },
  component: CreateRecruitment,
  parameters: {
    msw: {
      handlers: [postRecruitmentsHandler()],
    },
  },
  title: "Features/recruitments/create/CreateRecruitment",
} satisfies Meta<T>;
