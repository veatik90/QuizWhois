import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { PostLazyRequestResponse } from './interfaces';
import { createPostRequest } from './utils/createRequest';

/**
 * This hook triggered when component using his function 'postRequest'.
 * He send a http POST request in server and takes a response.
 *
 * USE:
 * It call the hook at top level of component.
 * Call function 'postRequest' on place where you need http request.
 * Using data of server.
 *
 * EXAMPLE:
 * const { postRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosPostLazy();
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   postRequest(url, body);
 * }
 */
export const useAxiosPostLazy = (): PostLazyRequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postRequest = useCallback((url: string, body: Record<string, unknown>) => {
    setIsLoading(true);
    createPostRequest(setResponse, setError, setIsLoading)(url, body);
  }, []);

  return {
    postRequest,
    response,
    error,
    isLoading,
  };
};
