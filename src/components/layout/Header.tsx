"use client";

import Link from "next/link";
import Container from "./Container";
import { Input } from "../ui/input";
import HeaderRight from "../customui/HeaderRight";
import SearchBox from "../customui/SearchBox";


const Header = () => {
  return (
    <div>
        <div className="topbar bg-black text-gray-200 py-2 px-4 text-center">
            <h3 className="text-sm md:text-base">Free Shipping World wide for all orders over $199 <Link href={"/shop"} className="font-medium text-white underline uppercase"> Shop Now</Link></h3>
        </div>
        <nav className="shadow-sm">
            <Container>
                <div className="flex items-center justify-between py-6 border-b">
                    {/* Logo  */}
                    <Link href="/"><h2 className="text-xl font-bold">Styla</h2></Link>
                    {/* Search */}
                    <SearchBox/>
                    {/* Accounts */}
                    <HeaderRight/>
                </div>
            </Container>
        
        </nav>
    </div>
  );
};

export default Header;