import { IMember } from "../interfaces/member.interface";
import { request } from "../utils/request";

export const getMembersService = async (params: {}) => {
  return request({
    endpoint: "members",
    method: "GET",
    data: params,
  });
};

export const getMemberByIdService = async (params: { id: string }) => {
  return request({
    endpoint: `members/${params.id}`,
    method: "GET",
    data: {},
  });
};

export const createMemberService = async (params: { data: IMember }) => {
  return request({
    endpoint: `members`,
    method: "POST",
    data: params.data,
  });
};

export const updateMemberByIdService = async (params: {
  id: string;
  data: IMember;
}) => {
  return request({
    endpoint: `members/${params.id}`,
    method: "PUT",
    data: params.data,
  });
};
