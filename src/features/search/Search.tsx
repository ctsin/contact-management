import React, { FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../store/contact.slice";
import { DebounceInput } from "react-debounce-input";

import "./Search.scss";

interface Props {
  placeholder?: string;
}

export const Search: FC<Props> = ({ placeholder }) => {
  const dispatch = useDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const Name = event.target.value;

    dispatch(fetchContacts(Name.length ? { Name } : {}));
  };

  return (
    <div className="search">
      <label className="name-search-label" htmlFor="name-search">
        Search for
      </label>
      <DebounceInput
        id="name-search"
        className="field"
        placeholder={placeholder ?? "Name"}
        type="search"
        debounceTimeout={300}
        onChange={changeHandler}
      />
    </div>
  );
};
