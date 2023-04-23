import {render, screen} from "@testing-library/react";
import InputLab from "@/src/component/lab/InputLab";
import userEvent from "@testing-library/user-event";
describe("Input Lab", () => {
  context("query check", () => {
    it("getBy test ID", () => {
      render(<InputLab />);
      expect(screen.getByTestId("username")).toBeInTheDocument();
    });

    it("getByRole name", () => {
      render(<InputLab />);
      // const inputEls = screen.getByRole("textbox", {name: /user/i});
      const textareaEl = screen.getByLabelText("user", {
        selector: "textarea",
      });
      expect(textareaEl).toBeInTheDocument();
    });
  });

  it("type into an input field", async () => {
    render(<input defaultValue="Hello," />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, " World!");
    expect(input).toHaveValue("Hello, World!");
    expect(input).toHaveDisplayValue("Hello, World!");
  });
});
