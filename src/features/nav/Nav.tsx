import React, { FC } from "react";

import "./Nav.scss";

interface Props {
  render: () => JSX.Element | null;
}

export const Nav: FC<Props> = ({ render }) => <div className="nav">{render()}</div>;
