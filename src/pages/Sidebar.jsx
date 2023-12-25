/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import { headeritems } from "../Data/headerItems";
import { Link } from "react-router-dom";
const Sidebar = () => {
  /**
   * if(state === true ? work done : work not done)
   */
  const isCardOpen = useSelector((store) => store.app.isCardOpen);
  if (!isCardOpen) return false;
  return (
    <div>
      <ul>
        {headeritems.map((item) => (
          <li
            key={item}
            className="flex px-4 hover:text-slate-50 cursor-pointer"
          >
            <span className="mx-2 my-1">
              <IoIosArrowForward className="text-xl font-semibold" />
            </span>
            <Link to={`/product`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
