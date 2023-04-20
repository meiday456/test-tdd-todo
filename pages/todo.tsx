import {ReactElement} from "react";
import {Provider} from "react-redux";
import store from "@/src/store/todo";
import {Store} from "redux";
import {TaskState} from "@/src/store/todo/reducer";
import TodoContainer from "@/src/component/todo/TodoContainer";

const TodoPage = (): ReactElement => {
  return (
    <Provider store={store as Store<TaskState>}>
      <TodoContainer></TodoContainer>
    </Provider>
  );
};

export default TodoPage;
