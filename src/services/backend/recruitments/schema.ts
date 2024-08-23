import { z } from "zod";

import { RecruitmentType } from "./type";

export const createRecruitmentInputSchema = z.object({
  recruitmentType: z.nativeEnum(RecruitmentType),
  title: z.string().min(1, "募集内容を入力してください"),
});
