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
  const handleClick = () => navigate(`/products`);

  return (
    <section className="p-8">
      <h3 className="text-2xl text-center font-bold">μ₯λ°κ΅¬λ</h3>
      {!hasProducts ? (
        <div className="text-center">
          <p className="pt-4 pb-1 text-xl">πΆ μ₯λ°κ΅¬λμ λ΄κΈ΄ μνμ΄ μμ΄μ.</p>
          <p className="pb-4">μνλ μνμ λ΄μλ³΄μΈμ!</p>
          <Button text="μν λ³΄λ¬ κ°κΈ°" onClick={handleClick} />
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
            <PriceCard text="μ΄ μν κΈμ‘" price={totalPrice} />
            <FiPlus className="shrink-0" />
            <PriceCard text="λ°°μ‘λΉ" price={3000} />
            <TbEqual className="shrink-0" />
            <PriceCard text="μ΄ κΈμ‘" price={totalPrice + 3000} />
            <button className="bg-brand text-white md:text-lg py-12 px-7 rounded-xl hover:brightness-105">
              μ£Όλ¬ΈνκΈ°
            </button>
          </div>
        </>
      )}
    </section>
  );
}
