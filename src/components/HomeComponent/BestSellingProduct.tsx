"use client"
import { products } from "@/data/data"
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import { StarRating } from "../customui/StarRating";
const BestSellingProduct = () => {
     const BestSellingProduct:Product[] =products.filter(((item)=> item.best_selling ==true))
     console.log("Best Selling",BestSellingProduct);
     
  return (
    <div>
       <Container>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {BestSellingProduct.map((item)=>(
            <div key={item.id}>
                <div className="overflow-hidden w-full">
                <Image src={item.images[0]} alt={item.name} className="cursor-pointer mb-4" />
                <p className="bg-gray-300 w-fit px-2 py-0.5 mb-2 text-gray-600 rounded-xs">{item.category}</p>
                <Link href={`/product/${item.slug}`} className="text-base text-gray-600">{item.name}</Link>
                <div className="mt-1">
            <StarRating rating={item.review.rating} />
          </div>
                </div>
                
            </div>
        ))}
        </div>
       </Container>
    </div>
  );
};

export default BestSellingProduct;