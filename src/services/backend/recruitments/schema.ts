import { z } from "zod";

export const createRecruitmentInputSchema = z.object({
  title: z.string().min(1),
});
