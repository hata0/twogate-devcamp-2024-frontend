"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/shadcn/ui/button";
import { BACKEND_URL } from "@/constants/backend-url";
import { useLiffContext } from "@/providers/LiffProvider";
import { fetcherWithAuth } from "@/utils/fetcherWithAuth";

export const Top = () => {
  const { liff } = useLiffContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    void (async () => {
      const idToken = liff?.getIDToken() ?? "";
      const { res } = await fetcherWithAuth(`${BACKEND_URL}`, idToken);
      if (res?.ok) {
        const data = (await res.json()) as { message: string };
        setMessage(data.message);
      }
    })();
  });

  return (
    <div>
      <div className="flex w-full items-center justify-center space-x-2">
        <Button asChild>
          <Link href="/friends">フレンド一覧</Link>
        </Button>
        <Button asChild>
          <Link href="/recruitments">運動の募集一覧</Link>
        </Button>
        <div>message: {message}</div>
      </div>
    </div>
  );
};
