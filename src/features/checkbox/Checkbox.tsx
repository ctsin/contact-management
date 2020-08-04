import React, { FC, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../store/contact.slice";
import "./Checkbox.scss";

interface Props {
  label: string;
  id?: string;
}

export const Checkbox: FC<Props> = ({ label, id = uuid() }) => {
  const dispatch = useDispatch();

  const onChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    dispatch(fetchContacts(checked ? { IsFavorite: "1" } : {}));
  };

  return (
    <div className="checkbox">
      <input type="checkbox" id={id} onChange={onChanged} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
