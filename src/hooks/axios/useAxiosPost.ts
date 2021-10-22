import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { createPostRequest } from './utils/createRequest';
import { RequestResponse } from '../interfaces';

/**
 * The axios hook send a http request in server and takes a response,
 * which transferring you.
 *
 * The axios hook have self state.
 * He give you self state that are response of server,
 * namely success, error, isLoading.
 *
 * USE:
 * It call the hook at top level of component
 * by taking her request function and her states.
 * then the requestPost call in place where you want send http request.
 *
 * EXAMPLE:
 * const { requestPost, onSuccess, onError, isLoading } = useAxiosPost();
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   const url = '/example-url';
 *   requestPost(url, data);
 * }
 *
 * useEffect() {
 *  if (onSuccess) {
 *    ...
 *  }
 * }
 */
export const useAxiosPost = (url: string, body: Record<string, unknown>): RequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const postRequest = useCallback(() => createPostRequest(setResponse, setError, setIsLoading)(url, body), [url, body]);

  useEffect(() => {
    postRequest();
  }, [postRequest]);

  return {
    response,
    error,
    isLoading,
  };
};
