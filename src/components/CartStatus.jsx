import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useUserContext } from "../context/UserContext";

export default function CartStatus() {
  const { uid } = useUserContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
  return (
    <div>
      <BsCart4 />
      {products && <p>{products.length}</p>}
    </div>
  );
}
