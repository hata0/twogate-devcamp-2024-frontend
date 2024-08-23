"use client";

import Link from "next/link";

import { Button } from "@/components/shadcn/ui/button";

export const Top = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-center space-x-2">
        <Button asChild>
          <Link href="/friends">フレンド一覧</Link>
        </Button>
        <Button asChild>
          <Link href="/recruitments">運動の募集一覧</Link>
        </Button>
      </div>
    </div>
  );
};
