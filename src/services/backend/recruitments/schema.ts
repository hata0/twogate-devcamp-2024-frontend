import { z } from "zod";

import { RecruitmentType } from "./type";

export const createRecruitmentInputSchema = z.union([
  z.object({
    recruitmentType: z.preprocess((val) => {
      return Number(val);
    }, z.literal(RecruitmentType.Friend)),
    title: z.string().min(1, "募集内容を入力してください"),
  }),
  z.object({
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
    recruitmentType: z.preprocess((val) => {
      return Number(val);
    }, z.literal(RecruitmentType.Location)),
    title: z.string().min(1, "募集内容を入力してください"),
  }),
]);
