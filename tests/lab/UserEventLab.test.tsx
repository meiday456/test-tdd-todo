import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserEventLab from "@/src/component/lab/UserEventLab";

describe("user Event", () => {
  context("counter", () => {
    const setting = () => render(<UserEventLab />);

    it("+ , - 버튼이 존재하는가?", () => {
      setting();
      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveTextContent("-");
      expect(buttons[1]).toHaveTextContent("+");
    });
    // const user = userEvent.setup();
    it("+버튼 클릭", async () => {
      setting();
      const btn = screen.getByRole("button", {name: "+"});
      await userEvent.click(btn);
      // await user.click(btn);

      expect(screen.getByText("current count = 1")).toBeInTheDocument();
    });
    it("tab 후 enter 클릭", async () => {
      setting();
      const btn = screen.getByRole("button", {name: "+"});
      await userEvent.tab();
      await userEvent.keyboard("{Enter}");

      expect(screen.getByText("current count = -1")).toBeInTheDocument();
    });
    it("tab 후 space 클릭", async () => {
      setting();
      const btn = screen.getByRole("button", {name: "+"});
      await userEvent.tab();
      await userEvent.keyboard(" ");

      expect(screen.getByText("current count = -1")).toBeInTheDocument();
    });
  });
});
