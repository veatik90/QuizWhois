import { AxiosResponse } from 'axios';

/** Send http request and obtain response.  */
export interface RequestResponse {
  /** Response of server. */
  response: AxiosResponse | null;
  /** Error of server. */
  error: AxiosResponse | undefined | null;
  /** Status response of server */
  isLoading: boolean;
}

/** Send GET request and obtain response.  */
export interface GetLazyRequestResponse extends RequestResponse {
  /** Method send GET request. */
  getRequest: (url: string) => void;
}

/** Send POST request and obtain response.  */
export interface PostLazyRequestResponse extends RequestResponse {
  /** Method send POST request. */
  postRequest: (url: string, body: Record<string, unknown>) => void;
}

/** Method */
export type CreateRequest = (url: string, body?: Record<string, unknown>) => void;
