import { useState } from "react";
import { ILogin } from "../interfaces/login.interface";
import { loginUser } from "../services/user.service";

export const useUser = (options: {}) => {
  const [isLoading, setLoading] = useState(false);

  const login = async (options: ILogin) => {
    setLoading(true);
    try {
      const response = await loginUser(options);
      if (response?.status === 201) {
      } else {
      }
      setLoading(false);
    } catch (err) {}
  };

  return { login, isLoading };
};
