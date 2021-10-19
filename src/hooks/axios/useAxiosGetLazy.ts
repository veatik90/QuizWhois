import { useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { createGetRequest } from './utils/createRequest';
import { GetLazyRequestResponse } from '../interfaces';

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
 * then the requestGetLazy call in place where you want send http request.
 *
 * EXAMPLE:
 * const [onSuccess, setOnSuccess] = useState<AxiosResponse | null>(null);
 * const [onError, setOnError] = useState<AxiosResponse | undefined | null>(null);
 * const [isLoading, setIsLoading] = useState<boolean>(true);
 *
 * const { requestGetLazy } = useAxiosGetLazy(setOnSuccess, setOnError, setIsLoading);
 *
 * handlerOnEvent() {
 *   const url = '/example-url';
 *   requestGetLazy(url);
 * }
 *
 * useEffect() {
 *  if (onSuccess) {
 *    ...
 *  }
 * }
 */
export const useAxiosGetLazy = (): GetLazyRequestResponse => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getRequest = useCallback((url: string) => createGetRequest(setResponse, setError, setIsLoading)(url), []);

  return {
    getRequest,
    response,
    error,
    isLoading,
  };
};
