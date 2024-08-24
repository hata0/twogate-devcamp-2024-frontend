"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Custom401 } from "@/features/error/401";
import { Custom500 } from "@/features/error/500";
import { useLiffContext } from "@/providers/LiffProvider";
import { Friend, getFriends } from "@/services/backend/friends";

export const Friends = () => {
  const { liff } = useLiffContext();
  const [friends, setFriends] = useState<Friend[] | undefined>();
  const [error, setError] = useState<"401" | "500" | undefined>();

  useEffect(() => {
    void (async () => {
      if (liff) {
        const idToken = liff.getIDToken() ?? "";
        const { error, res } = await getFriends(idToken);
        if (res?.status === 401) {
          setError("401");
        } else if (error || !res?.ok) {
          setError("500");
        } else {
          const friends = (await res.json()) as Friend[];
          setFriends(friends);
          setError(undefined);
        }
      }
    })();
  }, [liff]);

  if (error === "401") {
    return <Custom401 />;
  }
  if (error === "500") {
    return <Custom500 />;
  }

  return (
    <div>
      {friends &&
        friends.map((friend, index) => (
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
