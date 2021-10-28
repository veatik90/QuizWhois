import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { RequestResponse } from './interfaces';
import { createGetRequest } from './utils/createRequest';

/**
 * This hook triggered once when a page is rendering.
 * He send a http GET request in server and takes a response.
 *
 * USE:
 * It call the hook at top level of component provide url.
 * Using data of server.
 *
 * EXAMPLE:
 * const { response, error, isLoading } = useAxiosGet(url);
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   console.log(response);
 * }
 */
export const useAxiosGet = (url: string): RequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getRequest = useCallback(() => createGetRequest(setResponse, setError, setIsLoading)(url), [url]);

  useEffect(() => {
    getRequest();
  }, [getRequest]);

  return {
    response,
    error,
    isLoading,
  };
};
