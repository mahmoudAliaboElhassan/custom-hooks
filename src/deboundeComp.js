import React, { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 5000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchResults(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchResults = async (query) => {
    // Simulate an API call
    console.log(`Fetching results for ${query}`);
    // You would replace this with an actual API call, e.g.,
    // const response = await fetch(`/api/search?query=${query}`);
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchComponent;
