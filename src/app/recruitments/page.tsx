import { Suspense } from "react";

import { Recruitments } from "@/features/recruitments/components/Recruitments";

export default function RecruitmentsPage() {
  return (
    <Suspense>
      <Recruitments />
    </Suspense>
  );
}
