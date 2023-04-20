import slice, {
  addTask,
  deleteTask,
  setTaskList,
  updateTask,
  updateTaskList,
} from "@/src/store/todo/reducer";
import {taskList} from "../../fixtures/todoFeature";
import store from "@/src/store/todo";

describe("Task Reducer", () => {
  const initialState = {
    taskList: [],
  };
  it("initialState check", () => {
    expect(store.getState().taskList).toHaveLength(0);
  });

  it("setTaskList check", () => {
    const result = store.dispatch(setTaskList(taskList));
    expect(result.type).toBe("taskList/setTaskList");
    expect(result.payload).toBe(taskList);
    expect(store.getState().taskList).not.toHaveLength(0);
  });
  it("task 추가", () => {
    const task = {
      id: 999,
      task: "신규 할일",
    };
    const state = slice.reducer(initialState, addTask(task));
    expect(state.taskList).toHaveLength(1);
  });
  it("task 삭제", () => {
    const id = 1;
    const state = slice.reducer({taskList}, deleteTask(id));
    expect(state.taskList).toHaveLength(1);
  });
  it("task 수정", () => {
    const task = {
      id: 1,
      task: "변경",
    };
    const state = slice.reducer({taskList}, updateTask(task));

    expect(state.taskList.at(0)).toMatchObject(task);
  });
  it("list update", () => {
    const newList = [
      ...taskList,
      {
        id: 999,
        task: "신규",
      },
    ];
    const action = updateTaskList(newList);
    const state = slice.reducer({taskList}, action);

    expect(state.taskList).toHaveLength(3);
  });
});
