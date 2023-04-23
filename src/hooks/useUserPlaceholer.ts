import {useEffect, useState} from "react";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const usePlaceHolder = () => {
  const [data, setData] = useState<Todo[]>([]);
  const [error, isError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const {data: response} = await axios.get<Todo[]>(
          "https://hhhhjsonplaceholder.typicode.com/users",
        );
        setData(response);
      } catch (error) {
        isError(true);
      }
    }
    fetchData().catch(error => isError(true));
  }, []);

  return {data, error};
};

export default usePlaceHolder;
