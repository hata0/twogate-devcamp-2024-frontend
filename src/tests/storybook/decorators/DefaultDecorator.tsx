import { ReactRenderer, StoryContext } from "@storybook/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider/next-13.5";
import { Args, PartialStoryFn } from "storybook/internal/types";

import { Parameters } from "../types/Parameters";

import { Toaster } from "@/components/shadcn/ui/toaster";
import { MockLiffContext } from "@/providers/LiffProvider";

export const DefaultDecorator = (
  Story: PartialStoryFn<ReactRenderer, Args>,
  context: StoryContext<Args>,
) => {
  const liffProvider = (context.parameters as Parameters).liffProvider;

  return (
    <MemoryRouterProvider>
      <MockLiffContext.Provider
        value={!liffProvider || liffProvider === "undefined" ? {} : liffProvider}
      >
        <Story />
        <Toaster />
      </MockLiffContext.Provider>
    </MemoryRouterProvider>
  );
};
