import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";

const path = createPath();

export const postRecruitmentsHandler = httpHandlerFactory("post", path, ({ request }) => {
  request.headers.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  return HttpResponse.json();
});
