import CategoryPageHeader from '@/components/customui/CategoryPageHeader';
import { category } from '@/data/data.js';
import { UrlProps } from '@/types/AllTypes';
// interface PageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }
const page = async ({ params }: UrlProps) => {
  const { slug } = await params;
  const currentCategory = category.find((item) => item.slug === slug );
  console.log('Category', currentCategory);

  if (!currentCategory) {
    return <div>Category not found</div>;
  }
  return (
    <div>
      <CategoryPageHeader category={currentCategory.name} />
    </div>
  );
};

export default page;
