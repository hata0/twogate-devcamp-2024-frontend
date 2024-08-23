import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  CreateRecruitmentInput,
  createRecruitmentInputSchema,
  RecruitmentType,
} from "@/services/backend/recruitments";

type Props = {
  onSubmit: (values: CreateRecruitmentInput) => Promise<void>;
};

export const CreateRecruitmentForm = ({ onSubmit }: Props) => {
  const form = useForm<CreateRecruitmentInput>({
    defaultValues: {
      recruitmentType: RecruitmentType.Friend,
      title: "",
    },
    mode: "onChange",
    resolver: zodResolver(createRecruitmentInputSchema),
  });

  const handleSubmit = async (values: CreateRecruitmentInput) => {
    form.reset();
    await onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-2"
        onSubmit={(e) => void form.handleSubmit(handleSubmit)(e)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>募集内容</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="recruitmentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>募集形式</FormLabel>
              <Select defaultValue={field.value.toString()} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={RecruitmentType.Friend.toString()}>友達のみ</SelectItem>
                  <SelectItem value={RecruitmentType.Location.toString()}>場所を指定</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end space-x-2">
          <Button asChild>
            <Link href="/recruitments">キャンセル</Link>
          </Button>
          <Button type="submit">作成</Button>
        </div>
      </form>
    </Form>
  );
};
