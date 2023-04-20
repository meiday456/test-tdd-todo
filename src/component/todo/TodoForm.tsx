import React, {ReactElement, useState} from "react";

interface Props {
  onSubmit: (task: string) => void;
}

const TodoForm = ({onSubmit}: Props): ReactElement => {
  const [task, setTask] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (task !== "") {
      onSubmit(task);
      setTask("");
    }
  };

  return (
    <form aria-label={"todo 입력 영역"} onSubmit={submitHandler}>
      <input
        type="text"
        value={task}
        placeholder={"할일을 입력하세요."}
        aria-label={"todo content"}
        onChange={e => setTask(e.target.value)}
      />
      <button type={"submit"}>등록</button>
    </form>
  );
};

export default TodoForm;
