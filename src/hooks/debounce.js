import { useState, useEffect } from "react";

const UseDebounceAndDisapear = (timer) => {
  const [debounce, setDebounce] = useState(false);

  useEffect(() => {
    if (debounce) {
      const timeout = setTimeout(() => {
        setDebounce(false);
      }, timer);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [debounce]);

  return [debounce, setDebounce];
};

export default UseDebounceAndDisapear;
