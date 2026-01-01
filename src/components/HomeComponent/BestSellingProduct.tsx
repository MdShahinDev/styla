'use client';
import { products } from '@/data/data';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../layout/Container';
import { StarRating } from '../customui/StarRating';
import { Eye, Heart } from 'lucide-react';
import useCartStore from '../../store/cartStore';
import useWishlistStore from '@/store/WishList';
import { toast } from 'react-toastify';
const BestSellingProduct = () => {
  const BestSellingProduct: Product[] = products.filter((item) => item.hot_sale == true);
  const addToCart = useCartStore((state) => state.addToCart);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const isWishlisted = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success('Added to cart');
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

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {BestSellingProduct.slice(0, 8).map((item) => (
            <div key={item.id} className="h-full">
              {/* Card */}
              <div className="h-full flex flex-col border p-2">
                <div className="overflow-hidden">
                  <div className="relative group">
                    <Image src={item.images[0]} alt={item.name} className="cursor-pointer mb-4" />
                    <div className="  absolute top-4 right-8 flex flex-col gap-4 opacity-100 md:opacity-0 translate-x-6 transition-all duration-500 ease-out md:group-hover:opacity-100 group-hover:translate-x-0">
                      <button
                        onClick={() =>
                          isWishlisted(item.id) ? handleRemoveFromWishlist(item.id) : handlewishlist(item)
                        }
                      >
                        <Heart
                          fill={isWishlisted(item.id) ? 'red' : 'none'}
                          stroke={isWishlisted(item.id) ? 'red' : 'currentColor'}
                        />
                      </button>
                      <button>
                        <Eye />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="bg-gray-300 w-fit px-2 py-0.5 mb-2 text-gray-600 rounded-xs">{item.category}</p>
                <Link href={`/product/${item.slug}`} className="text-base text-gray-600 min-h-12">
                  {item.name}
                </Link>
                <div className="mb-2">
                  <StarRating rating={item.review.rating} />
                </div>
                <p className="text-black font-bold mb-2">${item.price}</p>
                {item.color.length === 0 && item.size.length === 0 ? (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-auto block bg-black text-white w-full text-center py-2 hover:bg-black/90 transition-all duration-500"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link
                    href={`/product/${item.slug}`}
                    className="mt-auto block  bg-black text-white w-full text-center py-2 hover:bg-black/90 transition-all duration-500"
                  >
                    Select Product
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center ">
          <Link href={'/category/hot_sale'} className="underline text-base md:text-xl">
            Browse all hot selling product
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BestSellingProduct;
