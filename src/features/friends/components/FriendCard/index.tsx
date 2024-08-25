import Image from "next/image";

import { Friend } from "@/services/backend/users/me/friends";

type Props = {
  friend: Friend;
};

export const FriendCard = ({ friend }: Props) => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
      <div className="flex items-center p-4">
        <Image
          priority
          alt={`${friend.name}のプロフィール画像`}
          className="h-16 w-16 rounded-full"
          height={64}
          src={friend.imageUrl}
          width={64}
        />
        <div className="ml-4">
          <h2 className="text-lg font-bold">{friend.name}</h2>
          <p className="text-gray-600">
            {friend.exerciseGoalTitle ?? "運動の目標は設定されていません"}
          </p>
        </div>
      </div>
    </div>
  );
};
