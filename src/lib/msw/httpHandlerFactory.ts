import { http, HttpResponse, HttpResponseResolver } from "msw";

type HandlerFactoryArgs = {
  isNetworkError?: boolean;
  error?: {
    status: number;
  };
  resolver?: HttpResponseResolver;
};

export const httpHandlerFactory = (
  method: keyof typeof http,
  path: string,
  defaultResolver: HttpResponseResolver,
) => {
  return ({ error, isNetworkError, resolver }: HandlerFactoryArgs = {}) => {
    if (isNetworkError) {
      return http[method](path, () => {
        return HttpResponse.error();
      });
    } else if (error) {
      return http[method](path, () => {
        return HttpResponse.json(null, {
          status: error.status,
        });
      });
    } else if (resolver) {
      return http[method](path, resolver);
    } else {
      return http[method](path, defaultResolver);
    }
  };
};
