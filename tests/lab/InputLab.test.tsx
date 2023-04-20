import {render, screen} from "@testing-library/react";
import InputLab from "@/src/component/lab/InputLab";

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
});
