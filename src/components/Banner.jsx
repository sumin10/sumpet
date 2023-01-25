import React from "react";

export default function Banner() {
  return (
    <section className="h-96 relative bg-yellow-50 mt-4">
      <div className="w-full h-full bg-cover bg-banner opacity-80" />
      <div className="absolute w-full top-36 text-center text-gray-50 drop-shadow-xl">
        <h2 className="text-5xl">Best Choice For Puppies!</h2>
        <p className="text-2xl">Enjoy your shopping.</p>
      </div>
    </section>
  );
}
