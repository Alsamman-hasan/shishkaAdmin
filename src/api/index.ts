import { AxiosPromise } from "axios";
import app from "../shared/model/utils/interceptors";

const baseURL = process.env.REACT_APP_API_URL;

export const get = <T>(
  url: string,
  params = {},
  token?: string
): AxiosPromise<T> =>
  app({
    baseURL,
    url,
    method: "get",
    params,
    headers: { Authorization: `Bearer ${token}` },
  });

export const postRPC = <T>(
  params: { method: string; params?: any },
  headers?: any
): AxiosPromise<T> =>
  app({
    baseURL,
    ...headers,
    method: "post",
    data: params,
  });

export const postRPCFormData = <T>(params: FormData): AxiosPromise<T> =>
  app({
    baseURL,
    headers: {
      "content-type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    method: "post",
    data: params,
  });

export const post = <T>(
  url: string,
  data = {},
  headers?: any,
  token?: string
): AxiosPromise<T> =>
  app({
    baseURL,
    url,
    ...headers,
    ...{ Authorization: `Bearer ${token}` },
    method: "post",
    data,
  });

export const remove = (
  url: string,
  params = {},
  token?: string
): AxiosPromise =>
  app({
    baseURL,
    url,
    method: "delete",
    params,
    headers: { Authorization: `Bearer ${token}` },
  });

export const put = (url: string, data = {}, token?: string) =>
  app({
    baseURL,
    url,
    method: "put",
    data,
    headers: { Authorization: `Bearer ${token}` },
  });

export const patch = (url: string, data = {}, token?: string) =>
  app({
    baseURL,
    url,
    method: "patch",
    data,
    headers: { Authorization: `Bearer ${token}` },
  });
