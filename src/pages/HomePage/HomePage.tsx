import { HeroSection } from '../../components/home/HeroSection/HeroSection';
import { CategorySection } from '../../components/home/CategorySection/CategorySection';
import { FeaturedProducts } from '../../components/home/FeaturedProducts/FeaturedProducts';
import { AboutSection } from '../../components/home/AboutSection/AboutSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
    </>
  );
};
