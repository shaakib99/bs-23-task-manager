import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMember } from "../interfaces/member.interface";
import { ADD_MEMBER } from "../redux/action-type";
import {
  createMemberService,
  getMemberByIdService,
  getMembersService,
  updateMemberByIdService,
} from "../services/member.service";

interface IRootState {
  MemberReducer: IMember[];
}

export const useMember = (props: {}) => {
  const [isLoading, setLoading] = useState(false);
  const members = useSelector<IRootState, IMember[]>(
    (root) => root.MemberReducer
  );
  const dispatch = useDispatch();

  const saveMembers = (newMember: IMember[]) => {
    return dispatch({
      type: ADD_MEMBER,
      payload: [...members, ...newMember],
    });
  };

  const getMembers = async (options: {}) => {
    setLoading(true);
    try {
      const response = await getMembersService(options);
      if (response.status === 200) {
        saveMembers(response.data);
      }
      setLoading(false);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const getMemberById = async (id: string) => {
    setLoading(true);
    try {
      const response = await getMemberByIdService({ id });
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const createMember = async (data: IMember) => {
    setLoading(true);
    try {
      const response = await createMemberService({ data });
      if (response.status === 201) {
        saveMembers([response.data]);
        return response.data;
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  const updateMemberById = async (id: string, data: IMember) => {
    setLoading(true);
    try {
      const response = await updateMemberByIdService({ id, data });
      if (response.status === 200) {
        dispatch({
          type: ADD_MEMBER,
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
    getMembers,
    getMemberById,
    updateMemberById,
    createMember,
    members,
    isLoading,
  };
};
