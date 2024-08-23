import { z } from "zod";

import { createRecruitmentInputSchema } from "./schema";

export enum RecruitmentType {
  Friend,
  Location,
}

export type CreateRecruitmentInput = z.infer<typeof createRecruitmentInputSchema>;
