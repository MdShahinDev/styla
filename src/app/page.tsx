import BestSellingProduct from '@/components/HomeComponent/BestSellingProduct';
import Categories from '@/components/HomeComponent/Categories';
import FeatureSection from '@/components/HomeComponent/FeatureSection';
import SectionHeading from '@/components/HomeComponent/SectionHeading';
import HeaderSlider from '@/components/SwiperComponent/HeaderSlider';

export default function Home() {
  return (
    <section className='pb-20'>
      <HeaderSlider />
      <SectionHeading title="Shop By Category" subtitle="Browse your favourite category" />
      <Categories/>
      <FeatureSection/>
      <SectionHeading title='Our Best Selling Product' subtitle='Explore Our Best Selling product'/>
      <BestSellingProduct/>
    </section>
  );
}
