import React from "react";
import { BsCart4 } from "react-icons/bs";
import useCart from "./../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <BsCart4 className="text-2xl" />
      {products && (
        <p className="w-5 h-5 text-center text-sm bg-brand text-white font-semibold rounded-full absolute -top-2 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
