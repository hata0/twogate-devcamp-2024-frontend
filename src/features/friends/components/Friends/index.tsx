import { useEffect } from "react";

import { getFriends } from "@/services/backend/friends";

export const Friends = () => {
  useEffect(() => {
    void (async () => {
      await getFriends("a");
    })();
  }, []);

  return (
    <div>
      <div>hello</div>
    </div>
  );
};
