"use client"
import Button from "@/components/customui/Button";
import PageHeading from "@/components/HomeComponent/PageHeading";
import Container from "@/components/layout/Container";
import paymentsticker from '../../data/others/payment.png';
import Image from "next/image";
import useCartStore from "@/store/cartStore";
import { Trash } from "lucide-react";
const Page = () => {
  const cartItem = useCartStore((state) => state.cart);
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <PageHeading title="My Cart" subtitle="Cart" />
     <Container>
      <div className="flex flex-col lg:flex-row justify-start gap-4 my-8">
        <div className="cart_product w-full lg:w-3/4 ">
          <h1 className="text-xl md:text-2xl font-medium">Cart Summary</h1>
          <div className="product my-4">
            <div className="table_heading hidden lg:flex border-b pb-2">
              <p className="w-2/5 bg-red-700">Product</p>
              <p className="w-1/5 bg-green-500">Price</p>
              <p className="w-1/5 bg-amber-400">Quantity</p>
              <p className="w-1/5 bg-teal-700">SubTotal</p>
            </div>
            <div className="table_data hidden lg:flex  my-4">
              <p className="w-2/5 bg-red-700 flex items-center gap-2"><Trash size={17}/> Custom Beanies for Men Sexy Alien Embroidery</p>
              <p className="w-1/5 bg-green-500">$16</p>
              <p className="w-1/5 bg-amber-400"><button>-</button> <span>2</span> <button>+</button></p>
              <p className="w-1/5 bg-teal-700">SubTotal</p>
            </div>
          </div>
        </div>
        <div className="cart_bill_summery py-8 px-6 bg-[#F5F5F5] w-full lg:w-1/4">
          <h1 className="text-xl md:text-2xl font-medium">Cart Total</h1>
          <div className="border-b border-gray-300">
            <div className="sub_total flex justify-between border-b border-gray-300 pb-4 w-full my-4">
              <p className="font-medium text-lg">Subtotal</p>
              <p className="font-medium text-lg">$16</p>
            </div>
            <div className="shipping_method">
              <div className="flat_rate flex justify-between w-full my-4">
                <label  className="flex items-center gap-2 font-medium text-lg">
                  <input type="radio" />
                  Flat rate:
                </label>
                <p>$20</p>
              </div>
              <div className="local_pickup flat_rate flex justify-between w-full my-4">
                <label className="flex items-center gap-2 font-medium text-lg">
                  <input type="radio" />
                  Local Pickup:
                </label>
                <p>$5</p>
              </div>
            </div>
          </div>
          <div>
            <div className="total flex justify-between w-full my-4">
              <p className="font-medium text-lg">Total</p>
              <p className="font-medium text-lg">$16</p>
            </div>
            <Button className="bg-black w-full text-white font-medium uppercase">Proccess to checkout</Button>
            <p  className="text-sm font-bold mt-4 text-center text-gray-600">Guaranteed Safe And Secure Checkout</p>
            <Image src={paymentsticker} alt="Payment Sticker" className="my-2"/>
          </div>
        </div>
      </div>
     </Container>
    </div>
  );
};

export default Page;