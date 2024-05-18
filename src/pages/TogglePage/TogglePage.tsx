import useToggle from "../../hooks/useToggle";
import "./TogglePage.scss";

const TogglePage = () => {
  const { value, toggleValue } = useToggle();

  return (
    <div className="">
      <div>{value.toString()}</div>

      <button onClick={toggleValue}>Toggle Value</button>
    </div>
  );
};

export default TogglePage;
