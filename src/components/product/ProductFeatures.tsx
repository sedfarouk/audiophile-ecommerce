import { Container, Heading, Text } from '../styles';
import type { Product } from '../../types';

interface ProductFeaturesProps {
  product: Product;
}

export const ProductFeatures = ({ product }: ProductFeaturesProps) => {
  // Split the features text into paragraphs
  const featuresParagraphs = product.features.split('\n\n');
  
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Features Content - Takes up 2/3 of the grid on desktop */}
          <div className="lg:col-span-2">
            <Heading level={3} className="mb-6">
              FEATURES
            </Heading>
            
            <div className="space-y-6">
              {featuresParagraphs.map((paragraph, index) => (
                <Text key={index} color="gray">
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>
          
          {/* In The Box - Takes up 1/3 of the grid on desktop */}
          <div>
            <Heading level={3} className="mb-6">
              IN THE BOX
            </Heading>
            
            <ul className="space-y-2">
              {product.includes.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-audiophile-orange font-bold mr-3">
                    {item.quantity}x
                  </span>
                  <Text color="gray">{item.item}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
