/* eslint-disable func-names */
import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { axiosInstance } from '../../../configs/axios';
import { CreateRequest } from '../interfaces';
import { HttpMethod } from './constants';

function createRequest(
  requestType: HttpMethod,
  onSuccess: Dispatch<AxiosResponse | null>,
  onError: Dispatch<AxiosResponse | undefined | null>,
  onLoading: Dispatch<boolean>,
): CreateRequest {
  return function (url: string, body?: Record<string, unknown>) {
    axiosInstance[requestType](url, body)
      .then((response: AxiosResponse) => {
        onSuccess(response);
        onError(null);
      })
      .catch((response: AxiosError) => {
        onError(response.response);
        onSuccess(null);
      })
      .finally(() => onLoading(false));
  };
}

export function createGetRequest(
  onSuccess: Dispatch<AxiosResponse | null>,
  onError: Dispatch<AxiosResponse | undefined | null>,
  onLoading: Dispatch<boolean>,
): CreateRequest {
  return createRequest(HttpMethod.GET, onSuccess, onError, onLoading);
}

export function createPostRequest(
  onSuccess: Dispatch<AxiosResponse | null>,
  onError: Dispatch<AxiosResponse | undefined | null>,
  onLoading: Dispatch<boolean>,
): CreateRequest {
  return createRequest(HttpMethod.POST, onSuccess, onError, onLoading);
}

export function createDeleteRequest(
  onSuccess: Dispatch<AxiosResponse | null>,
  onError: Dispatch<AxiosResponse | undefined | null>,
  onLoading: Dispatch<boolean>,
): CreateRequest {
  return createRequest(HttpMethod.DELETE, onSuccess, onError, onLoading);
}

export function createPutRequest(
  onSuccess: Dispatch<AxiosResponse | null>,
  onError: Dispatch<AxiosResponse | undefined | null>,
  onLoading: Dispatch<boolean>,
): CreateRequest {
  return createRequest(HttpMethod.PUT, onSuccess, onError, onLoading);
}
