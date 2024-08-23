import Image from "next/image";

import { Friend } from "@/services/backend/friends";

type Props = {
  friends: Friend[];
};

export const Friends = ({ friends }: Props) => {
  return (
    <div>
      {friends.map((friend, index) => (
        <div key={index} className="flex space-x-2">
          <Image alt="プロフィール画像" height={100} src={friend.imageUrl} width={100} />
          <div>
            <div>{friend.name}</div>
            <div>{friend.exerciseGoalTitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
