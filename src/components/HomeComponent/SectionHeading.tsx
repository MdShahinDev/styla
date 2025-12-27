
import { SectionHeadingProps } from "@/types/AllTypes";
import Container from "../layout/Container";

const SectionHeading = ({title, subtitle}: SectionHeadingProps) => {
  return (
    <div className="py-14 ">
        <Container>
            <div>
                <h2 className="text-2xl md:text-4xl font-medium text-center">{title}</h2>
                <p className="text-center text-base text-gray-700 md:text-lg mt-1 text-gray-5 font-medium">{subtitle}</p>
            </div>
        </Container>
    </div>
  );
};

export default SectionHeading;