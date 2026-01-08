'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import { useState } from 'react';
import Container from '../layout/Container';
import { Eye, Gift, Heart, Truck } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import useWishlistStore from '@/store/WishList';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import ProductTab from './ProductTab';

const ProductCard = ({ product }: { product: Product }) => {
  const [thumbnail, setThumbnail] = useState(product.images[0]);
  const [color, setColor] = useState(product.color[0]);
  const [size, setSize] = useState(product.size[0]);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const cartItem = useCartStore((state) => state.cart.find((item) => item.id === product.id));
  const quantity = cartItem?.quantity ?? 1;
  const [localQty, setLocalQty] = useState(quantity);
    const router = useRouter();
  const isWishlisted = () => {
    return wishlist.some((item) => item.id === product.id);
  };
  const handlewishlist = (product: Product) => {
    addToWishlist(product);
    toast.success('Added to Wishlist');
  };
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id);
    toast.error('Removed from wishlist');
  };
  const increaseQty = () => {
    setLocalQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setLocalQty((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = (product: Product) => {
    const cartProduct = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity: localQty,
    };
    addToCart(cartProduct);
    toast.success('Added to cart');
  };
  const checkout = () => {
     const cartProduct = {
      ...product,
      selectedColor: color,
      selectedSize: size,
      quantity: localQty,
    };
    addToCart(cartProduct);
    router.push('/checkout');
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <div className="flex gap-3 shrink-0">
          <div className="flex flex-col gap-3">
            {product.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <Image src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <Image src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-sm w-full md:w-1/2 md:flex-1">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          <div className="mt-6">
            <p className="text-[#0000FF] text-lg font-semibold">MRP: ${product.price}</p>
            {/* <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p> */}
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          <p className="text-base font-medium mt-6">
            We have a size chart behind each set of pictures. You can also check our size information in the Product
            Description. If you have any questions about the size, you can contact our customer service.
          </p>

          {product.color.length > 0 && (
            <div className="my-6">
              <p>
                Color:{' '}
                {product.color.map((item, i) => (
                  <button
                    onClick={() => setColor(item)}
                    className={`px-2 py-1 mr-2 border ${color === item ? 'border-red-600' : 'border-gray-300'}`}
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </p>
            </div>
          )}
          {product.size.length > 0 && (
            <div className="my-6">
              <p>
                Size:
                {product.size.map((item, i) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border px-2 py-1 mr-2 ${size === item ? 'border-red-600' : 'border-gray-300'}`}
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </p>
            </div>
          )}
          <div className="flex justify-between items-center lg:block lg:w-1/8 my-4">
            <span className="text-sm text-gray-500 lg:hidden">Quantity</span>
            <div className="flex items-center border rounded w-fit">
              <button onClick={decreaseQty} className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                −
              </button>
              <span className="px-4 text-sm">{localQty}</span>
              <button onClick={increaseQty} className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
            <button onClick={checkout} className="w-full py-3.5 cursor-pointer font-medium bg-black text-white hover:opacity-90  transition">
              Buy now
            </button>
          </div>
          <button
            onClick={() => (isWishlisted() ? handleRemoveFromWishlist(product.id) : handlewishlist(product))}
            className="wishlist flex items-center gap-2 my-6 cursor-pointer"
          >
            <Heart size={17} fill={isWishlisted() ? 'red' : 'none'} stroke={isWishlisted() ? 'red' : 'currentColor'} />{' '}
            <p>WISHLIST</p>
          </button>
          <div className='my-4 border-t pt-2'>
            <p className='flex items-center gap-1 mb-2 text-base'><Eye size={17}/>33 people are viewing this right now</p>
            <p className='flex items-center gap-1 mb-2 text-base'><Truck size={17}/>Estimated Delivery : Up to 4 business days</p>
            <p className='flex items-center gap-1 mb-2 text-base'><Gift size={17}/>Free Shipping & Returns : On all orders over $200</p>
          </div>
        </div>
      </div>

      <ProductTab product={product} />
    </Container>
  );
};

export default ProductCard;
