import Image from "next/image";
import Container from "../layout/Container";
import mailbanner from '../../data/banner/newsletter.jpg'
const Mailbox = () => {
  return (
    <div>
    <div className="relative h-70 bg-red-700
        sm:h-87 
        md:h-100 
        lg:h-70">
        <Image
          src={mailbanner}
          alt="Banner"
          fill
        priority
        className="object-cover"
        />
        <Container>
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4 px-4 md:pd-0">
            <h2 className="text-xl font-bold md:text-3xl">
             Sign Up & Subscribe To Our Newsletter
            </h2>
            <p className="text-base md:text-lg">Subscribe to our latest newsletter to get news about special discounts and upcoming sales</p>
            <div>
                <form className="flex flex-col lg:flex-row gap-4">
                    <input type="email" placeholder="enter your email" className="w-full mr-4 border border-gray-600 py-2 px-4"/>
                    <button className="bg-black text-white px-4 space-y-2 py-2">SUBSCRIBE</button>
                </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Mailbox;