"use client";

import PageHeading from "@/components/HomeComponent/PageHeading";
import Container from "@/components/layout/Container";
import useWishlistStore from "@/store/WishList";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  return (
    <div>
      <PageHeading title="Wishlist" subtitle="Wishlist" />

      <Container>
        {wishlist.length === 0 ? (
          /* ================= Empty State ================= */
          <div className="py-20 text-center text-gray-500 text-lg">
            Your wishlist is empty
          </div>
        ) : (
          /* ================= Wishlist Items ================= */
          <div className="py-10 space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  gap-4 sm:gap-6
                  border p-4 rounded-md
                "
              >
                {/* Remove */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash size={18} />
                </button>

                {/* Image */}
                <div className="w-20 h-20 flex-shrink-0">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-700">
                    {item.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="text-sm sm:text-base font-semibold text-gray-800">
                  ${item.price}
                </div>

                {/* Action */}
                <div className="w-full sm:w-auto">
                  <Link
                    href={`/product/${item.slug}`}
                    className="
                      block text-center
                      bg-black text-white
                      px-4 py-2 text-sm
                      hover:bg-black/90 transition
                    "
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Page;
