"use client";
import Link from "next/link";
const TopBar = () => {
  return (
    <div className="topbar bg-black text-gray-200 py-2 px-4 text-center">
            <h3 className="text-sm md:text-base">Free Shipping World wide for all orders over $199 <Link href={"/shop"} className="font-medium text-white underline uppercase"> Shop Now</Link></h3>
        </div>
  );
};

export default TopBar;