import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { CgList } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { login, logout } from "../api/firebase";
import { onUserStateChange } from "./../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

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
        {user && user.isAdmin && (
          <Link to="/products/add" className="text-2xl">
            <TiPencil />
          </Link>
        )}
        {user && <User user={user} />}
        {!user ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </nav>
    </header>
  );
}
