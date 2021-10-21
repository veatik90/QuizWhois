import { Dispatch } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from './utils/sendRequest';
import { HttpMethod } from './utils/constants';

export const useAxiosGetLazy = (
  setOnSuccess: Dispatch<AxiosResponse | null>,
  setOnError: Dispatch<AxiosResponse | undefined | null>,
  setIsLoading: Dispatch<boolean>,
) => {
  const requestGetLazy = (url: string) => {
    const request = sendRequest(setOnSuccess, setOnError, setIsLoading);
    request(HttpMethod.GET, url);
  };

  return {
    requestGetLazy,
  };
};
