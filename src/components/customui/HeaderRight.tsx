"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const HeaderRight = () => {
  return (
    <div className="flex items-center gap-4">
        <Link href={'/account'}>
        <User size={30}/>
        </Link>
        <Link href={'/wishlist'} className="relative">
        <Heart size={30}/>
        <span className="absolute w-5 h-5 flex items-center justify-center rounded-full text-xs -bottom-1 -right-1 font-medium bg-black text-white">10</span>
        </Link>
        <button className="relative">
        <ShoppingCart size={30}/>
        <span className="absolute w-5 h-5 flex items-center justify-center rounded-full text-xs -bottom-1 -right-1 font-medium bg-black text-white">10</span>
        </button>
    </div>
  );
};

export default HeaderRight;