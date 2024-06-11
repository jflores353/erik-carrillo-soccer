import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-8 mb-8 mx-auto border-b border-gray-500">
      <Link href="/">Logo</Link>
      <Link href="/">About</Link>
    </div>
  );
};

export default Navbar;
