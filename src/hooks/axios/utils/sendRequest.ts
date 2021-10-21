/* eslint-disable */
import { AxiosError, AxiosResponse } from 'axios';
import { axiosInstance } from '../../../configs/axios';
import { Dispatch } from 'react';

export const sendRequest = (
  setOnSuccess: Dispatch<AxiosResponse | null>,
  setOnError: Dispatch<AxiosResponse | undefined | null>,
  setIsLoading: Dispatch<boolean>,
) =>
  (requestType: string, url: string, body?: Record<string, unknown>) => {
  axiosInstance.post(url, body)
    .then((response: AxiosResponse) => {
      setOnSuccess(response);
      setOnError(null);
    })
    .catch((response: AxiosError) => {
      setOnError(response.response);
      setOnSuccess(null);
    })
    .finally(() => setIsLoading(false));
};
