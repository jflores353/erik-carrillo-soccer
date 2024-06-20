import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        className="w-full h-auto"
        src={"/hero.jpg"}
        alt="Hero Image"
        width={700}
        height={1000}
      />
    </div>
  );
}
