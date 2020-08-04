import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, fetchContacts } from "./List.slice";
import { Gird } from "../grid/Grid";

export const List = () => {
  const contactTitle = ["Name", "Birth Date", "Favorite"];
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Gird titles={contactTitle} data={contacts} />
    </>
  );
};
