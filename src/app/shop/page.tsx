'use client';
import { StarRating } from '@/components/customui/StarRating';
import PageHeading from '@/components/HomeComponent/PageHeading';
import Container from '@/components/layout/Container';
import { getAllProducts } from '@/lib/getProducts';
import { useCartStore } from '@/store/cartStore';
import useWishlistStore from '@/store/WishList';
import { Product } from '@/types/product';
import { Eye, Filter, Heart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const products = useMemo(() => getAllProducts(), []);
  const [sitebarOpen, setSitebarOpen] = useState(false);
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];
  const sizes = Array.from(
    new Set(products.flatMap((product) => product.size).filter((size) => size && size.trim() !== ''))
  );
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
  };

  const toggleSize = (size: string) => {
    setSelectedSize((prev) => (prev.includes(size) ? prev.filter((b) => b !== size) : [...prev, size]));
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSize([]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);

      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      const sizeMatch = selectedSize.length === 0 || product.size.some((size) => selectedSize.includes(size));

      return categoryMatch && brandMatch && sizeMatch;
    });
  }, [products, selectedCategories, selectedBrands, selectedSize]);

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
      <PageHeading title="Shop" subtitle="shop" />
      <Container>
        <div className="relative flex flex-col lg:flex-row gap-4 my-6">
          {/* Sidebar */}
          <div className=" sidebar hidden lg:block w-1/4 space-y-6">
            <div className="category border p-4">
              <h2 className="text-2xl font-medium mb-4">Filter By Category</h2>
              <div className="border mb-4"></div>
              <div className="flex flex-col gap-4">
                {categories.map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item)}
                      onChange={() => toggleCategory(item)}
                      className=" w-4 h-4  accent-black cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="brand border p-4">
              <h2 className="text-2xl font-medium mb-4">Filter By Brand</h2>
              <div className="border mb-4"></div>
              <div className="flex flex-col gap-4">
                {brands.map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer capitalize">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(item)}
                      onChange={() => toggleBrand(item)}
                      className=" w-4 h-4  accent-black cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="size border p-4">
              <h2 className="text-2xl font-medium mb-4">Filter By Size</h2>
              <div className="border mb-4"></div>
              <div className="flex flex-col gap-4">
                {sizes.map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer capitalize">
                    <input
                      type="checkbox"
                      checked={selectedSize.includes(item)}
                      onChange={() => toggleSize(item)}
                      className=" w-4 h-4  accent-black cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="product_section w-full  lg:w-3/4 ">
            <div className="flex items-center justify-between">
              <h3>
                Showing {filteredProducts.length} of {products.length} results
              </h3>
              <select name="" id="">
                <option value="">Default Sorting</option>
                <option value="">Sort by Price High to Low</option>
                <option value="">Sort by Price Low to High</option>
              </select>
            </div>
            {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedSize.length > 0) && (
              <div className="my-4 flex items-center gap-3 flex-wrap">
                {[...selectedCategories, ...selectedBrands, ...selectedSize].map((item) => (
                  <span key={item} className="px-3 py-1 border bg-gray-200 text-sm capitalize">
                    {item}
                  </span>
                ))}

                <button onClick={clearAllFilters} className="text-sm text-red-600 underline">
                  Clear all
                </button>
              </div>
            )}

            <div className="product_grid mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map((item) => (
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
                          {/* <div className="saletag absolute top-4 left-4">
                      <p className="bg-red-600 px-2 py-0.5 text-sm font-medium text-white">HOT</p>
                    </div> */}
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
            </div>
          </div>
        </div>
        {/* mobile filter */}
        <div className="lg:hidden">
          <button className=" fixed bottom-25" onClick={() => setSitebarOpen(true)}>
            <Filter />
          </button>
        </div>
        {/* Sidebar Overlay */}
        {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${sitebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setSitebarOpen(false)}
      />
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${sitebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4.5 border-b">
            {/* <Image src={logos.header} alt="Logo" className="w-32 h-auto" /> */}
            <h2>Filter</h2>
            <button onClick={() => setSitebarOpen(false)}>
              <X className="text-xl" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className=" sidebar w-full space-y-6 ">
            <div className="category p-4">
              <h2 className="text-2xl font-medium mb-4">Filter By Category</h2>
              <div className="border mb-4"></div>
              <div className="flex flex-col gap-4">
                {categories.map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(item)}
                      onChange={() => toggleCategory(item)}
                      className=" w-4 h-4  accent-black cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="brand border p-4">
              <h2 className="text-2xl font-medium mb-4">Filter By Brand</h2>
              <div className="mb-4"></div>
              <div className="flex flex-col gap-4">
                {brands.map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer capitalize">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(item)}
                      onChange={() => toggleBrand(item)}
                      className=" w-4 h-4  accent-black cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
            <div className="size border p-4">
              <h2 className="text-2xl font-medium mb-4">Filter By Size</h2>
              <div className="mb-4"></div>
              <div className="flex flex-col gap-4">
                {sizes.map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer capitalize">
                    <input
                      type="checkbox"
                      checked={selectedSize.includes(item)}
                      onChange={() => toggleSize(item)}
                      className=" w-4 h-4  accent-black cursor-pointer"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
          </div>
            

        </aside>
      
        
      </Container>
    </div>
  );
};

export default Page;
