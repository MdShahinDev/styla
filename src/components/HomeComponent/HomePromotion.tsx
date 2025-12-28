import Image from 'next/image';
import Container from '../layout/Container';
import { banners } from '@/data/data';
import Link from 'next/link';

const HomePromotion = () => {
  return (
    <div>
      <Container>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* IMAGE SECTION */}
            <div className="flex flex-col lg:flex-row gap-6 xl:w-2/3 items-center overflow-hidden">
              <Image src={banners[1]} alt="Model Banner" className="max-w-full h-auto" />
              <Image src={banners[2]} alt="Model Banner" className=" h-auto object-fit" />
            </div>

            {/* TEXT SECTION */}
            <div className="md:w-1/2 ">
              <h2 className="text-3xl font-semibold mb-4">
                Inspiring Bangladeshi, Both Men And Women To Make Fashion & Lifestyle
              </h2>
              <p className="font-medium mb-2">They bring an extraordinary amount of it to the table</p>
              <p className="text-gray-600 mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting lorem Ipsum has been the
                industry&apos;s standard dummy text ever the typesetting remaining essentially unchanged.
              </p>
              <Link href={"#"} className='bg-black text-white px-6 py-2 hover:bg-black/90 transition-all duration-500'>Read More</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePromotion;
