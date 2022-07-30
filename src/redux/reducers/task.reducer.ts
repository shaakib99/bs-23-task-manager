import { ITask } from "../../interfaces/task.interface";
import { IAction } from "../../interfaces/action.interface";
import { ADD_TASK } from "../action-type";

const initState: ITask[] = [];

const taskReducre = (state = initState, action: IAction) => {
  switch (action.type) {
    case ADD_TASK:
      return [...action.payload];
    default:
      return state;
  }
};
export default taskReducre
