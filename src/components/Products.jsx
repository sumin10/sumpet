import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

export default function Products() {
  const { data: products } = useQuery(["products"], getProducts);
  return (
    <>
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
