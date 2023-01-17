import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useUserContext } from "../context/UserContext";

export default function CartStatus() {
  const { uid } = useUserContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
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
