import {rest} from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          task: "할일1",
        },
        {
          id: 2,
          task: "할일2",
        },
      ]),
    );
  }),
];
