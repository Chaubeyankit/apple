/* eslint-disable no-unused-vars */
import React from "react";
import ProductCard from "./ProductCard";
import { Sidebar, SearchInput } from "../index";
const Product = () => {
  return (
    <div className="grid grid-flow-col-dense">
      <div className="grid">
        <SearchInput />
        <ProductCard />
      </div>
      <div className="shadow bg-slate-900 text-gray-500 md:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Product;
