import { MutableRefObject, useCallback, useEffect, useRef } from "react";

const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback);

  const timeoutRef: MutableRefObject<number | undefined> = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef?.current(), delay);
    console.log("set", timeoutRef?.current);
  }, [delay]);

  const clear = useCallback(() => {
    console.log("clear", timeoutRef?.current);
    timeoutRef?.current && clearTimeout(timeoutRef?.current);
  }, []);

  useEffect(() => {
    set();

    return () => {
      clear();
    };
  }, [clear, set, delay]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { clear, reset };
};

export default useTimeout;
