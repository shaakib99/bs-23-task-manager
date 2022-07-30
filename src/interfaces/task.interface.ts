import { IUser } from "./user.interface";

export interface ITask {
  title: string;
  description?: string;
  assignTo?: IUser;
  cTime?: number;
  id?: number;
}
