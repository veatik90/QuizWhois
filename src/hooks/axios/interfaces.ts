import { AxiosResponse } from 'axios';

export interface RequestResponse {
  response: AxiosResponse | null;
  error: AxiosResponse | undefined | null;
  isLoading: boolean;
}

export interface GetLazyRequestResponse extends RequestResponse {
  getRequest: (url: string) => void;
}

export interface PostLazyRequestResponse extends RequestResponse {
  postRequest: (url: string, body: Record<string, unknown>) => void;
}

export type CreateRequest = (url: string, body?: Record<string, unknown>) => void;
