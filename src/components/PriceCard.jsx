import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl text-center md:text-lg">
      <p>{text}</p>
      <p className="font-bold text-brand text-lg md:text-xl">{price}원</p>
    </div>
  );
}
