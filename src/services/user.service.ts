import { ILogin } from "../interfaces/login.interface";
import { request } from "../utils/request";

export const loginUserService = async (params: ILogin) => {
  return request({
    endpoint: "users",
    method: "POST",
    data: params,
  });
};

export const getUserService = async (params: { id: number }) => {
  return request({
    endpoint: `users/${params.id}`,
    method: "GET",
    data: {},
  });
};
