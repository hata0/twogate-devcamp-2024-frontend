import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { withThemeByClassName } from "@storybook/addon-themes";
import React from "react";
import { Toaster } from "../src/components/shadcn/ui/toaster";

initialize({ onUnhandledRequest: "bypass" });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  loaders: [mswLoader],
};

export default preview;
