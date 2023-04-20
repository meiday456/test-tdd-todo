import {fireEvent, render, screen} from "@testing-library/react";
import TodoContainer from "@/src/component/todo/TodoContainer";
import {TaskInterface} from "@/src/types/TaskTypes";
import {taskList} from "../../fixtures/todoFeature";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/src/store/todo";
import {mockOfFunction} from "../mockFunctionHelper";
jest.mock("react-redux");
describe("TodoContainer", () => {
  let dispatch = jest.fn();
  const mockDispatch = mockOfFunction(useDispatch);
  const mockUseSelector = mockOfFunction(useSelector<RootState>);
  beforeEach(() => {
    dispatch = jest.fn();
    mockDispatch.mockImplementation(() => dispatch);
    // (useDispatch as jest.Mock).mockImplementation(() => dispatch);
  });

  const setting = (initialList: TaskInterface[] = []) => {
    mockUseSelector.mockImplementation(state => initialList);
    // useSelector.mockImplementation((state: RootState) => initialList);

    const {container, debug} = render(
      <TodoContainer taskList={initialList}></TodoContainer>,
    );
    const form = screen.getByRole("form", {name: "todo 입력 영역"});
    const input = screen.getByPlaceholderText("할일을 입력하세요.");
    return {
      container,
      form,
      input,
      debug,
    };
  };

  context("페이지 render 시", () => {
    it("초기값 2개 task 셋팅", () => {
      (useSelector as jest.Mock).mockImplementation(
        (selector: (state: RootState) => RootState) => selector({taskList}),
      );
      mockUseSelector.mockImplementation(
        (selector: (state: RootState) => RootState) =>
          selector({taskList: taskList}),
      );

      render(<TodoContainer></TodoContainer>);
      const buttons = screen.getAllByRole("button", {name: "삭제"});
      expect(buttons).toHaveLength(2);
    });

    it("title 출력", () => {
      const {container} = setting();
      expect(container).toHaveTextContent("할일 목록");
    });
    it("입력 form을 가지고 있는가?", () => {
      setting();
      const formEl = screen.getByPlaceholderText("할일을 입력하세요.");
      expect(formEl).toBeInTheDocument();
    });
    it("초기상태인 할일이 없다가 출력되는가?", () => {
      setting();
      const todo = screen.getByText("할일이 없습니다.");
      expect(todo).toBeInTheDocument();
    });
  });

  context("기능 테스트", () => {
    const addTask = () => {
      const {input, form, debug} = setting(taskList);
      fireEvent.change(input, {target: {value: "할일 N"}});
      fireEvent.submit(form);
      return {form, input, debug};
    };

    /**
     *task container는 영역이 표출이 되는지만을 관심을 가지는 컴포넌트
     * 그렇다면 내부 적으로 동작하는 것들은 알아서 쓸데가 없기는한데
     * event handler를 전부 하위로 전달하는터라
     * event handler를 test해야하는데.....
     *
     * 결과적으로 container에서는 dispatch를 call하는 횟수로 판단을 해야한다.
     * mocking 하였기 때문
     */
    it("요소 삭제가 되는가?", () => {
      addTask();
      const buttons = screen.getAllByRole("button", {name: "삭제"});
      fireEvent.click(buttons[buttons.length - 1]);
      expect(dispatch).toHaveBeenCalledTimes(3);
      // const task = screen.queryByDisplayValue("할일 N");
      // expect(task).not.toBeInTheDocument();
    });
    it("요소 등록이 완료되어 목록이 추가되는가?", () => {
      addTask();
      // expect(screen.getByDisplayValue("할일 N")).toBeInTheDocument();
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
    it("요소 변경이되고 목록에 반영되는가?", () => {
      addTask();
      const inputs = screen.getAllByRole("textbox");
      //이부분에서 잘못됨 dispatch를 사용하기때문에 입력이 존재하지않는다.
      fireEvent.change(inputs[inputs.length - 1], {target: {value: "변경"}});
      expect(dispatch).toHaveBeenCalledTimes(3);
      // expect(inputs[inputs.length - 1]).toHaveAttribute("value", "변경");
    });
  });
});
