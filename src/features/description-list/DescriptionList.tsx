import React, { FC } from "react";

import "./DescriptionList.scss";

interface Props {
  render: () => JSX.Element | null;
}

export const DescriptionList: FC<Props> = ({ render }) => (
  <div className="description-list">{render()}</div>
);
