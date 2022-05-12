import axios from "axios";
import { UserAuth } from "../interface/UserAuth.model";
import { IUserInfo } from "./newUserAuth";
const URI = "http://localhost:4000";

export  const loginAuth = async (InfoUser: UserAuth) => {
  try {

    const {data} = await axios.post<IUserInfo>(
      `${URI}/auth/login`,
      InfoUser
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
