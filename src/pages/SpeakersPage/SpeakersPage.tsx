import { CategoryHeader } from '../../components/category/CategoryHeader/CategoryHeader';
import { ProductList } from '../../components/category/ProductList/ProductList';
import { CategorySection } from '../../components/home/CategorySection/CategorySection';
import { AboutSection } from '../../components/home/AboutSection/AboutSection';
import { getProductsByCategory } from '../../repository/data';

export const SpeakersPage = () => {
  const speakers = getProductsByCategory('speakers');

  return (
    <>
      <CategoryHeader categoryName="Speakers" />
      <ProductList products={speakers} />
      <div className="py-16"></div>
      <CategorySection />
      <AboutSection />
    </>
  );
};
