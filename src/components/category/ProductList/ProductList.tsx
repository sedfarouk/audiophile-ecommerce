import { Container } from '../../styles';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../../types';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <section className="bg-audiophile-white-light">
      <Container>
        <div className="space-y-0">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              imagePosition={index % 2 === 0 ? 'left' : 'right'}
              isFirst={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
