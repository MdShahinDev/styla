import PageHeading from "@/components/HomeComponent/PageHeading";
import ProductCard from "@/components/ProductPageComponent/ProductCard";
import { products } from "@/data/data";
import { UrlProps } from "@/types/AllTypes";

const Page = async ({ params }: UrlProps) => {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug );
    if (!product) {
    return <div>Product not found</div>;
  }
    
  return (
  <>
    <PageHeading title={product.name} subtitle={product.name}/>
    <ProductCard product={product} />
  </>
  );
};

export default Page;