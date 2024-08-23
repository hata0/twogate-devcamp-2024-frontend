import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";

const path = createPath();

export const getFriendsHandler = httpHandlerFactory("get", path, () => {
  return HttpResponse.json("友達");
});
