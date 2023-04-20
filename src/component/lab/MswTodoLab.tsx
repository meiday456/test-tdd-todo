import {ReactElement, useEffect, useState} from "react";
import axios from "axios";
import usePlaceHolder from "@/src/component/lab/usePlaceHolder";

const MswTodoLab = (): ReactElement => {
  const {data, error} = usePlaceHolder();

  return (
    <>
      <h1>Todo</h1>
      {error && <h3>Error!!</h3>}
      <ul>
        {data.map(todo => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};

export default MswTodoLab;
