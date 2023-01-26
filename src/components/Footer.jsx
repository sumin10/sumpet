import React from "react";
import { MdPets } from "react-icons/md";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="h-48 text-center mt-12">
      <nav className="flex justify-center items-center">
        <BsFacebook className="mr-4 text-xl" />
        <BsInstagram className="mr-4 text-xl" />
        <BsYoutube className="mr-4 text-xl" />
        <BsTwitter className="text-xl" />
      </nav>
      <div className="flex justify-center items-center">
        <MdPets className="mr-1.5 text-xl" />
        <h2 className="text-xl font-semibold">SumPet</h2>
      </div>
      <div className="flex justify-center items-center">
        <p className="pr-1">Company: Store |</p>
        <p>CEO: Eom</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="pr-1">Business License: 000-00-000000 |</p>
        <p>Communication Sales Business Report: 0000-Seoul-0000</p>
      </div>
      <address>Address: Seoul, Korea</address>
      <p>CS: +82(0)0-000-0000 (Weekend and Red-day Off)</p>
      <div className="flex justify-center items-center">
        <p className="pr-1">Terms of Use |</p>
        <p>Privacy</p>
      </div>
    </footer>
  );
}
