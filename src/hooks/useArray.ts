import { useCallback, useState } from "react";

interface useArrayProps {
  defaultValue: unknown[];
}
/**
 * Add more methods as per requirements
 */
const useArray = ({ defaultValue }: useArrayProps) => {
  const [array, setArray] = useState(defaultValue);

  const push = useCallback((newElement: unknown) => {
    setArray((prev) => [...prev, newElement]);
  }, []);

  const update = useCallback(
    (index: number, newElement: unknown) => {
      setArray([
        ...array.slice(0, index),
        newElement,
        ...array.slice(index + 1),
      ]);
    },
    [array]
  );

  const filter = useCallback((callback: (element: unknown) => void) => {
    setArray((prev) => prev.filter(callback));
  }, []);

  const removeUsingIndex = useCallback((index: number) => {
    setArray((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  return { array, push, update, filter, removeUsingIndex, clear };
};

export default useArray;
