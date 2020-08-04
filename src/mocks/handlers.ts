import { rest } from "msw";
import { data } from "./data";
import { contactsURL } from "../constants";

export const handlers = [
  rest.get(contactsURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.post(contactsURL, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
