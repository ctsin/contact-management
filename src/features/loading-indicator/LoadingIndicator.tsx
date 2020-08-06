import React, { FC } from "react";

import "./LoadingIndicator.scss";

interface Props {
  title?: string;
}

export const LoadingIndicator: FC<Props> = ({ title = "Loading" }) => (
  <div className="loading-indicator">{title}</div>
);
