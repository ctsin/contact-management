import React, { FC, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail, selectDetail } from "../../store/detail.slice";
import { capitalize } from "../../utils";
import { Contact } from "../../interfaces/contact.interface";

import "./ContactDetails.scss";
import { DescriptionList } from "../description-list/DescriptionList";

interface Props {}

export const ContactDetails: FC<Props> = () => {
  const dispatch = useDispatch();
  const { Title, Name, BirthDate, ContactDetail } = useSelector(selectDetail);
  const { UserID } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const renderBirthday = (birthday: Contact["BirthDate"]) =>
    birthday ? (
      <div className="dl-group">
        <dt>Birthday</dt>
        <dd>{BirthDate}</dd>
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
      {/* Todo: abstract .nav-top section as a reused component */}
      <div className="nav-top">
        <div className="go-back" onClick={goBack}>
          Back
        </div>
      </div>

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
