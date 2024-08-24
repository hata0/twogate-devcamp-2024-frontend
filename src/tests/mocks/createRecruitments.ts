import { Recruitment, RecruitmentType } from "@/services/backend/recruitments";

export const createRecruitments = (recruitmentType: RecruitmentType): Recruitment[] => [
  createData(recruitmentType, {
    createdAt: new Date(2000, 0, 1, 0, 0),
    latitude: 30,
    longitude: 30,
    name: "あああ",
    title: "運動しよう",
  }),
];

const createData = (
  recruitmentType: RecruitmentType,
  data: Omit<Recruitment, "recruitmentType" | "imageUrl">,
): Recruitment => {
  return {
    ...data,
    imageUrl: "/images/profile.jpg",
    recruitmentType,
  };
};
