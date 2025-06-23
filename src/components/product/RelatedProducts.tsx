import { Link } from 'react-router-dom';
import { Container, Heading, Button } from '../styles';
import type { Product } from '../../types';

interface RelatedProductsProps {
  products: Array<Product['others'][0]>;
}

export const RelatedProducts = ({ products }: RelatedProductsProps) => {
  // Generate a placeholder image if the product image fails to load
  const generatePlaceholder = (productName: string) => {
    const svgContent = `
      <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="200" fill="#f1f1f1"/>
        <rect width="calc(100% - 20px)" height="calc(100% - 20px)" x="10" y="10" fill="none" stroke="#ddd" stroke-width="2"/>
        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#999" text-anchor="middle">${productName}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
  };

  return (
    <section className="py-16">
      <Container>
        <Heading level={3} className="text-center mb-10">
          YOU MAY ALSO LIKE
        </Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image container with fixed height */}
              <div className="bg-audiophile-white-light rounded-lg p-6 mb-6 w-full h-60 flex items-center justify-center">
                <img
                  src={product.image.desktop.replace('./', '/')}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { e.currentTarget.src = generatePlaceholder(product.name); }}
                />
              </div>
              
              {/* Text and button container */}
              <div className="flex flex-col items-center">
                <Heading level={5} className="mb-6">
                  {product.name}
                </Heading>
                
                <Link to={`/product/${product.slug}`}>
                  <Button variant="primary">
                    SEE PRODUCT
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
