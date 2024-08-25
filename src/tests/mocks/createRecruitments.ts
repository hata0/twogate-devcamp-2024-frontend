import { RecruitmentType } from "@prisma/client";

import { Recruitment } from "@/services/backend/recruitments";

export const createRecruitments = (recruitmentType: RecruitmentType): Recruitment[] => {
  const createData = (data: Omit<Recruitment, "recruitmentType" | "imageUrl">): Recruitment => {
    return {
      ...data,
      imageUrl: "/images/profile.jpg",
      recruitmentType,
    };
  };

  return [
    createData({
      createdAt: new Date(2000, 0, 1, 0, 0),
      latitude: 30,
      longitude: 30,
      name: "あああ",
      title: "運動しよう",
    }),
    createData({
      createdAt: new Date(2001, 0, 1, 0, 0),
      latitude: 50,
      longitude: 50,
      name: "いいい",
      title: "一緒に頑張ろう",
    }),
    createData({
      createdAt: new Date(2002, 0, 1, 0, 0),
      latitude: 70,
      longitude: 70,
      name: "ううう",
      title: "筋トレしよう",
    }),
    createData({
      createdAt: new Date(2003, 0, 1, 0, 0),
      latitude: 90,
      longitude: 90,
      name: "えええ",
      title: "走ろう",
    }),
    createData({
      createdAt: new Date(2004, 0, 1, 0, 0),
      latitude: 110,
      longitude: 110,
      name: "おおお",
      title: "公園行こう",
    }),
    createData({
      createdAt: new Date(1998, 0, 1, 0, 0),
      latitude: 130,
      longitude: 130,
      name: "かかか",
      title: "やせよう",
    }),
    createData({
      createdAt: new Date(1996, 0, 1, 0, 0),
      latitude: 150,
      longitude: 150,
      name: "ききき",
      title: "ダイエットしよう",
    }),
    createData({
      createdAt: new Date(1994, 0, 1, 0, 0),
      latitude: 140,
      longitude: 140,
      name: "くくく",
      title: "あああ",
    }),
    createData({
      createdAt: new Date(1992, 0, 1, 0, 0),
      latitude: 135,
      longitude: 135,
      name: "けけけ",
      title: "いいい",
    }),
    createData({
      createdAt: new Date(1990, 0, 1, 0, 0),
      latitude: 10,
      longitude: 10,
      name: "こここ",
      title: "ううう",
    }),
  ];
};
