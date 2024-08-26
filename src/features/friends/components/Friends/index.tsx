"use client";

import { useEffect, useState } from "react";

import { FriendCard } from "../FriendCard";

import { Custom401 } from "@/features/error/401";
import { Custom500 } from "@/features/error/500";
import { useLiffContext } from "@/providers/LiffProvider";
import { Friend, getFriends } from "@/services/backend/users/me/friends";

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
    <div className="flex flex-col space-y-2">
      {friends?.length !== 0
        ? friends?.map((friend, index) => <FriendCard key={index} friend={friend} />)
        : "まだ友達はいません"}
    </div>
  );
};
