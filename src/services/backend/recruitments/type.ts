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

export enum RecruitmentType {
  Friend,
  Location,
}

export type CreateRecruitmentInput = z.infer<typeof createRecruitmentInputSchema>;
