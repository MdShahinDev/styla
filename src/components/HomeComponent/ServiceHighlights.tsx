import Image from "next/image";
import Container from "../layout/Container";
import { icons } from "@/data/data";

const ServiceHighlights = () => {
  return (
    <div>
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-y-8 place-items-center">
              <div className="flex items-center gap-4">
                <Image src={icons[0]} alt="Truck" className="w-12 md:w-18 h-auto"/>
                <div>
                  <h3 className="text-lg text-black font-medium">Worldwide Shipping</h3>
                  <p className="text-base text-gray-700">For all Orders Over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src={icons[1]} alt="Truck" className="w-12 md:w-18 h-auto"/>
                <div>
                  <h3 className="text-lg text-black font-medium">Money Back Guarantee</h3>
                  <p className="text-base text-gray-700">Guarante With In 30 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src={icons[2]} alt="Truck" className="w-12 md:w-18 h-auto"/>
                <div>
                  <h3 className="text-lg text-black font-medium">Offers And Discounts</h3>
                  <p className="text-base text-gray-700">Back Returns In 7 Days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src={icons[3]} alt="Truck" className="w-12 md:w-18 h-auto"/>
                <div>
                  <h3 className="text-lg text-black font-medium">24/7 Support Services</h3>
                  <p className="text-base text-gray-700">Contact us Anytime</p>
                </div>
              </div>
            </div>
        </Container>
    </div>
  );
};

export default ServiceHighlights;