import Link from "next/link";
import Container from "./Container";
import SearchBox from "../customui/SearchBox";
import HeaderRight from "../customui/HeaderRight";
import { Menu } from "lucide-react";

const MiddleBar = () => {
  return (
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
  );
};

export default MiddleBar;