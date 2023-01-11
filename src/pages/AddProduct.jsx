import React, { useState } from "react";
import { addProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Button from "./../components/Button";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [upload, setUpload] = useState(false);
  const [complete, setComplete] = useState();

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
    setUpload(true);
    uploadImage(file).then((url) => {
      addProduct(product, url)
        .then(() => {
          setComplete("상품 등록이 완료되었습니다.");
          setTimeout(() => {
            setComplete(null);
          }, 4000);
        })
        .finally(() => setUpload(false));
    });
  };

  return (
    <section>
      <h3>새로운 상품 등록</h3>
      {complete && <p>🐶 {complete}</p>}
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
        <Button text={upload ? "업로드중..." : "상품 등록하기"} />
      </form>
    </section>
  );
}
