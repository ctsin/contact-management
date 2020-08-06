import React, { FC, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail, selectDetail } from "../../store/detail.slice";
import { capitalize, dateFormatter } from "../../utils";
import { Contact } from "../../interfaces/contact.interface";
import { DescriptionList } from "../description-list/DescriptionList";
import { Nav } from "../nav/Nav";

import "./ContactDetails.scss";

interface Props {}

export const ContactDetails: FC<Props> = () => {
  const dispatch = useDispatch();
  const { Title, Name, BirthDate, ContactDetail } = useSelector(selectDetail);
  const { UserID } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const renderNav = () => (
    <div className="go-back" onClick={goBack}>
      Back
    </div>
  );

  const renderBirthday = (birthday: Contact["BirthDate"]) =>
    birthday ? (
      <div className="dl-group">
        <dt>Birthday</dt>
        <dd>{dateFormatter(BirthDate)}</dd>
      </div>
    ) : null;

  const renderContactDetail = (
    detail: Pick<typeof ContactDetail, "ContactDetailType" | "ContactDetailContent">
  ) => {
    if (!detail) {
      return null;
    }

    const { ContactDetailType, ContactDetailContent } = detail;

    return ContactDetailType ? (
      <div className="dl-group">
        <dt>{ContactDetailType}</dt>
        <dd>{ContactDetailContent}</dd>
      </div>
    ) : null;
  };

  useEffect(() => {
    dispatch(fetchDetail(UserID));
  }, [UserID, dispatch]);

  return (
    <div className="container">
      <Nav render={() => renderNav()} />

      <h1>
        {capitalize(Title)} {Name}
      </h1>
      <dl>
        <DescriptionList render={() => renderBirthday(BirthDate)} />
        <DescriptionList render={() => renderContactDetail(ContactDetail)} />
      </dl>
    </div>
  );
};
