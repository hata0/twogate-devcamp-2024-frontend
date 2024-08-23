import { CreateRecruitment } from "@/features/recruitments/create/components/CreateRecruitment";
import { useLiffContext } from "@/providers/LiffProvider";

export default function CreateRecruitmentPage() {
  const { liff } = useLiffContext();

  return <CreateRecruitment liff={liff} />;
}
