import Categories from '@/components/HomeComponent/Categories';
import SectionHeading from '@/components/HomeComponent/SectionHeading';
import HeaderSlider from '@/components/SwiperComponent/HeaderSlider';

export default function Home() {
  return (
    <section>
      <HeaderSlider />
      <SectionHeading title="Shop By Category" subtitle="Browse your favourite category" />
      <Categories/>
    </section>
  );
}
