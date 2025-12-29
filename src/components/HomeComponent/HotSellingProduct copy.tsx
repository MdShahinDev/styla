'use client';
import { products } from '@/data/data';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../layout/Container';
import { StarRating } from '../customui/StarRating';
import { Eye, Heart } from 'lucide-react';
const HotSellingProduct = () => {
  const HotSellingProduct: Product[] = products.filter((item) => item.hot_sale == true);
  
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {HotSellingProduct.slice(0,8).map((item) => (
            <div key={item.id} className="h-full">
              {/* Card */}
              <div className="h-full flex flex-col border p-2">
                <div className="overflow-hidden">
                  <div className="relative group">
                    <Image src={item.images[0]} alt={item.name} className="cursor-pointer mb-4" />
                    <div
                      className="  absolute top-4 right-8 flex flex-col gap-4 opacity-100 md:opacity-0 translate-x-6 transition-all duration-500 ease-out md:group-hover:opacity-100 group-hover:translate-x-0">
                      <button>
                        <Heart />
                      </button>
                      <button>
                        <Eye />
                      </button>
                    </div>
                    <div className="saletag absolute top-4 left-4">
                      <p className='bg-red-600 px-2 py-0.5 text-sm font-medium text-white'>HOT</p>
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
                  <Link
                    href="/"
                    className="mt-auto block bg-black text-white w-full text-center py-2 hover:bg-black/90 transition-all duration-500"
                  >
                    Add to Cart
                  </Link>
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
        <div className='mt-6 text-center '>
        <Link href={"/category/hot_sale"} className='underline text-base md:text-xl'>Browse all hot selling product</Link>
        </div>
      </Container>
    </div>
  );
};

export default HotSellingProduct;
