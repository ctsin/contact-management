import React, { FC } from "react";

import "./ContactDetails.scss";
import { useParams } from "react-router-dom";

interface Props {}

export const ContactDetails: FC<Props> = () => {
  const { UserId } = useParams();

  return <>{UserId}</>;
};
