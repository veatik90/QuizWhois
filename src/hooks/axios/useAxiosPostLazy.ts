import { Dispatch } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from './utils/sendRequest';
import { HttpMethod } from './utils/constants';

export const useAxiosPostLazy = (
  setOnSuccess: Dispatch<AxiosResponse | null>,
  setOnError: Dispatch<AxiosResponse | undefined | null>,
  setIsLoading: Dispatch<boolean>,
) => {
  const requestPostLazy = (url: string, body?: Record<string, unknown>) => {
    const request = sendRequest(setOnSuccess, setOnError, setIsLoading);
    request(HttpMethod.POST, url, body);
  };

  return {
    requestPostLazy,
  };
};
