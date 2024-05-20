import useArray from "../../hooks/useArray";

const UseArrayPage = () => {
  const { array, push, clear, filter, removeUsingIndex } = useArray({
    defaultValue: [10, 11],
  });

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(19)}>Push 19</button>
      <button onClick={clear}>Clear</button>
      <button onClick={() => filter((n: unknown) => (n as number) < 4)}>
        keep numbers less than 4
      </button>

      <button onClick={() => removeUsingIndex(1)}>Remove second element</button>
    </div>
  );
};

export default UseArrayPage;
