import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from './axios/utils/sendRequest';

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
}

/** TODO: Добавить комментарий как работать с хуком */
// useAxiosLazy (без реквест типа).
// useAxios (с реквестом). Как было раньше.

/**
 * Будет 4 хука: useAxiosGet, useAxiosGetLazy, useAxiosPost, useAxiosPostLazy.
 */
export function useAxios() {
  const [onSuccess, setOnSuccess] = useState<AxiosResponse | null>(null);
  const [onError, setOnError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const getRequest = (url: string) => {
  //   const request = sendRequest(setData, setError, setIsLoading);
  //   request(HttpMethod.POST, url, body);
  // };
  const postRequest = (url: string, body?: Record<string, unknown>) => {
    const request = sendRequest(setOnSuccess, setOnError, setIsLoading);
    request(HttpMethod.POST, url, body);
  };

  return {
    // getRequest,
    postRequest,
    onSuccess,
    onError,
    isLoading,
  };
}
