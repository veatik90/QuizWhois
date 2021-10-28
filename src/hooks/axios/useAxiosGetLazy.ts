import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { GetLazyRequestResponse } from './interfaces';
import { createGetRequest } from './utils/createRequest';

/**
 * This hook triggered when component using his function 'getRequest'.
 * He send a http GET request in server and takes a response.
 *
 * USE:
 * It call the hook at top level of component.
 * Call function 'getRequest' on place where you need http request.
 * Using data of server.
 *
 * EXAMPLE:
 * const { getRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosGetLazy();
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   getRequest(url);
 * }
 */
export const useAxiosGetLazy = (): GetLazyRequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRequest = useCallback((url: string) => {
    setIsLoading(true);
    createGetRequest(setResponse, setError, setIsLoading)(url);
  }, []);

  return {
    getRequest,
    response,
    error,
    isLoading,
  };
};
