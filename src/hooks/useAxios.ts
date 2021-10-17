import { useEffect, useState } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { axiosInstance } from '../configs/axios';

export enum HttpMethod {
  GET = 'get',
  POST = 'post',
}

export function useAxios(requestType: HttpMethod, url: string, body?: Record<string, unknown>) {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosResponse | undefined | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance[requestType](url, body)
      .then((response: AxiosResponse) => {
        setData(response);
        setError(null);
      })
      .catch((response: AxiosError) => {
        setError(response.response);
        setData(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
