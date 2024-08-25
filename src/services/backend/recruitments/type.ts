import { RecruitmentType } from "@prisma/client";
import { z } from "zod";

import { createRecruitmentInputSchema } from "./schema";

export type Recruitment = {
  title: string;
  recruitmentType: RecruitmentType;
  createdAt: Date;
  name: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
};

export type CreateRecruitmentInput = z.infer<typeof createRecruitmentInputSchema>;
