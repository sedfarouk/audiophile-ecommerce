import { useParams, Navigate } from 'react-router-dom';
import { Container } from '../../components/styles';
import { BackButton } from '../../components/product/BackButton';
import { ProductDetail } from '../../components/product/ProductDetail';
import { ProductFeatures } from '../../components/product/ProductFeatures';
import { ProductGallery } from '../../components/product/ProductGallery';
import { RelatedProducts } from '../../components/product/RelatedProducts';
import { CategorySection } from '../../components/home/CategorySection/CategorySection';
import { AboutSection } from '../../components/home/AboutSection/AboutSection';
import { getProductBySlug } from '../../repository/data';

export const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  
  // If product doesn't exist, redirect to home
  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className="py-8">
        <Container>
          <BackButton />
        </Container>
      </section>
      
      <ProductDetail product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <RelatedProducts products={product.others} />

      <div className="py-8"></div>
      
      <CategorySection />
      <AboutSection />
    </>
  );
};
