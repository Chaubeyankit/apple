/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { PRODUCT_API } from "../../API/api";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await fetch(PRODUCT_API);
    const data = await response.json();
    setProduct(data);
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font px-2 grid grid-rows-1">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full hover:cursor-pointer"
              >
                <Link
                  to={`/${item.title}`}
                  className="block relative h-48 rounded overflow-hidden "
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={item.image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">₹ {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
