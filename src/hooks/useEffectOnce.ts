import { useEffect, useRef } from "react";

const useEffectOnce = (callback: () => void, dependencies: unknown[]) => {
  const firstRender = useRef(true);

  console.log("use effect once");

  useEffect(() => {
    console.log({ firstRender });

    if (firstRender?.current) {
      firstRender.current = false;

      return () => {
        console.log("clean up");
      };
    }

    return () => {
      callback();
      console.log("Callback cleanup");
    };
  }, dependencies);
};

export default useEffectOnce;

/**
 * In react development mode all components are rendered twice
 *
 * 1. Here, the ref we made that has flag for avoiding initial render
 * 2. In development, useEffect runs, clears and runs again
 *    a. So, for the first run we changed flag to false
 *    b. the return is nothing but the cleanup function which has to run in development we can leave it empty like "return;"
 *        but its important to return or else it will run the callback wala return
 *    c. Now, useEffect will run again this time the flag is false
 *
 *
 *    Click condition:
 *    a. if we click the dependency passed will change so useEffect will clear and this the callback clear works and we have an alert
 *    b. After clearing, it sets again 
 *    
 *    Same is repeated for every click
 *
 */
