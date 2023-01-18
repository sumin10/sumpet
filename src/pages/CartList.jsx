import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useUserContext } from "../context/UserContext";
import CartItem from "./../components/CartItem";
import PriceCard from "./../components/PriceCard";
import { FiPlus } from "react-icons/fi";
import { TbEqual } from "react-icons/tb";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const { uid } = useUserContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  const navigate = useNavigate();
  const handleClick = () => navigate(`/products`);

  return (
    <section>
      <p>장바구니</p>
      {!hasProducts ? (
        <>
          <h3>🐶 장바구니에 담긴 상품이 없어요.</h3>
          <p>원하는 상품을 담아보세요!</p>
          <Button text="상품 보러 가기" onClick={handleClick} />
        </>
      ) : (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text="총 상품 금액" price={totalPrice} />
            <FiPlus />
            <PriceCard text="배송비" price={3000} />
            <TbEqual />
            <PriceCard text="총 금액" price={totalPrice + 3000} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
