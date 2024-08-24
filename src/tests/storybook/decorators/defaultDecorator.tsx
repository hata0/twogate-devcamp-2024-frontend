import { ReactRenderer, StoryContext } from "@storybook/react";
import { Args, PartialStoryFn } from "storybook/internal/types";

import { Parameters } from "../types/Parameters";

import { Toaster } from "@/components/shadcn/ui/toaster";
import { MockLiffContext } from "@/providers/LiffProvider";

export const defaultDecorator = (
  Story: PartialStoryFn<ReactRenderer, Args>,
  context: StoryContext<Args>,
) => {
  const liffProvider = (context.parameters as Parameters).liffProvider;

  return (
    <MockLiffContext.Provider
      value={!liffProvider || liffProvider === "undefined" ? {} : liffProvider}
    >
      <Story />
      <Toaster />
    </MockLiffContext.Provider>
  );
};
