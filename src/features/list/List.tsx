import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, fetchContacts } from "../../store/contact.slice";
import { Gird } from "../grid/Grid";
import { Filters } from "../filters/Filters";
import { Checkbox } from "../checkbox/Checkbox";
import { Search } from "../search/Search";

import "./List.scss";

export const List = () => {
  const contactTitle = ["Name", "Birth Date", "Favorite"];
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="list-container">
      <Filters>
        <Checkbox label="Favorite Only" />
        <Search />
      </Filters>

      <Gird titles={contactTitle} data={contacts} />
    </div>
  );
};
