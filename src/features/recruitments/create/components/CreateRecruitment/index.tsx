"use client";

import { useRouter } from "next/navigation";

import { CreateRecruitmentForm } from "../CreateRecruitmentForm";

import { toast } from "@/components/shadcn/ui/use-toast";
import { useLiffContext } from "@/providers/LiffProvider";
import { CreateRecruitmentInput, postRecruitments } from "@/services/backend/recruitments";

export const CreateRecruitment = () => {
  const { liff } = useLiffContext();
  const router = useRouter();

  const handleSubmit = async (values: CreateRecruitmentInput) => {
    const idToken = liff?.getIDToken() ?? "";
    const { error, res } = await postRecruitments(idToken, values);
    if (error || !res?.ok) {
      toast({ title: "エラーが発生しました。やり直してください", variant: "destructive" });
    } else {
      toast({ title: "運動募集を作成しました" });
      router.push("/recruitments?type=location");
    }
  };

  return (
    <div>
      <CreateRecruitmentForm onSubmit={handleSubmit} />
    </div>
  );
};
