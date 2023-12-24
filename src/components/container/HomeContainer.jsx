/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const HomeContainer = ({
  // eslint-disable-next-line react/prop-types
  children,
  title,
  subtitle,
  style = "",
  ...props
}) => {
  console.log();
  return (
    <div {...props}>
      <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <figcaption className="absolute px-4 text-lg text-white top-10 text-center w-full">
          <h1 className={`md:text-6xl sm:text-sm ${style}`}>{title}</h1>
          <h3 className={`text-3xl ${style}`}>{subtitle}</h3>
          <div className="text-center mt-5">
            <Link to="/" className="text-sky-400 md:text-lg">
              Learn More
            </Link>

            <Link to="/product" className="text-sky-400 text-lg ml-11">
              Buy
            </Link>
          </div>
        </figcaption>
        <Link href="/product">
          <img
            className="h-full w-full object-fill"
            src={props["figure"]}
            alt="image description"
          />
        </Link>
      </figure>
    </div>
  );
};

export default HomeContainer;
