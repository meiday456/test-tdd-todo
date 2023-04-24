import {ReactElement, useEffect, useState} from "react";
import axios from "axios";
import usePlaceholder from "@/src/hooks/usePlaceholder";
import useUserPlaceholer from "@/src/hooks/useUserPlaceholer";

const MswTodoLab = (): ReactElement => {
  const {data, error} = usePlaceholder();
  const {data: userData, error: userError} = useUserPlaceholer();

  return (
    <>
      <h1>Todo</h1>
      {error && <h3>Error!!</h3>}
      {userData && !userError && <p>userInfos를 호출하였습니다.</p>}
      <ul>
        {data.map(todo => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
};

export default MswTodoLab;
