"use client"
import Link from "next/link";
import Container from "../layout/Container";
import { CategoryPageHeaderProps } from "@/types/AllTypes";

const CategoryPageHeader = ({category}:CategoryPageHeaderProps) => {
  return (
    <div className="bg-[#F5F5F5]">
        <Container>
            <div className="text-center py-8">
                <h2 className="text-xl font-medium">{category} Category</h2>
                <div>
                    <ul className="list-disc list-inside flex items-center justify-center gap-4 text-base mt-2">
                        <li><Link href={'/'}> Home</Link></li>
                        <li>{category}</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default CategoryPageHeader;