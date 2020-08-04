import { Contact } from "../../interfaces/contact.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { contactsURL } from "../../constants";

const initialState: Contact[] = [] as Contact[];

export const contactSlice = createSlice({
  name: "contact-table",
  initialState,
  reducers: {
    getContacts(state, action: PayloadAction<Contact[]>) {
      return [...state, ...action.payload];
    },
  },
});

export const { getContacts } = contactSlice.actions;

export const fetchContacts = (): AppThunk => async (dispatch) => {
  const res = await fetch(contactsURL).then<Contact[]>((data) => data.json());

  dispatch(getContacts(res));
};

export const selectContacts = (state: RootState) => state.contacts;

export const contactReducer = contactSlice.reducer;
