import BestSellingProduct from '@/components/HomeComponent/BestSellingProduct';
import Categories from '@/components/HomeComponent/Categories';
import FeatureSection from '@/components/HomeComponent/FeatureSection';
import HomePromotion from '@/components/HomeComponent/HomePromotion';
import HotSellingProduct from '@/components/HomeComponent/HotSellingProduct';
import SectionHeading from '@/components/HomeComponent/SectionHeading';
import ServiceHighlights from '@/components/HomeComponent/ServiceHighlights';
import TShirtPromothion from '@/components/HomeComponent/TShirtPromothion';
import HeaderSlider from '@/components/SwiperComponent/HeaderSlider';

export default function Home() {
  return (
    <section className='mb-20'>
      <HeaderSlider />
      <SectionHeading title="Shop By Category" subtitle="Browse your favourite category" />
      <Categories/>
      <FeatureSection/>
      <SectionHeading title='Our Best Selling Product' subtitle='Explore Our Best Selling product'/>
      <BestSellingProduct/>
      <HomePromotion/>
      <SectionHeading title='Our Hot Selling Product' subtitle='Explore Our Hot Selling product'/>
      <HotSellingProduct/>
      <TShirtPromothion/>
      <ServiceHighlights/>
    </section>
  );
}
