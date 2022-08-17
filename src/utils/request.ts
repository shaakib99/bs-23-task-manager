import axios, { AxiosRequestConfig } from "axios";

export const request = async (options: {
  baseURL?: string;
  endpoint?: string;
  method?: "GET" | "POST" | "PUT" | "UPDATE" | "DELETE";
  data?: Record<string, any>;
}) => {
  const baseURL =
    options?.baseURL ||
    process.env.BASE_URL ||
    "https://62e3fbad3c89b95396d51f37.mockapi.io";

  const headers = {
    "Content-Type": "application/json",
  };

  const method = options?.method || "GET";
  const data = options?.data || {};
  const endpoint = options?.endpoint || "";
  const config: AxiosRequestConfig = {
    baseURL,
    method,
    headers,
    url: endpoint,
    params: (method === "GET" && data) || {},
    data: (method === "GET" && undefined) || data,
    validateStatus: (status) => status >= 200 && status < 300,
    transformResponse: (response) => JSON.parse(response),
  };

  const ax = axios;
  return ax.request({ ...config });
};
