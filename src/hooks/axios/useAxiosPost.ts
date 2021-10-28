import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { createPostRequest } from './utils/createRequest';
import { RequestResponse } from 'interfaces';

/**
 * This hook triggered once when a page is rendering.
 * He send a http POST request in server and takes a response.
 *
 * USE:
 * It call the hook at top level of component provide url and body.
 * Using data of server.
 *
 * EXAMPLE:
 * const { response, error, isLoading } = useAxiosPost(url, body);
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   console.log(response);
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
