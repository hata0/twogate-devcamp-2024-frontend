import { HttpResponse } from "msw";

import { createPath, RecruitmentType } from ".";

import { httpHandlerFactory } from "@/lib/msw/httpHandlerFactory";
import { createRecruitments } from "@/tests/mocks/createRecruitments";

const path = createPath();

export const getRecruitmentsHandler = httpHandlerFactory("get", path, ()=>{
  return HttpResponse.json(createRecruitments(RecruitmentType.Friend))
})

export const postRecruitmentsHandler = httpHandlerFactory("post", path, async ({ request }) => {
  console.log(await request.json());
  return HttpResponse.json();
});
