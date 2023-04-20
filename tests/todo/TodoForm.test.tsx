import {fireEvent, render, screen} from "@testing-library/react";
import TodoForm from "@/src/component/todo/TodoForm";

describe("todo 입력 컴포넌트", () => {
  function setting() {
    const onSubmit = jest.fn();
    const {container} = render(<TodoForm onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText("할일을 입력하세요.");
    const form = screen.getByRole("form", {name: "todo 입력 영역"});
    const button = screen.getByRole("button");
    return {
      onSubmit,
      input,
      form,
      button,
      container,
    };
  }

  context("화면에 렌더 될때", () => {
    it("요소가 정상적으로 출력되는가?", () => {
      const {container} = setting();
      expect(container).toBeInTheDocument();
    });
    it("input을 포함하는가? 입력 button을 포함하는가?", () => {
      const {input, button} = setting();
      expect(input).toBeInTheDocument();
      expect(button).toHaveTextContent("등록");
    });
  });

  context("등록 버튼을 클릭했을때", () => {
    it("input 값이 있을때 등록과 input 값이 비어지는가?", () => {
      const {input, form, onSubmit} = setting();
      fireEvent.change(input, {target: {value: "할일 2"}});
      fireEvent.submit(form);
      expect(onSubmit).toHaveBeenCalledWith("할일 2");
      expect(input).toHaveAttribute("value", "");
    });
    it("input에 값이 없을때 동작", () => {
      const {form, onSubmit} = setting();
      fireEvent.submit(form);
      expect(onSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
