import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { withThemeByClassName } from "@storybook/addon-themes";
import { DefaultDecorator } from "../src/tests/storybook/decorators/DefaultDecorator";
import { ReadonlyURLSearchParams, useSearchParams } from "@storybook/nextjs/navigation.mock";
import { Parameters } from "../src/tests/storybook/types/Parameters";

initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    DefaultDecorator,
  ],
  loaders: [mswLoader],
  beforeEach: (context) => {
    const searchParams = (context.parameters as Parameters).searchParams;

    useSearchParams.mockImplementation(() => {
      return new ReadonlyURLSearchParams(
        new URLSearchParams(
          !searchParams || searchParams === "undefined" ? undefined : searchParams,
        ),
      );
    });
  },
};

export default preview;
