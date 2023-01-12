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
    <section>
      <img src={image} alt={title} />
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{price}원</p>
        <p>{description}</p>
        <p>옵션:</p>
        <select onChange={handleSelect} value={select}>
          {option &&
            option.map((option, id) => <option key={id}>{option}</option>)}
        </select>
        <Button text="장바구니 추가" />
      </div>
    </section>
  );
}
