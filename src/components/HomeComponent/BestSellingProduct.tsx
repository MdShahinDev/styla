"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../layout/Container";
import { FreeMode, Pagination } from "swiper/modules";
import { Product } from "@/types/product";
import { products } from "@/data/data";
import Link from "next/link";
import { StarRating } from "../customui/StarRating";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";

const BestSellingProduct = () => {
  const BestSellingProduct: Product[] = products.filter((item) => item.hot_sale == true);
  return (
    <div>
      <Container>
      <Swiper
      loop={true}
      breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
          }}
        // slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >{BestSellingProduct.slice(6, 15).map((item) => (
            <SwiperSlide key={item.id}>
              {/* CARD (unchanged design) */}
              <div className="h-full flex flex-col border p-2">
                <div className="overflow-hidden">
                  <div className="relative group">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      className="cursor-pointer mb-4"
                    />

                    {/* Hover Icons */}
                    <div
                      className="
                        absolute top-4 right-4 flex flex-col gap-4
                        opacity-0 translate-x-6
                        transition-all duration-500 ease-out
                        group-hover:opacity-100 group-hover:translate-x-0
                        md:opacity-100 md:translate-x-0
                      "
                    >
                      <button><Heart /></button>
                      <button><Eye /></button>
                    </div>

                    {/* HOT tag */}
                    <div className="absolute top-4 left-4">
                      <p className="bg-red-600 px-2 py-0.5 text-sm font-medium text-white">
                        HOT
                      </p>
                    </div>
                  </div>
                </div>

                <p className="bg-gray-300 w-fit px-2 py-0.5 mb-2 text-gray-600">
                  {item.category}
                </p>

                <Link
                  href={`/product/${item.slug}`}
                  className="text-base text-gray-600 min-h-12"
                >
                  {item.name}
                </Link>

                <div className="mb-2">
                  <StarRating rating={item.review.rating} />
                </div>

                <p className="text-black font-bold mb-2">${item.price}</p>

                {item.color.length === 0 && item.size.length === 0 ? (
                  <Link
                    href="/"
                    className="mt-auto block bg-black text-white w-full text-center py-2 hover:bg-black/90 transition"
                  >
                    Add to Cart
                  </Link>
                ) : (
                  <Link
                    href={`/product/${item.slug}`}
                    className="mt-auto block bg-black text-white w-full text-center py-2 hover:bg-black/90 transition"
                  >
                    Select Product
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      </Container>
    </div>
  );
};

export default BestSellingProduct;