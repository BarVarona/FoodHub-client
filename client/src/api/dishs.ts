import axios from "axios";
import { foodDb } from "../data/foodDb";
import { IDishes } from "../interface/IDishes.model";

export function dishs(): IDishes[] {
  const data: IDishes[] = foodDb;

  return data;
}
