'use client';
import { Heart, ShoppingBasket, ShoppingCart, Trash, User, Van, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useWishlistStore from '@/store/WishList';
import { useCartStore } from '@/store/cartStore';

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
  const cartItem = useCartStore((state) => state.cart);
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
 const removeFromCart = useCartStore(
  (state) => state.removeFromCart
);
const wishlist = useWishlistStore((state) => state.wishlist);
const totalWishlistItem = wishlist.length;
const subtotal = cartItem.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);


  return (
    <div>
      <div className="flex items-center gap-4">
        <Link href={'/account'} className="hidden lg:block">
          <User className="w-6 h-6 sm:w-7 sm:h-7 " />
        </Link>
        <Link href={'/wishlist'} className="relative hidden lg:block">
          <Heart className="w-6 h-6 sm:w-7 sm:h-7 " />
          <span className="absolute w-5 h-5 flex items-center justify-center rounded-full text-xs -bottom-2 -right-2 font-medium bg-black text-white">
            {totalWishlistItem}
          </span>
        </Link>
        <button className="relative" onClick={toggleCart}>
          <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 " />
          <span className="absolute w-5 h-5 flex items-center justify-center rounded-full text-xs -bottom-2 -right-2 font-medium bg-black text-white">
            {totalItems}
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
        className={`fixed top-0 right-0 h-full w-86 lg:w-96 bg-white z-50
    transform transition-transform duration-300 ease-in-out
    flex flex-col
    ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* ================= Header ================= */}
        <div className="flex items-center justify-between px-4 py-4 border-b bg-gray-100">
          <div className="flex items-center gap-2">
            <Van size={22} />
            <span className="text-lg font-semibold">Shopping Cart</span>
          </div>
          <button onClick={toggleCart}>
            <X size={20} />
          </button>
        </div>

        {/* ================= Body ================= */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {cartItem.length === 0 ? (
            // Empty Cart
            <div className="flex h-full items-center justify-center text-gray-500">Your cart is empty</div>
          ) : (
            // Cart Items
            <div className="space-y-4">
              {cartItem.map((item) => (
                <div key={item.id} className="flex gap-3 items-start border-b pb-4 last:border-b-0">
                  {/* Image */}
                  <div className="w-16 h-16 bg-gray-200 rounded shrink-0" >
                    <Image src={item.images[0]} alt={item.name} className='w-full h-auto' />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-700">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-semibold">${item.price}</p>
                  </div>

                  {/* Remove */}
                  <button  className="text-red-600 hover:text-red-700">
                    <Trash size={18} onClick={() => removeFromCart(item.id)}/>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= Summary (Sticky Bottom) ================= */}
        {cartItem.length > 0 && (
          <div className="border-t px-4 py-4 bg-white sticky bottom-0">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-2 text-gray-500">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="flex justify-between font-semibold text-base mb-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
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
        )}
      </aside>
    </div>
  );
};

export default Icons;
