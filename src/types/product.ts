import { StaticImageData } from "next/image";

export interface ProductReview {
  image: string;
  name: string;
  rating: number;
  review_text: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  cat_slug: string;
  price: number;

  category: string;
  brand: string;

  inStock: boolean;
  stock_qty: number;

  color: string[];
  size: string[];

  hot_sale: boolean;
  best_selling: boolean;

  images: StaticImageData[];

  review: ProductReview;
}
