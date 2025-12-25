"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const HeaderRight = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
        <Link href={'/account'}>
        <User className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
        </Link>
        <Link href={'/wishlist'} className="relative">
        <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
        <span className="absolute w-5 h-5 flex items-center justify-center rounded-full text-xs -bottom-1 -right-1 font-medium bg-black text-white">10</span>
        </Link>
        <button className="relative">
        <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
        <span className="absolute w-5 h-5 flex items-center justify-center rounded-full text-xs -bottom-1 -right-1 font-medium bg-black text-white">10</span>
        </button>
    </div>
  );
};

export default HeaderRight;