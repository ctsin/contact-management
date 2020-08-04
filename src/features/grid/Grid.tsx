import React, { FC } from "react";
import { Contact } from "../../interfaces/contact.interface";
import { boolAsStringFormatter } from "../../utils";
import "./Grid.scss";

interface Props {
  titles: string[];
  data: Contact[];
}

export const Gird: FC<Props> = ({ titles = [], data = [] }) => {
  const renderTbody = (dataSource: typeof data) => {
    if (!dataSource.length) {
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    }

    return dataSource.map(({ Title, Name, BirthDate, IsFavorite, UserID }) => (
      <tr key={UserID}>
        <td>
          {Title} {Name}
        </td>
        <td>{BirthDate}</td>
        <td>{boolAsStringFormatter(IsFavorite, "✔", "")}</td>
      </tr>
    ));
  };

  return (
    <table className="grid-table">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>{renderTbody(data)}</tbody>
    </table>
  );
};
