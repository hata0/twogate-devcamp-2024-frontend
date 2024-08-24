"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { Custom401 } from "@/features/error/401";
import { Custom500 } from "@/features/error/500";
import { useLiffContext } from "@/providers/LiffProvider";
import { getRecruitments, Recruitment } from "@/services/backend/recruitments";

export const Recruitments = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[] | undefined>();
  const [error, setError] = useState<"401" | "500" | undefined>();
  const { liff } = useLiffContext();
  const searchParams = useSearchParams();

  useEffect(() => {
    void (async () => {
      if (liff) {
        const idToken = liff.getIDToken() ?? "";
        const { error, res } = await getRecruitments(idToken);
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
  }, [liff]);

  if (error === "401") {
    return <Custom401 />;
  }
  if (error === "500") {
    return <Custom500 />;
  }

  console.log(searchParams.get("type"));

  return (
    <div>
      <Button asChild>
        <Link href="/recruitments/create">新しく募集する</Link>
      </Button>
      {searchParams.get("type") === "friend" ? (
        <Button asChild>
          <Link href="/recruitments?type=location">知らない人も含めて探す</Link>
        </Button>
      ) : (
        <Button asChild>
          <Link href="/recruitments?type=friend">友達のみで探す</Link>
        </Button>
      )}
      {recruitments?.map((recruitment, index) => (
        <div key={index} className="flex">
          <Image alt="プロフィール画像" height={50} src={recruitment.imageUrl} width={50} />
          <div className="flex flex-col">
            <div>{recruitment.title}</div>
            <div className="flex space-x-2">
              <div>{recruitment.name}</div>
              <div>{recruitment.createdAt.toString()}</div>
            </div>
            <div className="flex space-x-2">
              <div>{recruitment.latitude}</div>
              <div>{recruitment.longitude}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
