import {ChangeEvent, ReactElement, useState} from "react";
import {TaskInterface} from "../../types/TaskTypes";

interface Props {
  item: TaskInterface;
  onDelete: (id: number) => void;
  onChange: ({id, task}: {id: number; task: string}) => void;
}

const TodoItem = ({item, onDelete, onChange}: Props): ReactElement => {
  const [task, setTask] = useState(item.task);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    const editTask = {id: item.id, task: e.target.value};
    onChange(editTask);
  };

  return (
    <div>
      <input type="text" value={task} onChange={e => onChangeHandler(e)} />
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
