import {render, screen} from "@testing-library/react";
import {spyOn} from "jest-mock";
import AlertLab from "@/src/component/lab/AlertLab";

describe("alert", () => {
  const mock = spyOn(window, "alert").mockImplementation(jest.fn());
  it("is show?", () => {
    render(<AlertLab />);
    expect(mock).toHaveBeenCalledTimes(1);
    // const alert = screen.getByRole("alert");
    // expect(alert).toHaveTextContent("알림");
  });
});
