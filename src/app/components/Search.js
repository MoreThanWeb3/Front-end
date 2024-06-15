"use client";

// search context
import { useContext, useState } from "react";
import { SearchContext } from "../context/search";

// components
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search({ onSearch }) {
  const { searchActive } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        {/* Input for car filtering */}
        <div className="flex items-center px-6 xl:px-0">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input input-bordered"
          />
        </div>
        {/* btn */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button 
            className={`${ 
              searchActive 
                ? "btn btn-sm bg-accent xl:w-[164px]"
                : "btn btn-lg bg-accent xl:w-[184px]" 
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
