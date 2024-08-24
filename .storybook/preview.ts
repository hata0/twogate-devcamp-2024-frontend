import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { withThemeByClassName } from "@storybook/addon-themes";
import { defaultDecorator } from "../src/tests/storybook/decorators/defaultDecorator";

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
    defaultDecorator,
  ],
  loaders: [mswLoader],
};

export default preview;
