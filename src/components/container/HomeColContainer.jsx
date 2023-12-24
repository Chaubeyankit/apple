/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const HomeColContainer = ({
  children,
  title,
  subtitle,
  style = "",
  ...props
}) => {
  return (
    <div {...props}>
      <figure className="relative transition-all duration-300 cursor-pointer">
        <figcaption className="absolute px-4 text-lg text-black top-4 text-center w-full">
          <h1 className={`md:text-4xl sm:text-sm ${style}`}>{title}</h1>
          <h3 className = {`text-3xl ${style}`}>{subtitle}</h3>
          <div className="text-center mt-2">
            <Link to="/" className="text-sky-400 text-lg">
              Learn More
            </Link>

            <Link to="/product" className="text-sky-400 text-lg ml-11">
              Buy
            </Link>
          </div>
        </figcaption>
        <Link to="/">
          <img
            className="h-full pt-36 object-fill"
            src={props["figure"]}
            alt="image description"
          />
        </Link>
      </figure>
    </div>
  );
};

export default HomeColContainer;
