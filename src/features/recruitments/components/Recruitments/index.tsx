import Link from "next/link";

import { Button } from "@/components/shadcn/ui/button";

export const Recruitments = () => {
  return (
    <div>
      <Button asChild>
        <Link href="/recruitments/new">新しく募集する</Link>
      </Button>
    </div>
  );
};
