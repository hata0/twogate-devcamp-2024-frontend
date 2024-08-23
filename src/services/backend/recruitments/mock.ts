import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";

const path = createPath();

export const postRecruitmentsHandler = httpHandlerFactory("post", path, () => {
  console.log("default");
  return HttpResponse.json();
});
