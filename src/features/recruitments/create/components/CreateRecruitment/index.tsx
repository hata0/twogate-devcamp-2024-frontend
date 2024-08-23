import { Liff } from "@line/liff";
import { useRouter } from "next/navigation";

import { CreateRecruitmentForm } from "../CreateRecruitmentForm";

import { toast } from "@/components/shadcn/ui/use-toast";
import { CreateRecruitmentInput, postRecruitments } from "@/services/backend/recruitments";

type Props = {
  liff?: Liff;
};

export const CreateRecruitment = ({ liff }: Props) => {
  const router = useRouter();

  const handleSubmit = async (values: CreateRecruitmentInput) => {
    const idToken = liff?.getIDToken() ?? "";
    const { error, res } = await postRecruitments(idToken, values);
    if (error || !res?.ok) {
      toast({ title: "エラーが発生しました。やり直してください", variant: "destructive" });
    } else {
      toast({ title: "運動募集を作成しました" });
      router.push("/recruitments");
    }
  };

  return (
    <div>
      <CreateRecruitmentForm onSubmit={handleSubmit} />
    </div>
  );
};
