import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { DeleteLazyRequestResponse } from './interfaces';
import { createDeleteRequest } from './utils/createRequest';

/**
 * This hook triggered when component using his function 'deleteRequest'.
 * He send a http DELETE request in server and takes a response.
 *
 * USE:
 * It call the hook at top level of component.
 * Call function 'deleteRequest' on place where you need http request.
 * Using data of server.
 *
 * EXAMPLE:
 * const { deleteRequest, response: responseLazy, error: errorLazy, isLoading: isLoadingLazy } = useAxiosDeleteLazy();
 *
 * handlerOnEvent(data: Record<string, unknown>) {
 *   deleteRequest(url);
 * }
 */
export const useAxiosDeleteLazy = (): DeleteLazyRequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteRequest = useCallback((url: string) => {
    setIsLoading(true);
    createDeleteRequest(setResponse, setError, setIsLoading)(url);
  }, []);

  return {
    deleteRequest,
    response,
    error,
    isLoading,
  };
};
