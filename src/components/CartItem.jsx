import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import useCart from "./../hooks/useCart";

export default function CartItem({
  product,
  product: { image, title, price, option, quantity, id },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className="flex justify-between mb-2 items-center">
      <img className="w-40 md:w-52 rounded-lg" src={image} alt={title} />
      <div className="flex flex-1 justify-between ml-4">
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-xl font-semibold text-brand">{option}</p>
          <p>{price}원</p>
        </div>
        <div className="text-xl flex items-center">
          <FiMinus
            className="transition-all cursor-pointer mx-1 hover:text-brand hover:scale-110"
            onClick={handleMinus}
          />
          <span>{quantity}</span>
          <FiPlus
            className="transition-all cursor-pointer mx-1 hover:text-brand hover:scale-110"
            onClick={handlePlus}
          />
          <RiDeleteBinLine
            className="transition-all cursor-pointer hover:scale-110"
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  );
}
