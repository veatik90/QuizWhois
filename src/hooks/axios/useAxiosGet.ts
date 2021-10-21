import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from './utils/sendRequest';
import { HttpMethod } from './utils/constants';

export const useAxiosGet = () => {
  const [onSuccess, setOnSuccess] = useState<AxiosResponse | null>(null);
  const [onError, setOnError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const requestGet = (url: string) => {
    const request = sendRequest(setOnSuccess, setOnError, setIsLoading);
    request(HttpMethod.GET, url);
  };

  return {
    requestGet,
    onSuccess,
    onError,
    isLoading,
  };
};
