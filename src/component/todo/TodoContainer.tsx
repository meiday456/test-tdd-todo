import {ReactElement, useEffect} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/todo";
import {
  addTask,
  deleteTask,
  setTaskList,
  updateTask,
} from "@/src/store/todo/reducer";
import {TaskInterface} from "@/src/types/TaskTypes";

interface Props {
  taskList?: TaskInterface[];
}

const TodoContainer = ({taskList}: Props): ReactElement => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.taskList);

  useEffect(() => {
    if (taskList != null && taskList.length > 0) {
      dispatch(setTaskList(taskList));
    }
  }, []);

  const submitHandler = (task: string) => {
    dispatch(
      addTask({
        id: Math.random() * 10 + list.length,
        task,
      }),
    );
  };
  const onDeleteHandler = (id: number) => {
    dispatch(deleteTask(id));
  };
  const onChangeHandler = ({id, task}: {id: number; task: string}) => {
    dispatch(updateTask({id, task}));
  };

  return (
    <div>
      <h2>할일 목록</h2>
      <TodoForm onSubmit={submitHandler}></TodoForm>
      <TodoList
        list={list}
        onDelete={onDeleteHandler}
        onChange={onChangeHandler}
      ></TodoList>
    </div>
  );
};

export default TodoContainer;
