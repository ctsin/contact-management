import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { contactReducer } from "./contact.slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
