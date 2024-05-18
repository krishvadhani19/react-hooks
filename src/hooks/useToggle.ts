import { useCallback, useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState<boolean>(false);

  const toggleValue = useCallback(
    (toggleValue?: unknown) => {
      if (typeof toggleValue === "boolean") {
        setValue(toggleValue);
        return;
      }

      setValue(!value);
    },
    [value]
  );

  return { value, toggleValue };
};

export default useToggle;
