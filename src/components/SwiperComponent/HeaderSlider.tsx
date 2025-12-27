'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { sliders } from '@/data/data.js';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
const HeaderSlider = () => {
  return (
    <div className="relative min-h-[30vh] lg:h-[70vh]">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative min-h-[30vh] lg:h-[70vh] w-full">
            <Image src={sliders[0]} fill priority alt="Slider 1" className="object-cover" />
            <div className="absolute inset-0 flex flex-col pl-10  md:pl-28 text-white justify-center ">
              <p className="text-sm md:text-base font-medium uppercase text-gray-500 ">Trending collection</p>
              <h1 className="text-xl md:text-3xl lg:text-6xl text-gray-800 font-semibold">
                Limited Edition For
                <br className="" />
                Latest Men&apos;s Styles
                <br className="hidden md:block" />
                Fashion
              </h1>

              <Link
                href="/shop"
                className="mt-4 w-fit bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative min-h-[30vh] lg:h-[70vh] w-full">
            <Image src={sliders[1]} fill priority alt="Slider 1" className="object-cover" />
            <div className="absolute inset-0 flex flex-col pl-10  md:pl-28 text-white justify-center ">
              <p className="text-sm md:text-base font-medium uppercase text-gray-200 ">Trending collection</p>
              <h1 className="text-xl md:text-3xl lg:text-6xl text-white font-semibold">
                Limited Edition For
                <br className="" />
                Latest Men&apos;s Styles
                <br className="hidden md:block" />
                Fashion
              </h1>

              <Link
                href="/shop"
                className="mt-4 w-fit bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

      <button className="swiper-prev opacity-0 lg:opacity-100  w-8 h-8 absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 rounded-full flex items-center justify-center text-white text-xl">
        ‹{' '}
      </button>
      <button className="swiper-next opacity-0 lg:opacity-100  w-8 h-8 absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/70 rounded-full flex items-center justify-center text-white text-xl">
        {' '}
        ›{' '}
      </button>
    </div>
  );
};

export default HeaderSlider;
