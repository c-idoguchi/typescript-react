import { render } from "@testing-library/react";
import React, { useEffect, useRef,  useState } from "react";

const Counter:React.FC<{}> = () => {
  const initialValue: any = 0
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>render: {renderTimes.current}</div>
    </div>
  );
};

export default Counter