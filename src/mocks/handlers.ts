import {rest} from "msw";
import {todos, users} from "../../fixtures/placeholer";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
  rest.get(
    "https://hhhhjsonplaceholder.typicode.com/users",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(users));
    },
  ),
];

//
