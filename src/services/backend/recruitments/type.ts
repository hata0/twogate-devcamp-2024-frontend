import { z } from "zod";

import { createRecruitmentInputSchema } from "./schema";

export type CreateRecruitmentInput = z.infer<typeof createRecruitmentInputSchema>;
