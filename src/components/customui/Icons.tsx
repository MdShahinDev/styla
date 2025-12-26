'use client';
import { Heart, ShoppingBasket, ShoppingCart, Trash, User, Van, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

const Icons = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  const checkout = () => {
    router.push('/checkout');
    setCartOpen(!cartOpen);
  };
  const cart = () => {
    router.push('/cart');
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <Link href={'/account'}>
          <User className="w-6 h-6 sm:w-7 sm:h-7 " />
        </Link>
        <Link href={'/wishlist'} className="relative">
          <Heart className="w-6 h-6 sm:w-7 sm:h-7 " />
          <span className="absolute w-4 h-4 flex items-center justify-center rounded-full text-xs -bottom-2 -right-2 font-medium bg-black text-white">
            10
          </span>
        </Link>
        <button className="relative" onClick={toggleCart}>
          <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 " />
          <span className="absolute w-4 h-4 flex items-center justify-center rounded-full text-xs -bottom-2 -right-2 font-medium bg-black text-white">
            10
          </span>
        </button>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${cartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-86 bg-white z-50
                    transform transition-transform duration-300 ease-in-out
                    flex flex-col
                    ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* ================= Header ================= */}
        <div className="flex items-center bg-gray-100 justify-between px-4 py-4 border-b">
          <div className="flex gap-1">
            <Van size={24} /> <span className="text-lg font-semibold">Shopping Cart</span>
          </div>
          <button onClick={toggleCart}>
            <X className="text-lg" />
          </button>
        </div>

        {/* ================= Cart Items (Scrollable) ================= */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Cart Item */}
          <div className="flex gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded" />
            <div className="flex-1">
              <h4 className="text-sm text-gray-600 font-medium">Custom Beanies for Men Sexy Alien Embroidery</h4>
              <p className="text-xs text-gray-500">Qty: 1</p>
              <p className="text-sm font-semibold">$49.00</p>
            </div>
            <button className="text-red-700 ">
              <Trash size={18} />
            </button>
          </div>
          <div className="flex gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded" />
            <div className="flex-1">
              <h4 className="text-sm text-gray-600 font-medium">Custom Beanies for Men Sexy Alien Embroidery</h4>
              <p className="text-xs text-gray-500">Qty: 1</p>
              <p className="text-sm font-semibold">$49.00</p>
            </div>
            <button className="text-red-700 ">
              <Trash size={18} />
            </button>
          </div>
        </div>

        {/* ================= Summary ================= */}
        <div className="border-t px-4 py-4 bg-white sticky bottom-0">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>$148.00</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>Calculate while chekout</span>
          </div>

          <div className="flex justify-between font-semibold text-base mb-4">
            <span>Total</span>
            <span>$148.00</span>
          </div>
          <div className="space-y-2">
            <Button fullWidth type="button" className="bg-transparent text-black border" onClick={cart}>
              Go to Cart <ShoppingBasket size={18} />
            </Button>
            <Button fullWidth type="button" className="bg-black text-white hover:bg-black/90" onClick={checkout}>
              Checkout
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Icons;
