"use client";
import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

const SearchBox = () => {
    const [isText, setIsText] = useState("");

  return (
    <div className="relative hidden md:block w-md lg:w-3xl">
        <div className="flex items-center relative">
        <Input value={isText}
        onChange={(e) => setIsText(e.target.value)} className="border rounded-sm text-base focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="search product....."/>
        <span> {isText ? <X onClick={()=> setIsText("")} size={20} className="absolute right-3 bottom-2 z-10 cursor-pointer"/> :<Search size={20} className="absolute right-3 bottom-2 z-10 cursor-pointer" />} </span>
        </div>
        {isText ? <div className="w-md lg:w-3xl h-96 bg-white absolute top-10 left-0 border border-gray-100 shadow-md p-4 z-10">
            <p>Custom Beanies for Men Sexy Alien Embroidery</p>
        </div> : ""}
        
    </div>
  );
};

export default SearchBox;