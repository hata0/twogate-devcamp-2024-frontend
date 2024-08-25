import Link from "next/link";

import { Button } from "@/components/shadcn/ui/button";

export const Top = () => {
  return (
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
  );
};
