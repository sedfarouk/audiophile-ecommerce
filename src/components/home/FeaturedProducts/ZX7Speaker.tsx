import { Link } from 'react-router-dom';
import { Button, Heading } from '../../styles';
import { getProductBySlug } from '../../../repository/data';

export const ZX7Speaker = () => {
  const product = getProductBySlug('zx7-speaker');
  
  if (!product) return null;

  const backgroundImage = {
    mobile: '/assets/home/mobile/image-speaker-zx7.jpg',
    tablet: '/assets/home/tablet/image-speaker-zx7.jpg',
    desktop: '/assets/home/desktop/image-speaker-zx7.jpg'
  };

  return (
    <div 
      className="rounded-lg p-8 lg:p-16 h-80 flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage.desktop})`
      }}
    >
      <div>
        <Heading level={4} className="mb-8">
          ZX7 Speaker
        </Heading>
        
        <Link to={`/product/${product.slug}`}>
          <Button variant="secondary">
            See Product
          </Button>
        </Link>
      </div>
    </div>
  );
};
