import { CreateRecruitmentInput } from "./type";

import { BACKEND_URL } from "@/constants/backend-url";
import { fetcherWithAuth } from "@/utils/fetcherWithAuth";

export * from "./schema";
export * from "./type";

export const createPath = () => `${BACKEND_URL}/recruitments`;

export const getRecruitments = (idToken: string, type: string) =>
  fetcherWithAuth(`${createPath()}?type=${type}`, idToken);

export const postRecruitments = (idToken: string, values: CreateRecruitmentInput) =>
  fetcherWithAuth(createPath(), idToken, {
    body: values,
    method: "POST",
  });
