import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from './utils/sendRequest';
import { HttpMethod } from './utils/constants';

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
export const useAxiosPost = () => {
  const [onSuccess, setOnSuccess] = useState<AxiosResponse | null>(null);
  const [onError, setOnError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const requestPost = (url: string, body?: Record<string, unknown>) => {
    const request = sendRequest(setOnSuccess, setOnError, setIsLoading);
    request(HttpMethod.POST, url, body);
  };

  return {
    requestPost,
    onSuccess,
    onError,
    isLoading,
  };
};
