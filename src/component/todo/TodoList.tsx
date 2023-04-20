import {ReactElement} from "react";
import {TaskInterface} from "../../types/TaskTypes";
import TodoItem from "./TodoItem";

interface Props {
  list: TaskInterface[];
  onDelete: (id: number) => void;
  onChange: ({id, task}: {id: number; task: string}) => void;
}

const TodoList = ({list, onDelete, onChange}: Props): ReactElement => {
  if (list.length === 0) {
    return <div>할일이 없습니다.</div>;
  }

  return (
    <div>
      {list.map((task, index) => {
        return (
          <TodoItem
            key={task.id}
            item={task}
            onDelete={onDelete}
            onChange={onChange}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
