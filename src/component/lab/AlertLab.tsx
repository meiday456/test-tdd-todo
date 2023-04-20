import {ReactElement, useEffect} from "react";

const AlertLab = (): ReactElement => {
  useEffect(() => {
    window.alert("알림");
  }, []);
  return <div></div>;
};

export default AlertLab;
