import { fetcher, Init } from "./fetcher";

export const fetcherWithAuth = <T extends object>(
  input: string | URL | globalThis.Request,
  idToken: string,
  { headers, ...restInit }: Init<T> = {},
) =>
  fetcher(input, {
    ...restInit,
    headers: {
      Authorization: `Bearer ${idToken}`,
      ...headers,
    },
  });
