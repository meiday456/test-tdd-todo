import React, {ReactElement} from "react";

const InputLab = (): ReactElement => {
  return (
    <div>
      <label htmlFor={"username"}>user</label>
      <input id={"username"} data-testid="username" />
      <label htmlFor="ta">user</label>
      <textarea name="description" id="ta" cols={30} rows={10}></textarea>
    </div>
  );
};
export default InputLab;
