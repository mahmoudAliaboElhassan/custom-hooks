import React, { useEffect, useState } from "react";

const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    console.log("mediaQuery");
    console.log(mediaQuery);
    const handleChange = (e) => {
      console.log(e);
      setMatches(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
  }, [query]);
  return matches;
};

export default UseMediaQuery;
