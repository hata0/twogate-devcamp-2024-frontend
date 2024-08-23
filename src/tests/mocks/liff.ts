import { Liff } from "@line/liff";
import { fn } from "@storybook/test";

export const LIFF: Liff = {
  closeWindow: fn(),
  getIDToken: fn(),
  login: fn(),
  logout: fn(),
} as unknown as Liff;
