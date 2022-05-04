import axios from "axios";
import { NewUserAuth } from "../interface/NewUserAuth.model";
export  const RegisterAuth = async (InfoUser: NewUserAuth) => {
  try {
    await axios.post("/api", InfoUser);
    console.log("done!!");
  } catch (error) {
    console.log(error);
    console.log("done!!");
  }
};
