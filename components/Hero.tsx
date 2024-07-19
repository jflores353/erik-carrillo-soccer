import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-full w-full">
      <Image
        className="w-full h-full object-cover"
        src={"/hero.jpg"}
        alt="Hero Image"
        width={700}
        height={1000}
      />
      <div className="absolute inset-0">
        <h1 className="text-2xl font-bold text-slate-500 flex items-center">
          Train Relentlessly Today <br /> Dominate the Field Tomorrow – Unleash
          Your Potential!
        </h1>
      </div>
    </div>
  );
}
