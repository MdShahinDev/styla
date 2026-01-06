'use client';
import Container from '@/components/layout/Container';
import { useOrderStore } from '@/store/cartStore';
import { CircleCheckBig, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Page = () => {
  const lastOrder = useOrderStore((state) => state.lastOrder);
  if (lastOrder.length === 0) {
    redirect('/');
  }

  return (
    <div className="flex justify-center items-center my-10">
      <Container>
        <div className="w-full md:w-xl flex flex-col gap-3  items-stretch justify-center border rounded-md py-4 px-4 shadow-md">
          <div className="bg-green-500 self-center w-10 h-10 flex items-center justify-center my-2 rounded-full text-white shadow-md">
            <CircleCheckBig />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 self-center">Thank You</h1>
          <h2 className="text-sm md:text-lg font-semibold self-center">Your Order has been Placed successfully</h2>
          <div>
            <h2 className="text-base font-medium my-2">Your Order</h2>
            {lastOrder.map((item) => (
              <div key={item.id} className="w-full flex items-start gap-3 text-start ">
                <Image src={item.images[0]} alt={item.name} width={40} height={40} className="object-cover" />

                <div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p>${item.price * item.quantity}</p>
                  </div>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border w-full text-center py-2 bg-amber-200/20 border-amber-200 rounded-sm">
            <p>Please keep your phone on going.</p>
          </div>
          <Link
            href={'/'}
            className="flex items-center justify-center self-center gap-2 text-lg font-medium bg-green-500 px-4 py-1 text-white rounded-full"
          >
            <Home size={17} /> Go back to home
          </Link>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
