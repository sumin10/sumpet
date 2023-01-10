import React, { useState } from "react";
import Button from "./../components/Button";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="file" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          required={true}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title || ""}
          placeholder="상품명"
          required={true}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price || ""}
          placeholder="가격"
          required={true}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category || ""}
          placeholder="카테고리"
          required={true}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description || ""}
          placeholder="상품 설명"
          required={true}
          onChange={handleChange}
        />
        <input
          type="text"
          name="option"
          value={product.option || ""}
          placeholder="옵션"
          required={true}
          onChange={handleChange}
        />
        <Button text={"상품 등록하기"} />
      </form>
    </section>
  );
}
