import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { PutLazyRequestResponse } from './interfaces';
import { createPutRequest } from './utils/createRequest';

/**
 * This hook triggered when component using his function 'postRequest'.
 * He send a http PUT request in server and takes a response.
 *
 * USE:
 * It call the hook at top level of component.
 * Call function 'putRequest' on place where you need http request.
 * Using data of server.
 *
 * EXAMPLE:
 * const { putRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosPutLazy();
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   putRequest(url, body);
 * }
 */
export const useAxiosPutLazy = (): PutLazyRequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const putRequest = useCallback((url: string, body: Record<string, unknown>) => {
    setIsLoading(true);
    createPutRequest(setResponse, setError, setIsLoading)(url, body);
  }, []);

  return {
    putRequest,
    response,
    error,
    isLoading,
  };
};
