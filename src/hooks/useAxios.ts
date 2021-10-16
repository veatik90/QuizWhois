// @ts-nocheck
import { useEffect, useState } from 'react';
import { axiosInstance } from '../configs/axios';

export enum HTTP_METHOD {
  GET = 'get',
  POST = 'post',
}

export function useAxios(requestType: HTTP_METHOD, url: string, body?: any) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance[requestType](url, body)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
