import React, { FC, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../store/contact.slice";
import "./Search.scss";

interface Props {
  placeholder?: string;
}

export const Search: FC<Props> = ({ placeholder }) => {
  const id = uuid();
  const dispatch = useDispatch();

  // Todo: Debounce on input action
  const onChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const Name = event.target.value;

    dispatch(fetchContacts(Name.length ? { Name } : {}));
  };

  return (
    <div className="search">
      <input
        className="field"
        placeholder={placeholder ?? "Search"}
        type="search"
        id={id}
        onChange={onChanged}
      />
    </div>
  );
};
