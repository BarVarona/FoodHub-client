import axios from "axios";
import { NewUserAuth } from "../interface/NewUserAuth.model";
const URI = "http://localhost:4000";
export interface IUserInfo {
  message: string;
  token: string;
  isAdmin: boolean;
  status: boolean;
}

export const registerAuth = async (InfoUser: NewUserAuth) => {
  try {
    const { data } = await axios.post<IUserInfo>(
      `${URI}/auth/register`,
      InfoUser
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
