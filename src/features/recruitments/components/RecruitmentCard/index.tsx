import { format } from "date-fns";
import Image from "next/image";

import { Recruitment } from "@/services/backend/recruitments";

type Props = {
  recruitment: Recruitment;
};

export const RecruitmentCard = ({ recruitment }: Props) => {
  const formattedDate = format(new Date(recruitment.createdAt), "yyyy/MM/dd HH:mm");

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
            {recruitment.recruitmentType}
          </span>
        </div>
      </div>
    </div>
  );
};
