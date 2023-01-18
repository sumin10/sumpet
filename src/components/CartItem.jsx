import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { addOrUpdateCart, removeCart } from "../api/firebase";

export default function CartItem({
  product,
  uid,
  product: { image, title, price, option, quantity, id },
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeCart(uid, id);

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <p>{price}</p>
        <div>
          <FiMinus onClick={handleMinus} />
          <span>{quantity}</span>
          <FiPlus onClick={handlePlus} />
          <RiDeleteBinLine onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
