import React from "react";
import ProductList from "./ProductList";
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}
