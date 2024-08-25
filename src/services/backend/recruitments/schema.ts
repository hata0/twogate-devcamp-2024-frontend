import { RecruitmentType } from "@prisma/client";
import { z } from "zod";

export const createRecruitmentInputSchema = z.union([
  z.object({
    recruitmentType: z.literal(RecruitmentType.Friend),
    title: z.string().min(1, "募集内容を入力してください"),
  }),
  z.object({
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
    recruitmentType: z.literal(RecruitmentType.Location),
    title: z.string().min(1, "募集内容を入力してください"),
  }),
]);
