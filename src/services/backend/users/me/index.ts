import { BACKEND_URL } from "@/constants/backend-url";
import { fetcherWithAuth } from "@/utils/fetcherWithAuth";

export * from "./type";

export const createPath = () => `${BACKEND_URL}/users/me`;

export const getUser = (idToken: string) =>
  fetcherWithAuth(createPath(), idToken, {
    cache: "no-store",
  });
