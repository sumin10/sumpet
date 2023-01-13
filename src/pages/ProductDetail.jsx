import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./../components/Button";

export default function ProductDetail() {
  const {
    state: {
      product: { image, title, category, price, description, option },
    },
  } = useLocation();
  const [select, setSelect] = useState(option[0]);
  const handleSelect = (e) => setSelect(e.target.value);

  return (
    <section className="flex flex-col md:flex-row p-4 ">
      <img className="w-full px-4 basis-7/12" src={image} alt={title} />
      <div className="w-full p-4 basis-5/12 flex flex-col ">
        <p className="text-gray-500">{category}</p>
        <h3 className="text-2xl font-semibold pb-2">{title}</h3>
        <p className="text-xl font-semibold pb-2">{price}원</p>
        <p className="text-gray-600 mb-10">{description}</p>
        <div className="flex items-center">
          <p className="text-brand font-bold">옵션:</p>
          <select
            className="p-2 m-4 px-10 border-2 border-brand outline-none"
            onChange={handleSelect}
            value={select}
          >
            {option &&
              option.map((option, id) => <option key={id}>{option}</option>)}
          </select>
        </div>
        <Button text="장바구니 추가" />
      </div>
    </section>
  );
}
