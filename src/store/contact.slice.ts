import { Contact, PartialContact } from "../interfaces/contact.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from ".";
import { contactsURL } from "../constants";
import { objectToQueryString, propsStringify } from "../utils";

const initialState: Contact[] = [] as Contact[];

export const contactSlice = createSlice({
  name: "contact-table",
  initialState,
  reducers: {
    getContacts(_, action: PayloadAction<Contact[]>) {
      return action.payload;
    },
  },
});

export const { getContacts } = contactSlice.actions;

export const fetchContacts = (filters: PartialContact = {}): AppThunk => async (dispatch) => {
  const params = objectToQueryString(propsStringify(filters));

  const res = await fetch(contactsURL + params).then<Contact[]>((data) => data.json());

  dispatch(getContacts(res));
};

export const selectContacts = (state: RootState) => state.contacts;

export const contactReducer = contactSlice.reducer;
