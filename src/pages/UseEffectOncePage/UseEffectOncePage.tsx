import { useState } from "react";
import useEffectOnce from "../../hooks/useEffectOnce";

const UseEffectOncePage = () => {
  const [count, setCount] = useState(0);

  useEffectOnce(() => {
    return alert(count);
  }, [count]);

  console.log("Main Page");

  return (
    <div>
      <div>{count}</div>
      <div onClick={() => setCount(count + 1)}>Increment</div>
    </div>
  );
};

export default UseEffectOncePage;
