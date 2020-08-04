import { rest } from "msw";
import { data } from "./data";
import { contactsURL } from "../constants";
import { getURLParameters, withFilters } from "../utils";
import { Contact } from "../interfaces/contact.interface";

export const handlers = [
  rest.get(contactsURL, (req, res, ctx) => {
    const query = getURLParameters(req.url.href);

    const contacts = withFilters<Contact>(data as Contact[], query);

    return res(ctx.status(200), ctx.json(contacts));
  }),
  rest.post(contactsURL, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
