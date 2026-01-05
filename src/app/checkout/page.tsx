'use client';
import PageHeading from '@/components/HomeComponent/PageHeading';
import Container from '@/components/layout/Container';
import useCartStore from '@/store/cartStore';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const cartItem = useCartStore((state) => state.cart);
  let sum = 20;
  for (let i = 0; i < cartItem.length; i++) {
    const item = cartItem[i];
    sum += item.price * item.quantity;
  }
  return (
    <div>
      <PageHeading title="Checkout" subtitle="checkout" />
      <Container>
        {cartItem.length == 0 ? 
        
        <div className="text-center my-6 space-y-4">
            <div className="text-center  text-lg md:text-2xl font-semibold">Your Cart is Empty.</div>
            <Link href={'/shop'} className="bg-black text-white px-8 py-2">
              Go to Shop Page
            </Link>
          </div>
        :(
          <div className="flex flex-col lg:flex-row gap-4 py-8">
          <div className="checkout_form w-full lg:w-3/4 mx-auto p-4 lg:p-6">
            <h2 className="text-xl lg:text-3xl font-bold mb-6">Billing Details</h2>
            {/* Order details Filed */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Shahin"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="+88 01610-545222"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Main Street"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Dhaka"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Post Code</label>
                <input
                  type="text"
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="1214"
                />
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          <div className="order_summery w-full lg:w-1/4">
            <h2 className="text-xl lg:text-3xl font-bold">Your Order</h2>
            <div className="border-b border-gray-300">
              <div className="space-y-4 my-4">
                {cartItem.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 border-b pb-4  last:border-b-0">
                    <div className="w-20 h-20 shrink-0 mb-4">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                      <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                      <p className="text-base text-gray-800 font-medium mt-2">${item.price}</p>
                    </div>
                    <div className="text-sm font-semibold">${item.quantity * item.price}</div>
                  </div>
                ))}
              </div>
              <div className="sub_total flex justify-between border-b border-gray-300 pb-4 w-full my-4">
                <p className="font-medium text-lg">Subtotal</p>
                <p className="font-medium text-lg">${sum - 20}</p>
              </div>
              <div className="shipping_method">
                <div className="flat_rate flex justify-between w-full my-4">
                  <label className="flex items-center gap-2 font-medium text-lg">
                    <input type="radio" name="shipping" checked />
                    Shipping Charge:
                  </label>
                  <p>$20</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between my-4">
              <p className="font-medium text-lg">Total</p>
              <p className="font-medium text-lg">${sum}</p>
            </div>
          </div>
        </div>
        ) }
        
      </Container>
    </div>
  );
};

export default Page;
