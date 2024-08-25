"use client";

import { RecruitmentType } from "@prisma/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

import { RecruitmentCard } from "../RecruitmentCard";

import { Button } from "@/components/shadcn/ui/button";
import { Custom401 } from "@/features/error/401";
import { Custom500 } from "@/features/error/500";
import { useLiffContext } from "@/providers/LiffProvider";
import { getRecruitments, Recruitment } from "@/services/backend/recruitments";

type Position = {
  latitude: number;
  longitude: number;
};

export const Recruitments = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[] | undefined>();
  const [error, setError] = useState<"401" | "500" | undefined>();
  const { liff } = useLiffContext();
  const searchParams = useSearchParams();
  const type = formatType(searchParams.get("type") ?? "");
  const [currentPosition, setCurrentPosition] = useState<Position | undefined>();

  useEffect(() => {
    void (async () => {
      if (liff) {
        const idToken = liff.getIDToken() ?? "";
        const { error, res } = await getRecruitments(idToken, type);
        if (res?.status === 401) {
          setError("401");
        } else if (error || !res?.ok) {
          setError("500");
        } else {
          const recruitments = ((await res.json()) as Recruitment[]).map((recruitment) => ({
            ...recruitment,
            createdAt: new Date(recruitment.createdAt),
          }));
          setRecruitments(recruitments);
          setError(undefined);
        }
      }
    })();
  }, [liff, type]);

  useEffect(() => {
    if (type === "Location") {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ latitude, longitude });
      });
    }
  }, [type]);

  if (error === "401") {
    return <Custom401 />;
  }
  if (error === "500") {
    return <Custom500 />;
  }

  return (
    <div>
      <header className="bg-slate-100 p-4 shadow-md">
        <nav className="flex items-center justify-center">
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/recruitments/create">新しく募集する</Link>
            </Button>
            {type === RecruitmentType.Friend ? (
              <Button asChild>
                <Link href="/recruitments?type=Location">知らない人も含めて探す</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href="/recruitments?type=Friend">友達のみで探す</Link>
              </Button>
            )}
          </div>
        </nav>
      </header>
      <div className="flex flex-col space-y-2">
        {recruitments?.map((recruitment, index) => (
          <RecruitmentCard
            key={index}
            currentPosition={currentPosition}
            recruitment={recruitment}
          />
        ))}
      </div>
    </div>
  );
};

const formatType = (type: string) => {
  const result = z.nativeEnum(RecruitmentType).safeParse(type);
  if (result.success) {
    return result.data;
  } else {
    return RecruitmentType.Location;
  }
};
