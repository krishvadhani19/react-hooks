import { useState } from "react";

const Timeout = () => {
  const [count, setCount] = useState<number>(10);

  return (
    <div>
      <div>{count}</div>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button>Clear Timeout</button>
      <button>Reset Timeout</button>
    </div>
  );
};

export default Timeout;
