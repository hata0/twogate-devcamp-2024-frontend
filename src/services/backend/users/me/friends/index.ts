import { BACKEND_URL } from "@/constants/backend-url";
import { fetcherWithAuth } from "@/utils/fetcherWithAuth";

export * from "./type";

// TODO: 厳密には友達をページ単位で取得させる必要がある
export const createPath = () => `${BACKEND_URL}/users/me/friends`;

export const getFriends = (idToken: string) =>
  fetcherWithAuth(createPath(), idToken, {
    cache: "no-store",
  });
