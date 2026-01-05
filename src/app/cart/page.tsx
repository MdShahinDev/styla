'use client';
import Button from '@/components/customui/Button';
import PageHeading from '@/components/HomeComponent/PageHeading';
import Container from '@/components/layout/Container';
import paymentsticker from '../../data/others/payment.png';
import Image from 'next/image';
import useCartStore from '@/store/cartStore';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
const Page = () => {
  const cartItem = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };
  const handleDecrease = (productId: string) => {
    decreaseQuantity(productId);
  };
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  let sum = 20;
  for (let i = 0; i < cartItem.length; i++) {
    const item = cartItem[i];
    sum += item.price * item.quantity;
  }
   const router = useRouter();
  
    const checkout = () => {
      router.push('/checkout');
    };
  return (
    <div>
      <PageHeading title="My Cart" subtitle="Cart" />
      <Container>
        {cartItem.length ==0 ? (
          
           <div className="text-center my-6 space-y-4">
            <div className="text-center  text-lg md:text-2xl font-semibold">Your Cart is Empty.</div>
            <Link href={'/shop'} className="bg-black text-white px-8 py-2">
              Go to Shop Page
            </Link>
          </div>
        ) : (
         <div className="flex flex-col lg:flex-row justify-start gap-4 my-8">
            <div className="cart_product w-full lg:w-3/4 ">
              <h1 className="text-xl md:text-2xl font-medium">Cart Summary</h1>
              <div className="product my-4">
                <div className="table_heading hidden lg:flex border-b pb-2">
                  <p className="w-5/8 text-lg font-medium">Product</p>
                  <p className="w-1/8 text-lg font-medium">Price</p>
                  <p className="w-1/8 text-lg font-medium ">Quantity</p>
                  <p className="w-1/8 text-lg font-medium ">SubTotal</p>
                </div>
                {cartItem.map((item) => (
                  <div
                    key={item.id}
                    className="table_data border p-4 my-4
               grid grid-cols-1 gap-4
               lg:flex lg:items-center lg:gap-0"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-3 lg:w-5/8">
                      <Trash
                        size={17}
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-red-500"
                      />
                      <Image src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover" />
                      <p className="text-lg font-medium">{item.name}</p>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between lg:block lg:w-1/8">
                      <span className="text-sm text-gray-500 lg:hidden">Price</span>
                      <span>$ {item.price}</span>
                    </div>

                    {/* Quantity */}
                    <div className="flex justify-between items-center lg:block lg:w-1/8">
                      <span className="text-sm text-gray-500 lg:hidden">Quantity</span>
                      <div className="flex items-center border rounded w-fit">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between lg:block lg:w-1/8">
                      <span className="text-sm text-gray-500 lg:hidden">Total</span>
                      <span className="font-semibold">$ {item.quantity * item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart_bill_summery py-8 px-6 bg-[#F5F5F5] w-full lg:w-1/4 self-start">
              <h1 className="text-xl md:text-2xl font-medium">Cart Total</h1>
              <div className="border-b border-gray-300">
                <div className="sub_total flex justify-between border-b border-gray-300 pb-4 w-full my-4">
                  <p className="font-medium text-lg">Subtotal</p>
                  <p className="font-medium text-lg">${sum - 20}</p>
                </div>
                <div className="shipping_method">
                  <div className="flat_rate flex justify-between w-full my-4">
                    <label className="flex items-center gap-2 font-medium text-lg">
                      <input
                        type="radio"
                        name="shipping"     
                        checked          
                      />
                      Flat rate:
                    </label>
                    <p>$20</p>
                  </div>
                  <div className="local_pickup flat_rate flex justify-between w-full my-4">
                    <label className="flex items-center gap-2 font-medium text-lg">
                      <input
                        type="radio"
                        name="shipping"
                      />
                      Local Pickup:
                    </label>
                    <p>$5</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="total flex justify-between w-full my-4">
                  <p className="font-medium text-lg">Total</p>
                  <p className="font-medium text-lg">$ {sum}</p>
                </div>
                <Button onClick={checkout} className="bg-black w-full text-white font-medium uppercase">Proccess to checkout</Button>
                <p className="text-sm font-bold mt-4 text-center text-gray-600">Guaranteed Safe And Secure Checkout</p>
                <Image src={paymentsticker} alt="Payment Sticker" className="my-2" />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Page;
