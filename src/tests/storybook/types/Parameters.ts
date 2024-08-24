import { Liff } from "@line/liff";
import { HttpHandler } from "msw";
import { NextRouter } from "next/router";

export type Parameters = {
  nextjs?: {
    router?: Partial<NextRouter>;
  };
  msw?: {
    handlers?: HttpHandler[];
  };
  liffProvider?:
    | {
        liff?: Liff;
      }
    | "undefined";
};
