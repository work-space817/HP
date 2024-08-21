import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { characterReducer } from "./reducers/characterReducer";

export const rootReducer = combineReducers({
  characterReducer: characterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
