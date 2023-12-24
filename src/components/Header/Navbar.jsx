/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { headeritems } from "../../Data/headerItems";
import {
  BsApple,
  IoBagAdd,
  IoMdSearch,
  RxHamburgerMenu,
} from "../../assets/Icons/icon";
import { useDispatch } from "react-redux";
import { toggleMenu, toggleSearchbar } from "../../utils/appSlice";
export const Navbar = () => {
  /**
   * Thought process during toggle menu implementation.
   * Make a global store and maintain the initial state of toggle method (Action)
   * 1 - isCardOpen = fasle, 2 - isSearchBarOpen = false
   * performe the action "onClick" and update the state (true <-> false)
   *
   * and render your components according to the state
   */

  const dispatch = useDispatch();
  // side bar toggle
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  //search bar toggle
  const toggleSearHandler = () => {
    dispatch(toggleSearchbar());
  };
  return (
    <nav className="bg-gray-900  p-3">
      <div className="container mx-auto grid grid-flow-col">
        <div className="items-center justify-between flex col-span-1">
          <div className="text-gray-400">
            <Link to={`/`}>
              <BsApple className="hover:text-slate-50 cursor-pointer" />
            </Link>
          </div>

          <div className="mx-auto text-gray-400 ">
            <div className="hidden md:flex space-x-8">
              {headeritems.map((item) => (
                <div key={item}>
                  <Link to={`/${item}`} className="hover:text-slate-50">
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-flow-col">
            <h1 className="text-gray-400 mx-3 text-lg cursor-pointer hover:text-slate-50">
              <IoMdSearch onClick={() => toggleSearHandler()} />
            </h1>
            <h1 className="mx-4 text-gray-400 cursor-pointer hover:text-slate-50">
              <IoBagAdd />
            </h1>
          </div>

          {/* Add responsive menu button */}
          <div className="md:hidden">
            <button className="text-white">
              <RxHamburgerMenu onClick={() => toggleMenuHandler()} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
