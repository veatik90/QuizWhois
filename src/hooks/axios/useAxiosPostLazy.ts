import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { createPostRequest } from './utils/createRequest';
import { PostLazyRequestResponse } from '../interfaces';

/**
 * The axios hook send a http request in server and takes a response,
 * which transferring you.
 *
 * Lazy mode do not have self state. He change your state use set
 * state which you provide him.
 *
 * USE:
 * It call the hook at top level of component
 * by taking her request function and by transferring your set functions,
 * then the requestPostLazy call in place where you want send http request.
 *
 * EXAMPLE:
 * const [onSuccess, setOnSuccess] = useState<AxiosResponse | null>(null);
 * const [onError, setOnError] = useState<AxiosResponse | undefined | null>(null);
 * const [isLoading, setIsLoading] = useState<boolean>(true);
 *
 * const { requestPostLazy } = useAxiosPostLazy(setOnSuccess, setOnError, setIsLoading);
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   const url = '/example-url';
 *   requestPostLazy(url, data);
 * }
 *
 * useEffect() {
 *  if (onSuccess) {
 *    ...
 *  }
 * }
 */
export const useAxiosPostLazy = (): PostLazyRequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const postRequest = useCallback(
    (url: string, body: Record<string, unknown>) => createPostRequest(setResponse, setError, setIsLoading)(url, body),
    [],
  );

  return {
    postRequest,
    response,
    error,
    isLoading,
  };
};
