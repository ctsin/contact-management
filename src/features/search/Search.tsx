import React, { FC, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../store/contact.slice";
import { DebounceInput } from "react-debounce-input";

import "./Search.scss";

interface Props {
  placeholder?: string;
}

export const Search: FC<Props> = ({ placeholder }) => {
  const id = uuid();
  const dispatch = useDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const Name = event.target.value;

    dispatch(fetchContacts(Name.length ? { Name } : {}));
  };

  return (
    <div className="search">
      <DebounceInput
        className="field"
        placeholder={placeholder ?? "Search"}
        type="search"
        debounceTimeout={300}
        onChange={changeHandler}
        id={id}
      />
    </div>
  );
};
