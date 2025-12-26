"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";


export default function NewMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="w-full border-b">
      {/* ================= Topbar ================= */}
      <div className="bg-black text-white text-sm py-2 text-center">
        Free Shipping World wide for all orders over $199
      </div>

      {/* ================= Middlebar ================= */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyLogo
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-10">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full py-2 px-4 pr-10 focus:outline-none"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl">
          <Heart />
          <ShoppingCart />

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* ================= Desktop Navbar ================= */}
      <nav className="hidden md:block">
        <ul className="flex justify-center gap-8 py-4 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* Animated Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer">Shop</span>

            <ul className="absolute left-0 top-full mt-2 bg-white shadow-md min-w-[180px]
              opacity-0 invisible translate-y-3
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 ease-out"
            >
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/men">Men</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/women">Women</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/kids">Kids</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* ================= Mobile Sidebar ================= */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="text-xl" />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-4 px-6 py-4">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* Mobile Dropdown */}
          <li>
            <button
              className="w-full text-left font-medium"
              onClick={() => setMobileDropdown(!mobileDropdown)}
            >
              Shop
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
              ${mobileDropdown ? "max-h-40 mt-2" : "max-h-0"}`}
            >
              <ul className="ml-4 flex flex-col gap-2 text-sm">
                <li>
                  <Link href="/shop/men">Men</Link>
                </li>
                <li>
                  <Link href="/shop/women">Women</Link>
                </li>
                <li>
                  <Link href="/shop/kids">Kids</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}
