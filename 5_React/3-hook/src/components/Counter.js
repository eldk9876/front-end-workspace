import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);

  const plus = () => {
    setCount(count + 10);
  };
  const minus = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  // 마운트
  useEffect(() => {
    console.log("mount!");
  }, []);

  // 업데이트 (무언가 변화하는것 명시)
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("count update!");
    }
  }, [count]);

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);

  return (
    <>
      <h1>Total Clicks : {count}</h1>
      <Btn click={plus} text="+10" />
      <Btn click={minus} text="-10" />
      <Btn click={reset} text="reset" />
    </>
  );
};

export default Counter;
