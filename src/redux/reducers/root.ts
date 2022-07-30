import { combineReducers } from "redux";
import UserReducer from "./user.reducer";
import TaskReducer from "./task.reducer";
import MemberReducer from "./member.reducer";
import { IAction } from "../../interfaces/action.interface";
import { RESET_REDUX } from "../action-type";

const combineReducer = combineReducers({
  UserReducer,
  TaskReducer,
  MemberReducer,
});

const rootReducer = (state: any, action: IAction) => {
  if (action.type === RESET_REDUX) {
    state = undefined;
  }

  return combineReducer(state, action);
};
export default rootReducer;
