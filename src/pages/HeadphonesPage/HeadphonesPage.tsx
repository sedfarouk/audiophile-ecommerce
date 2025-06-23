import { CategoryHeader } from '../../components/category/CategoryHeader/CategoryHeader';
import { ProductList } from '../../components/category/ProductList/ProductList';
import { CategorySection } from '../../components/home/CategorySection/CategorySection';
import { AboutSection } from '../../components/home/AboutSection/AboutSection';
import { getProductsByCategory } from '../../repository/data';

export const HeadphonesPage = () => {
  const headphones = getProductsByCategory('headphones');

  return (
    <>
      <CategoryHeader categoryName="Headphones" />
      <ProductList products={headphones} />
      <div className="py-16"></div>
      <CategorySection />
      <AboutSection />
    </>
  );
};
