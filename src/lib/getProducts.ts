

// Get All Product

import { products } from "@/data/data";
import { Product } from "@/types/product";

export const getAllProducts =():Product[] =>{
    return products;
}

// get product by slug 
export const getProductBySlug =(slug: string): Product | undefined =>{
    return products.find((product)=>product.slug === slug);
}


//  Get products by category slug

export const getProductsByCategory = (catSlug: string): Product[] => {
  return products.filter((product) => product.cat_slug === catSlug);
};


//  Get hot sale products
 
export const getHotSaleProducts = (): Product[] => {
  return products.filter((product) => product.hot_sale);
};


//  Get best selling products

export const getBestSellingProducts = (): Product[] => {
  return products.filter((product) => product.best_selling);
};
