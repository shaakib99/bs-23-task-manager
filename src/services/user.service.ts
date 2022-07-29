import { ILogin } from "../interfaces/login.interface";
import { request } from "../utils/request";

export const loginUser = async (params: ILogin) => {
  return request({
    endpoint: "users",
    method: "POST",
    data: params,
  });
};
