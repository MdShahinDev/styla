'use client';
import { banners } from '@/data/data';
import Image from 'next/image';
import Container from '../layout/Container';
import Link from 'next/link';
const TShirtPromothion = () => {
  return (
    <div className="py-20">
      <div className="relative w-full py-4">
        <Image
          src={banners[0]}
          alt="Banner"
          className='fill
        priority
        className="object-cover"'
        />
        <Container>
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4">
            <p className="font-medium uppercase text-base md:text-lg">best selling this week</p>
            <h2 className="text-xl font-bold md:text-3xl">
              Round Neck Viscose <br />
              Men And Womens T-Shirt
            </h2>
            <Link href={"/shop"} className='bg-black text-white px-6 py-2 hover:bg-black/90 transition-all duration-500'>Read More</Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TShirtPromothion;
