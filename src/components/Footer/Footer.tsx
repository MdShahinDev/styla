import Image from 'next/image';
import Container from '../layout/Container';
import { logos } from '@/data/data';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div className="py-20 lg:pb-10 bg-black">
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className="about ">
            <Link href={'/'}><Image src={logos.footer} alt='Footer Logo' className='w-38 lg:w-48 h-auto mb-4'/></Link>
            <p className='text-gray-300'>welcome to our store, where we pride ourselves on provuding exceptional products and unparalleled customer service our store style, and innovation</p>
          
          </div>
          <div className="quick_link">
            <h3 className='text-gray-100 font-medium text-lg mb-2 '>Quick Links</h3>
            <ul className='flex flex-col gap-2'>
              <li className='text-gray-400'><Link href={'/'}>About Us</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Voucher</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Contact Us</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Latest News</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Payment</Link></li>
            </ul>
          </div>
          <div className="services">
             <h3 className='text-gray-100 font-medium text-lg mb-2'>Services</h3>
            <ul className='flex flex-col gap-2'>
              <li className='text-gray-400'><Link href={'/'}>Order Status</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Terms Conditions</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Policy for Sellers</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Policy For Buyers</Link></li>
              <li className='text-gray-400'><Link href={'/'}>Shipping & Refund</Link></li>
            </ul>
          </div>
          <div className="contact_us">
            <h3 className='text-gray-100 font-medium text-lg mb-2'>Contact Us</h3>
            <ul className='flex flex-col gap-2'>
              <li className='text-gray-400 flex items-center gap-2'><span><MapPin size={17}/></span>60 29th Dhaka, Bangladesh</li>
              <li className='text-gray-400 flex items-center gap-2'><span><Phone size={17}/></span>+8801610-545222</li>
              <li className='text-gray-400 flex items-center gap-2'><span><Mail size={17}/></span>hello.shahinofficial@gmail.com</li>
            </ul>
          </div>
        </div>
        
      </Container>
      <div className="copyrigh border-t border-gray-200 mt-8 pt-10 text-center text-gray-300">
        <p>Copyright | All Rights Reserved By MD Shahin | Design and Developed by Md Shahin</p>
        </div>
    </div>
  );
};

export default Footer;
