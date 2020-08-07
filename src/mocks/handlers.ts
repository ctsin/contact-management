import { rest } from "msw";
import { data } from "./data";
import { contactsURL } from "../constants";
import { getURLParameters, withFilters } from "../utils";

export const handlers = [
  rest.get(contactsURL, (req, res, ctx) => {
    const query = getURLParameters(req.url.href);

    const contacts = withFilters(data, query);

    return res(ctx.status(200), ctx.json(contacts));
  }),

  rest.get(`${contactsURL}:UserID`, (req, res, ctx) => {
    const { UserID: id } = req.params;

    const user = data.find(({ UserID }) => UserID === id);

    if (!user) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(user));
  }),

  rest.post(contactsURL, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
