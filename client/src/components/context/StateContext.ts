import { createContext } from "react";
import { IDishes } from "../../interface/IDishes.model";

export interface AppState {
  dishes: IDishes[] | null;
}

export interface Context {
  appState: AppState;
  setAppState: (state: Partial<AppState>) => any;
}

export const StateContext = createContext<Context>({
  appState: {} as any,
  setAppState: (state: any) => null,
});
