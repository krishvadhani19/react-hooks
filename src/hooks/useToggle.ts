import { useCallback, useState } from "react";

const useToggle = () => {
  const [value, setValue] = useState<boolean>(false);

  const toggleValue = useCallback(() => {
    setValue(!value);
  }, [value]);

  return { value, toggleValue };
};

export default useToggle;
