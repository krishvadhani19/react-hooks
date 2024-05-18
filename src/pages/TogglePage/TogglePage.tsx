import useToggle from "../../hooks/useToggle";
import "./TogglePage.scss";

const TogglePage = () => {
  const { value, toggleValue } = useToggle();

  return (
    <div className="">
      <div>{value.toString()}</div>

      <button onClick={toggleValue}>Toggle Value</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make false</button>
    </div>
  );
};

export default TogglePage;
