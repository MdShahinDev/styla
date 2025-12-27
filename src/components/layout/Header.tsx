'use client';
import Link from 'next/link';
import Container from './Container';
import { ChevronDown, Facebook, Grid2x2, Heart, Home, Instagram, Menu, Twitter, User, X, Youtube } from 'lucide-react';
import { useState } from 'react';
import SearchBox from '../customui/SearchBox';
import Icons from '../customui/Icons';
import { logos } from '../../data/data.js';
import Image from 'next/image';
import MobileBottomMenu from '../customui/MobileBottomMenu';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  return (
    <header className="w-full border-b relative">
      {/* ================= Topbar ================= */}
      <div className="topbar hidden lg:block bg-black text-gray-200 py-2 text-center">
        <h3 className="text-sm md:text-base">
          Free Shipping World wide for all orders over $199{' '}
          <Link href={'/shop'} className="font-medium text-white underline uppercase">
            {' '}
            Shop Now
          </Link>
        </h3>
      </div>

      <Container>
        {/* ================= Middlebar ================= */}
        <div className="flex items-center justify-between py-4">
          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
          {/* Logo */}
          <Link href="/">
            <Image src={logos.header} alt="Logo" className="w-38 lg:w-48 h-auto" />
          </Link>

          {/* Search */}
          <SearchBox />

          {/* Icons */}
          <Icons />
        </div>

        {/* ================= Desktop Navbar ================= */}
        <nav className="hidden lg:block">
          <ul className="flex justify-center gap-8 py-4 font-medium">
            <li>
              <Link href="/" className="text-gray-700 font-medium text-base uppercase">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 font-medium text-base uppercase">
                SHOP
              </Link>
            </li>

            {/* Animated Dropdown */}
            <li className="relative group">
              <h3 className="cursor-pointer text-gray-700 font-medium text-base uppercase flex items-center gap-2">
                Category <span className="bg-[#199588] text-white px-2 py-0.5 rounded-sm text-xs">Sale</span>{' '}
                <ChevronDown size={17} />{' '}
              </h3>
              <ul
                className="absolute left-1/2 top-full -translate-x-1/2 mt-3.5 bg-white shadow-md w-max max-w-none border
              opacity-0 invisible translate-y-3 py-10 px-14 z-20
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 ease-out
              before:content-[''] before:absolute before:-top-3 before:left-0
              before:h-3 before:w-full"
              >
                <div className="flex gap-18">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-2">Men Clothes</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Handbag</Link>
                        </li>
                        <li>
                          <Link href="/shop">Jacket</Link>
                        </li>
                        <li>
                          <Link href="/shop">Short</Link>
                        </li>
                        <li>
                          <Link href="/shop">Tote Bag</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2">
                        Sungalasses <span className="bg-red-600 text-white px-2 py-0.3 rounded-sm text-xs">HOT</span>{' '}
                      </h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Active Casual</Link>
                        </li>
                        <li>
                          <Link href="/shop">Easy Shirts</Link>
                        </li>
                        <li>
                          <Link href="/shop">Heel Shoes</Link>
                        </li>
                        <li>
                          <Link href="/shop">Outerwear</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-2">Dress</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Chic Style</Link>
                        </li>
                        <li>
                          <Link href="/shop">Preppy Style</Link>
                        </li>
                        <li>
                          <Link href="/shop">Punk Style</Link>
                        </li>
                        <li>
                          <Link href="/shop">Streetwear</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2">Wedding Ring</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Bucket Hat</Link>
                        </li>
                        <li>
                          <Link href="/shop">Denim Skirt</Link>
                        </li>
                        <li>
                          <Link href="/shop">Shimmer</Link>
                        </li>
                        <li>
                          <Link href="/shop">Tie-Dye</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-2">Wrist Watch</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Aviator Watch</Link>
                        </li>
                        <li>
                          <Link href="/shop">Googles</Link>
                        </li>
                        <li>
                          <Link href="/shop">Hybrid Watches</Link>
                        </li>
                        <li>
                          <Link href="/shop">Smart Watches</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2">Necklace</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Cottagecore</Link>
                        </li>
                        <li>
                          <Link href="/shop">Crop Tops</Link>
                        </li>
                        <li>
                          <Link href="/shop">Dress Skirt</Link>
                        </li>
                        <li>
                          <Link href="/shop">Elegant</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-medium mb-2">Wrist Watch</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Aviator Watch</Link>
                        </li>
                        <li>
                          <Link href="/shop">Googles</Link>
                        </li>
                        <li>
                          <Link href="/shop">Hybrid Watches</Link>
                        </li>
                        <li>
                          <Link href="/shop">Smart Watches</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium mb-2">Necklace</h3>
                      <ul className="text-sm flex flex-col gap-2 text-gray-500">
                        <li>
                          <Link href="/shop">Cottagecore</Link>
                        </li>
                        <li>
                          <Link href="/shop">Crop Tops</Link>
                        </li>
                        <li>
                          <Link href="/shop">Dress Skirt</Link>
                        </li>
                        <li>
                          <Link href="/shop">Elegant</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>

            <li>
              <Link href="/about" className="text-gray-700 font-medium text-base uppercase">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="text-gray-700 font-medium text-base uppercase">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      {/* ================= Mobile Sidebar ================= */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4.5 border-b">
          <Image src={logos.header} alt="Logo" className="w-32 h-auto" />
          <button onClick={() => setMenuOpen(false)}>
            <X className="text-xl" />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col font-medium text-lg text-gray-700 gap-4 px-6 py-4">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="uppercase">
              Shop
            </Link>
          </li>

          <li>
            <button
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="w-full flex items-center justify-between font-medium uppercase"
            >
              <div className="flex items-center gap-3">
                <span>Category</span>
                <span className="bg-[#199588] text-white px-3 py-0.5 rounded-sm text-xs uppercase">Sale</span>
              </div>

              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${mobileDropdown ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
              ${mobileDropdown ? ' mt-2' : 'max-h-0'}`}
            >
              <ul className="flex flex-col gap-2 text-sm">
                <div>
                  <h2 className="text-lg text-gray-700 mb-1 font-medium">Men Clothes</h2>
                  <div className="space-y-2 text-lg font-normal text-gray-500">
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Handbag
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Jacket
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Short
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Tote Bag
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg text-gray-700 mb-1 font-medium">
                    Dress <span className="bg-red-600 text-white px-2 py-0.3 rounded-sm text-xs">HOT</span>
                  </h2>
                  <div className="space-y-2 text-lg font-normal text-gray-500">
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Chic Style
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Preppy Style
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Punk Style
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" onClick={() => setMenuOpen(false)}>
                        Streetwear
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="uppercase">
              about
            </Link>
          </li>

          <li>
            <Link href="/" onClick={() => setMenuOpen(false)} className="uppercase">
              contact
            </Link>
          </li>
          <li className="mt-6 absolute bottom-8">
            <p>Our Channel</p>
            <div className="flex gap-8 mt-4">
              <Link href={'/'}>
                {' '}
                <Facebook />{' '}
              </Link>
              <Link href={'/'}>
                {' '}
                <Instagram />{' '}
              </Link>
              <Link href={'/'}>
                {' '}
                <Youtube />{' '}
              </Link>
              <Link href={'/'}>
                {' '}
                <Twitter />{' '}
              </Link>
            </div>
          </li>
        </ul>
      </aside>

      {/* Mobile Bottom Menu */}
      <MobileBottomMenu />  
    </header>
  );
};

export default Header;
