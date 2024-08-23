import { z } from "zod";

import { RecruitmentType } from "./type";

export const createRecruitmentInputSchema = z.object({
  recruitmentType: z.preprocess((val) => {
    if (typeof val === "string") {
      const parsed = parseInt(val, 10);
      if (!isNaN(parsed)) {
        return parsed;
      }
    }
    return val;
  }, z.nativeEnum(RecruitmentType)),
  title: z.string().min(1, "募集内容を入力してください"),
});
