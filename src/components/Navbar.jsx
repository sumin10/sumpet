import React from "react";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { CgList } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";

export default function Navbar() {
  return (
    <header className="flex justify-between p-3">
      <Link to="/" className="flex items-center text-3xl text-brand">
        <MdPets className="mr-1.5" />
        <h1>SumPet</h1>
      </Link>
      <nav className="flex items-center gap-5 font-semibold">
        <Link to="/products" className="text-2xl">
          <CgList />
        </Link>
        <Link to="/carts" className="text-2xl">
          <BsCart4 />
        </Link>
        <Link to="/products/add" className="text-2xl">
          <TiPencil />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
