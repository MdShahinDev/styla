import Container from '../layout/Container';
import watchpromo from '../../../src/data/category/watch_banner.jpg';
import shoepromo from '../../../src/data/category/shoe_banner.jpg';
import bagpromo from '../../../src/data/category/bag_banner.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { lazy } from 'react';
const FeatureSection = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col md:flex-row justify-between gap-4 ">
          <div className="relative overflow-hidden group">
            <Image
              src={watchpromo}
              alt="Watch Promo"
              className="transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-15 left-10">
              <p className="text-sm font-medium uppercase">10% off all items</p>
              <h1 className="text-xl mt-4 mb-6 font-semibold md:text-2xl">
                Lifelong Premium <br /> Luxury Watch
              </h1>
              <Link href={'/category/men'} className="text-base uppercase font-medium underline">
                Shop now
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src={shoepromo} 
              alt="Watch Promo"
              className="transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-15 left-10">
              <p className="text-sm font-medium uppercase">new stylish shoes</p>
              <h1 className="text-xl mt-4 mb-6 font-semibold md:text-2xl">
                Buy Stylish Women <br /> Sneakers Shoes
              </h1>
              <Link href={'/category/women'} className="text-base uppercase font-medium underline">
                Shop now
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src={bagpromo} 
              alt="Watch Promo"
              className="transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-15 left-10">
              <p className="text-sm font-medium uppercase">20% off all items</p>
              <h1 className="text-xl mt-4 mb-6 font-semibold md:text-2xl">
                Buy New Women <br /> Shoulder Bag
              </h1>
              <Link href={'/category/women'} className="text-base uppercase font-medium underline">
                Shop now
              </Link>
            </div>
          </div>
         
        </div>
      </Container>
    </div>
  );
};

export default FeatureSection;
