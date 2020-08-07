import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, fetchContacts } from "../../store/contact.slice";
import { Gird } from "../../features/grid/Grid";
import { Filters } from "../../features/filters/Filters";
import { Checkbox } from "../../features/checkbox/Checkbox";
import { Search } from "../../features/search/Search";

import "./List.scss";

export const List = () => {
  const contactTitle = ["Name", "Birth Date", "Favorite"];
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <Filters>
        <Checkbox label="Favorite Only" />
        <Search />
      </Filters>

      <Gird titles={contactTitle} data={contacts} />
    </div>
  );
};
