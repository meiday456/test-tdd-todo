import {render, screen} from "@testing-library/react";
import TodoList from "@/src/component/todo/TodoList";
import {TaskInterface} from "@/src/types/TaskTypes";
import {taskList} from "../../fixtures/todoFeature";
describe("TODO LIST", () => {
  const setting = (list: TaskInterface[]) => {
    const onDelete = jest.fn();
    const onChange = jest.fn();
    const utils = render(
      <TodoList list={list} onDelete={onDelete} onChange={onChange}></TodoList>,
    );
    return {
      ...utils,
      onDelete,
    };
  };
  context("TODO가 있을때", () => {
    it("is render", () => {
      setting(taskList);
      expect(screen.getByDisplayValue("할일1")).toBeInTheDocument();
      expect(screen.getByDisplayValue("할일2")).toBeInTheDocument();
    });
  });

  context("TODO가 없을때", () => {
    it("할일이 없다는 문구가 표출되는가?", () => {
      setting([]);
      expect(screen.getByText("할일이 없습니다.")).toBeInTheDocument();
    });
  });
});
