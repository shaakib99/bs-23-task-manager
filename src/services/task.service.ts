import { ITask } from "../interfaces/task.interface";
import { request } from "../utils/request";

export const getTasksService = async (params: {}) => {
  return request({
    endpoint: "tasks",
    method: "GET",
    data: params,
  });
};

export const getTaskByIdService = async (params: { id: string }) => {
  return request({
    endpoint: `tasks/${params.id}`,
    method: "GET",
    data: {},
  });
};

export const createTaskService = async (params: { data: ITask }) => {
  return request({
    endpoint: `tasks`,
    method: "POST",
    data: params.data,
  });
};

export const updateTaskByIdService = async (params: {
  id: string;
  data: ITask;
}) => {
  return request({
    endpoint: `tasks/${params.id}`,
    method: "PUT",
    data: params.data,
  });
};
