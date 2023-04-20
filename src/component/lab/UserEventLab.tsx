import {ReactElement, useState} from "react";

const UserEventLab = (): ReactElement => {
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    setCount(count + 1);
  };
  const decreaseHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decreaseHandler}>-</button>
      <span>current count = {count}</span>
      <button onClick={increaseHandler}>+</button>
    </div>
  );
};

export default UserEventLab;
