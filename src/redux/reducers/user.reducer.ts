import { IUser } from "../../interfaces/user.interface";
import { IAction } from "../../interfaces/action.interface";
import { SAVE_USER } from "../action-type";

const initState: IUser | null = null;
const userReducer = (state: IUser | null = initState, action: IAction) => {
  switch (action.type) {
    case SAVE_USER:
      if (state) {
        return { ...state, ...action.payload };
      }
      return {...action.payload}
    default:

      return state;
  }
};
export default userReducer;
