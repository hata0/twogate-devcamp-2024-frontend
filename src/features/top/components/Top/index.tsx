"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { Custom401 } from "@/features/error/401";
import { Custom500 } from "@/features/error/500";
import { useLiffContext } from "@/providers/LiffProvider";
import { getUser, User } from "@/services/backend/users/me";

export const Top = () => {
  const [user, setUser] = useState<User | undefined>();
  const [error, setError] = useState<"401" | "500" | undefined>();
  const { liff } = useLiffContext();

  useEffect(() => {
    void (async () => {
      if (liff) {
        const idToken = liff.getIDToken() ?? "";
        const { error, res } = await getUser(idToken);
        if (res?.status === 401) {
          setError("401");
        } else if (error || !res?.ok) {
          setError("500");
        } else {
          const user = (await res.json()) as User;
          setUser(user);
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

  return (
    <div>
      <header className="bg-blue-500 p-4 shadow-md">
        <nav className="flex items-center justify-center">
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/friends">フレンド一覧</Link>
            </Button>
            <Button asChild>
              <Link href="/recruitments?type=Location">運動の募集一覧</Link>
            </Button>
          </div>
        </nav>
      </header>
      <div>あなたのフレンドコード：{user?.friendCode}</div>
    </div>
  );
};
