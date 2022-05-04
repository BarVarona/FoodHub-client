import axios from "axios";
import { UserAuth } from "../interface/UserAuth.model";

export  const loginAuth = async (InfoUser: UserAuth) => {
  try {
    await axios.post("/api", InfoUser);
    console.log("done!!");
  } catch (error) {
    console.log(error);
    console.log("done!!");
  }
};
