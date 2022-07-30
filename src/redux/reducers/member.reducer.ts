import { IAction } from "../../interfaces/action.interface";
import { ADD_MEMBER } from "../action-type";
import { IMember } from "../../interfaces/member.interface";

const initState: IMember[] = [];

const memberReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case ADD_MEMBER:
      return [...action.payload];
    default:
      return state;
  }
};
export default memberReducer;
