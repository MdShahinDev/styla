"use client";

import Link from "next/link";
import Container from "./Container";
import HeaderRight from "../customui/HeaderRight";
import SearchBox from "../customui/SearchBox";
import { Menu } from "lucide-react";


const Header = () => {
  return (
    <div>
        <div className="topbar bg-black text-gray-200 py-2 px-4 text-center">
            <h3 className="text-sm md:text-base">Free Shipping World wide for all orders over $199 <Link href={"/shop"} className="font-medium text-white underline uppercase"> Shop Now</Link></h3>
        </div>
        <nav className="shadow-sm">
            <Container>
                {/* Desktop Header */}
                <div className="flex items-center justify-between py-4 md:py-6 border-b">
                    {/* Logo  */}
                    <Link href="/"><h2 className="text-xl font-bold">Styla</h2></Link>
                    {/* Search */}
                    <SearchBox />
                    {/* Accounts */}
                    <HeaderRight/>
                    <Menu className="md:hidden"/>
                </div>
                {/* Main Menu */}
            </Container>
        
        </nav>
    </div>
  );
};

export default Header;