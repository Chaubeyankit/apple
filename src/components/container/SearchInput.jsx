/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward, IoMdSearch } from "../../assets/Icons/icon";
import { Quicklink } from "../../Data/QuickLink";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowsuggestion] = useState(false);

  /**
   * Debouncing ConceptF
   */
  useEffect(() => {
    //Api call
    let timer = setTimeout(() => getSearchQuerySugestion(), 500);
    return () => {
      clearTimeout(timer);
    };
    //make the api call after every key press
    //but if the difference between 2Api call is < 500ms;
    //decline the API call
  }, [searchQuery]);

  const getSearchQuerySugestion = () => {
    /**
     * If you have autocomplete suggestion API, implement it
     *
     * const data = awit fetch(YOUR_API_URL);
     * const json = awit data.json();
     *
     * from above "json" you get the array formate like that ["iPhone", "MacBook", "iPad"] and setSUggestion(json)
     *
     * setSuggestion(json)
     */
    setSuggestion([searchQuery]);
  };
  const isSearchBar = useSelector((store) => store.app.isSearchBar);
  if (!isSearchBar) return false;
  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
            placeholder="Search Mockups, Logos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestion(true)}
            onBlur={() => setShowsuggestion(false)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className=" bg-slate-800 w-full px-5 py-2 shadow-lg  border border-slate-900">
            <ul>
              {suggestion.map((item) => (
                <li
                  key={item}
                  className="py-2 shadow-sm hover:bg-slate-900 hover:text-slate-50 rounded flex"
                >
                  <div className="py-[5.8px] px-2">
                    <IoMdSearch />
                  </div>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
      <div className="dark:bg-gray-900 justify-start p-2 px-10">
        <h1 className="text-slate-500 font-sanspt-2 md:pt-2">Quick Link</h1>
        <div className="mt-4">
          {Quicklink.map((item) => (
            <div key={item} className="flex cursor-pointer">
              <div className="text-slate-300 flex py-1 px-2">
                <IoIosArrowRoundForward />
              </div>
              <div className="text-slate-500 text-sm hover:text-slate-50 ">
                <Link to={`/product`}>{item}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
