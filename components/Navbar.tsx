import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 mb-8 mx-auto border-b border-gray-500">
      <Image src="/logo-mobile.png" width="200" height="100" alt="Logo" />
      <Link href="/">About</Link>
    </div>
  );
};

export default Navbar;
