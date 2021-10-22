import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { createGetRequest } from './utils/createRequest';
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
 * then the requestGet call in place where you want send http request.
 *
 * EXAMPLE:
 * const { requestGet, onSuccess, onError, isLoading } = useAxiosGet();
 *
 * handlerOnEvent() {
 *   const url = '/example-url';
 *   requestGet(url);
 * }
 *
 * useEffect() {
 *  if (onSuccess) {
 *    ...
 *  }
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
