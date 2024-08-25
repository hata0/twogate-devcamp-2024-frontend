import { RecruitmentType } from "@prisma/client";
import { HttpResponse } from "msw";

import { createPath } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";
import { createRecruitments } from "@/tests/mocks/createRecruitments";

const path = createPath();

export const getRecruitmentsHandler = httpHandlerFactory("get", path, ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  params.forEach((value, key) => {
    console.log(`${key}=${value}`);
  });
  return HttpResponse.json(createRecruitments((params.get("type") ?? "") as RecruitmentType));
});

export const postRecruitmentsHandler = httpHandlerFactory("post", path, async ({ request }) => {
  console.log(await request.json());
  return HttpResponse.json();
});
