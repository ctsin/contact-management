import { Contact } from "../interfaces/contact.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from ".";
import { contactsURL } from "../constants";

const initialState: Contact = {} as Contact;

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getDetail(_, action: PayloadAction<Contact>) {
      return action.payload;
    },
  },
});

export const { getDetail } = detailSlice.actions;

export const fetchDetail = (UserId: string): AppThunk => async (dispatch) => {
  const res = await fetch(contactsURL + UserId).then<Contact>((data) => data.json());

  dispatch(getDetail(res));
};

export const selectDetail = (state: RootState) => state.detail;

export const detailReducer = detailSlice.reducer;
