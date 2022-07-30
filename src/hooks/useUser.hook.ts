import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localStorageKeys } from "../common/mock/storage-keys.mock";
import { ILogin } from "../interfaces/login.interface";
import { IUser } from "../interfaces/user.interface";
import { SAVE_USER } from "../redux/action-type";
import { loginUserService, getUserService } from "../services/user.service";

interface IRootState {
  UserReducer: IUser;
}
export const useUser = (options: {}) => {
  const user = useSelector<IRootState, IUser>((root) => root.UserReducer);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const saveUser = (payload: IUser) => {
    localStorage.setItem(localStorageKeys.USER, JSON.stringify(payload));
    return dispatch({
      type: SAVE_USER,
      payload: payload,
    });
  };

  const getUser = async (id: number) => {
    const response = await getUserService({ id });
    if (response.status === 200) {
      saveUser(response.data);
      return response.data;
    }
  };

  const login = async (options: ILogin) => {
    setLoading(true);
    try {
      const response = await loginUserService(options);
      setLoading(false);
      if (response?.status === 201) {
        saveUser(response.data);
        window.location.reload();
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return { login, isLoading, user, getUser, saveUser };
};
