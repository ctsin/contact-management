import { rest } from "msw";

export const handlers = [
  rest.get("/list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "admin" }));
  }),
  rest.post("/list", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
