import { RecruitmentType } from "@prisma/client";
import calculateDistance from "@turf/distance";
import { point } from "@turf/helpers";
import { format } from "date-fns";
import Image from "next/image";

import { Recruitment } from "@/services/backend/recruitments";

type Props = {
  recruitment: Recruitment;
  currentPosition?: {
    latitude: number;
    longitude: number;
  };
};

export const RecruitmentCard = ({ currentPosition, recruitment }: Props) => {
  const formattedDate = format(new Date(recruitment.createdAt), "yyyy/MM/dd HH:mm");
  const from = currentPosition
    ? point([currentPosition.longitude, currentPosition.latitude])
    : undefined; // 東京都庁
  const to =
    recruitment.latitude && recruitment.longitude
      ? point([recruitment.longitude, recruitment.latitude])
      : undefined;
  const distance = from && to ? calculateDistance(from, to, { units: "kilometers" }) : undefined;

  return (
    <div className="flex max-w-3xl overflow-hidden rounded bg-white shadow-lg">
      <div className="relative w-1/3">
        <Image
          fill
          priority
          alt={`${recruitment.name} profile picture`}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          src={recruitment.imageUrl}
        />
      </div>
      <div className="w-2/3 p-6">
        <div className="mb-2 text-2xl font-bold">{recruitment.title}</div>
        <p className="text-lg text-gray-700">{recruitment.name}</p>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <div className="mt-4">
          <span className="inline-block rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-gray-700">
            {recruitment.recruitmentType === RecruitmentType.Friend ? "友達" : "知らない人"}
          </span>
        </div>
        {recruitment.recruitmentType === RecruitmentType.Location && (
          <div>相手までの距離：{distance} km</div>
        )}
      </div>
    </div>
  );
};
