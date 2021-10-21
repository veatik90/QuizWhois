import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from './utils/sendRequest';
import { HttpMethod } from './utils/constants';

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
