import { useState } from "react";
import Container from "../layout/Container";
import { Product } from "@/types/product";

const ProductTab = ({ product }: { product: Product }) => {
    const [activeTab, setActiveTab] = useState<"description" | "additional">(
  "description"
);

  return (
   <Container>

<div className="my-16">
  {/* Tabs Header */}
  <div className="flex border-b gap-6 overflow-x-auto">
    <button
      onClick={() => setActiveTab("description")}
      className={`pb-3 whitespace-nowrap text-sm font-medium transition ${
        activeTab === "description"
          ? "border-b-2 border-black text-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      Description
    </button>

    <button
      onClick={() => setActiveTab("additional")}
      className={`pb-3 whitespace-nowrap text-sm font-medium transition ${
        activeTab === "additional"
          ? "border-b-2 border-black text-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      Additional Information
    </button>
  </div>

  {/* Tabs Content */}
  <div className="mt-6 text-sm text-gray-700 leading-relaxed">
    {activeTab === "description" && (
      <div>
        <p className="mb-4">
          This premium product is crafted with high-quality materials and
          designed for everyday comfort and durability.
        </p>

        <p>
          Perfect for casual and formal use, offering a modern look with
          long-lasting performance.
        </p>
      </div>
    )}

    {activeTab === "additional" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <span className="font-medium">Brand:</span> {product.brand}
        </div>

        <div>
          <span className="font-medium">Category:</span> {product.category}
        </div>

        {product.color.length > 0 && (
          <div>
            <span className="font-medium">Available Colors:</span>{" "}
            {product.color.join(", ")}
          </div>
        )}

        {product.size.length > 0 && (
          <div>
            <span className="font-medium">Available Sizes:</span>{" "}
            {product.size.join(", ")}
          </div>
        )}

        <div>
          <span className="font-medium">Stock:</span>{" "}
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
      </div>
    )}
  </div>
</div>
   </Container>

  );
};

export default ProductTab;