import {render, screen} from "@testing-library/react";
import MswTodoLab from "@/src/component/lab/MswTodoLab";
import {rest} from "msw";
import {server} from "@/src/mocks/server";

describe("MSW", () => {
  it("todo list call", async () => {
    render(<MswTodoLab />);
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(2);
  });
  it("에러가 발생한 상황", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );
    render(<MswTodoLab />);
    const errorEl = await screen.findByText(/Error/);
    expect(errorEl).toBeInTheDocument();
  });
  it("엉뚱한 api call 도 mocking을 해주는가?", async () => {
    render(<MswTodoLab />);
    expect(await screen.findByText(/userInfos/)).toBeInTheDocument();
  });

  it("user api error", async () => {
    server.use(
      rest.get(
        "https://hhhhjsonplaceholder.typicode.com/users",
        (req, res, context) => {
          return res(context.status(500));
        },
      ),
    );
    render(<MswTodoLab />);

    expect(await screen.findByText(/userInfos/)).not.toBeInTheDocument();
  });
});
