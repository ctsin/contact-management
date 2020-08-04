import React, { FC } from "react";
import "./Filters.scss";

export const Filters: FC = ({ children }) => {
  return <div className="filters">{children}</div>;
};
