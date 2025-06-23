import { CategoryHeader } from '../../components/category/CategoryHeader/CategoryHeader';
import { ProductList } from '../../components/category/ProductList/ProductList';
import { CategorySection } from '../../components/home/CategorySection/CategorySection';
import { AboutSection } from '../../components/home/AboutSection/AboutSection';
import { getProductsByCategory } from '../../repository/data';

export const EarphonesPage = () => {
  const earphones = getProductsByCategory('earphones');

  return (
    <>
      <CategoryHeader categoryName="Earphones" />
      <ProductList products={earphones} />
      <div className="py-16"></div>
      <CategorySection />
      <AboutSection />
    </>
  );
};
