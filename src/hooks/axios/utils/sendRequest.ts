/* eslint-disable func-names */
import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { axiosInstance } from '../../../configs/axios';

/** onSuccess, onError - обработчики. */
export function sendRequest(
  setOnSuccess: Dispatch<AxiosResponse | null>,
  setOnError: Dispatch<AxiosResponse | undefined | null>,
  setIsLoading: Dispatch<boolean>,
) {
  return function (requestType: string, url: string, body?: Record<string, unknown>) {
    axiosInstance
      .post(url, body)
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
}
