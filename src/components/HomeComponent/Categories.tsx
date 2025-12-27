"use client"
import { category } from '@/data/data.js';
import Container from '../layout/Container';
import Image from 'next/image';
import Link from 'next/link';
const Categories = () => {
  return (
    <div className="pb-16">
      <Container>
        <div
          className="grid 
  grid-cols-2
  md:grid-cols-4 
  lg:grid-cols-6 
  place-items-center
  gap-3 sm:gap-4 md:gap-6"
        >
          {category.map((item) => (
            <div
              key={item.id}
              className="border group border-white hover:border hover:border-gray-200 rounded-md transition-all duration-500 p-8 flex flex-col items-center justify-center text-center gap-4"
            >
              <Link href={`/category/${item.slug}`}>
                <Image src={item.images} alt={item.name} />
                <h1 className="mt-2 text-gray-700 group-hover:text-black">{item.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
