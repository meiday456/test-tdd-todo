import TodoItem from "@/src/component/todo/TodoItem";
import {fireEvent, render, screen} from "@testing-library/react";

describe("TODO Item", () => {
  const task = {id: 13, task: "할일"};
  const setting = () => {
    const onDeleteHandler = jest.fn();
    const onChangeHandler = jest.fn();
    const {container} = render(
      <TodoItem
        item={task}
        onDelete={onDeleteHandler}
        onChange={onChangeHandler}
      />,
    );
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", {name: "삭제"});
    return {
      container,
      input,
      button,
      onDeleteHandler,
    };
  };
  context("is render?", () => {
    it("할일 출력과 , 삭제버튼을 가지고 있는가?", () => {
      const {input, button} = setting();
      expect(input).toHaveDisplayValue("할일");
      expect(button).toBeInTheDocument();
    });
  });

  context("삭제 버튼을 클릭했을때", () => {
    it("할일이 사라지는가?", () => {
      const {container, button, onDeleteHandler} = setting();
      fireEvent.click(button);

      expect(onDeleteHandler).toHaveBeenCalledWith(task.id);
      expect(onDeleteHandler).toHaveBeenCalledTimes(1);
      // delete handelr 를 mocking 하였기 때문에 실질적인 확인은 item에서는 어렵다.
      // expect(container).not.toBeInTheDocument();
    });
  });

  context("할일을 변경 시", () => {
    it("변경된 할일이 출력되는가?", () => {
      const {input} = setting();
      fireEvent.change(input, {target: {value: "변경"}});
      expect(screen.getByDisplayValue("변경")).toBeInTheDocument();
    });
  });
});
