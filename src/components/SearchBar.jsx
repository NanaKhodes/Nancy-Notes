import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="bg-pink-400 rounded-lg w-full flex items-center gap-4 px-4 py-2 mt-8">
      <FaSearch className="h-6 w-6" />
      <input
        className="w-full border-none bg-pink-400 text-black focus:ring-0 focus:outline-none placeholder:text-black"
        type="search"
        name=""
        id=""
        placeholder="Search for anything here"
      />
    </div>
  );
}

export default SearchBar;