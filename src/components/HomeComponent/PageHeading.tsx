
import { PageHeaderProps } from "@/types/AllTypes";
import Container from "../layout/Container";
import Link from "next/link";

const PageHeading = ({title, subtitle}: PageHeaderProps) => {
  return (
    <div className="py-14  bg-[#F5F5F5]">
        <Container>
            <div className="">
                <h2 className="text-2xl md:text-4xl font-medium text-center">{title}</h2>
                <div>
                    <ul className="list-disc list-inside flex items-center justify-center gap-4 text-base mt-2">
                        <li><Link href={'/'}> Home</Link></li>
                        <li>{subtitle}</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default PageHeading;