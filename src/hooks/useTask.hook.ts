import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "../interfaces/task.interface";
import { ADD_TASK } from "../redux/action-type";
import {
  createTaskService,
  getTaskByIdService,
  getTasksService,
  updateTaskByIdService,
} from "../services/task.service";

interface IRootState {
  TaskReducer: ITask[];
}

export const useTask = (props: {}) => {
  const [isLoading, setLoading] = useState(false);
  const tasks = useSelector<IRootState, ITask[]>((root) => root.TaskReducer);
  const dispatch = useDispatch();

  const saveTask = (newTasks: ITask[]) => {
    return dispatch({
      type: ADD_TASK,
      payload: [...tasks, ...newTasks],
    });
  };

  const getTasks = async (options: {}) => {
    setLoading(true);
    try {
      const response = await getTasksService(options);
      if (response.status === 200) {
        saveTask(response.data);
      }
      setLoading(false);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const getTaskById = async (id: string) => {
    setLoading(true);
    try {
      const response = await getTaskByIdService({ id });
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (data: ITask) => {
    setLoading(true);
    try {
      const response = await createTaskService({ data });
      if (response.status === 201) {
        saveTask([response.data]);
        return response.data;
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const updateTaskById = async (id: string, data: ITask) => {
    setLoading(true);
    try {
      const response = await updateTaskByIdService({ id, data });
      if (response.status === 200) {
        dispatch({
          type: ADD_TASK,
          payload: [],
        });
        return response.data;
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return {
    getTasks,
    createTask,
    updateTaskById,
    getTaskById,
    tasks,
    isLoading,
  };
};
