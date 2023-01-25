import React from "react";
import CartItem from "./../components/CartItem";
import PriceCard from "./../components/PriceCard";
import { FiPlus } from "react-icons/fi";
import { TbEqual } from "react-icons/tb";
import Button from "./../components/Button";
import { useNavigate } from "react-router-dom";
import useCart from "./../hooks/useCart";

export default function CartList() {
  const {
    cartQuery: { data: products },
  } = useCart();
  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  const navigate = useNavigate();
  const handleClickProducts = () => navigate(`/products`);
  const handleClickBuy = () => navigate(`/buy`);

  return (
    <section className="p-8">
      <h3 className="text-2xl text-center font-bold">장바구니</h3>
      {!hasProducts ? (
        <div className="text-center">
          <p className="pt-4 pb-1 text-xl">🐶 장바구니에 담긴 상품이 없어요.</p>
          <p className="pb-4">원하는 상품을 담아보세요!</p>
          <Button text="상품 보러 가기" onClick={handleClickProducts} />
        </div>
      ) : (
        <>
          <ul className="p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center my-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="총 상품 금액" price={totalPrice} />
            <FiPlus className="shrink-0" />
            <PriceCard text="배송비" price={3000} />
            <TbEqual className="shrink-0" />
            <PriceCard text="총 금액" price={totalPrice + 3000} />
            <button
              className="bg-brand text-white md:text-lg py-12 px-7 rounded-xl hover:brightness-105"
              onClick={handleClickBuy}
            >
              주문하기
            </button>
          </div>
        </>
      )}
    </section>
  );
}
