import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";
import { FRIENDS } from "@/tests/mocks/friends";

const path = createPath();

export const getFriendsHandler = httpHandlerFactory("get", path, () => {
  return HttpResponse.json(FRIENDS);
});
