import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";
import { USER } from "@/tests/mocks/user";

const path = createPath();

export const getUserHandler = httpHandlerFactory("get", path, () => {
  return HttpResponse.json(USER);
});
