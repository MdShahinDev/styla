"use client";

import { Grid2x2, Heart, Home, User } from "lucide-react";
import Link from "next/link";

const MobileBottomMenu = () => {
  return (
    <div className="fixed p-1 bottom-0 left-0 w-full z-40 bg-white border-t lg:hidden">
        <div className='flex justify-between px-4 py-2'>
          <Link href={'/'} className='flex flex-col items-center'>
          <Home />
          <p className='text-sm font-medium'>Home</p>
          </Link>
          <Link href={'/shop'} className='flex flex-col items-center '>
          <Grid2x2 />
          <p className='text-sm font-medium'>Shop</p>
          </Link>
          <Link href={'/wishlist'} className=' relative flex flex-col items-center '>
          <Heart/>
          <p className='text-sm font-medium'>Wishlist</p>
          <span className='absolute right-0 w-5 h-5 bg-black text-white rounded-full text-xs flex items-center justify-center font-medium top-1'>10</span>
          </Link>
          <Link href={'/account'} className='flex flex-col items-center '>
          <User/>
          <p className='text-sm font-medium'>Account</p>
          </Link>
        </div>
      </div>
  );
};

export default MobileBottomMenu;