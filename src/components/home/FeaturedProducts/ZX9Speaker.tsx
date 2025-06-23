import { Link } from 'react-router-dom';
import { Container, Button, Heading, Text } from '../../styles';
import { ResponsiveImage } from '../../styles';
import { getProductBySlug } from '../../../repository/data';

export const ZX9Speaker = () => {
  const product = getProductBySlug('zx9-speaker');
  
  if (!product) return null;

  const speakerImage = {
    mobile: import.meta.env.BASE_URL + '/assets/home/mobile/image-speaker-zx9.png',
    tablet: import.meta.env.BASE_URL + '/assets/home/tablet/image-speaker-zx9.png',
    desktop: import.meta.env.BASE_URL + '/assets/home/desktop/image-speaker-zx9.png'
  };

  return (
    <div className="bg-audiophile-orange rounded-lg p-8 lg:p-16 text-white overflow-hidden relative">
      {/* Background pattern circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-[800px] h-[800px] rounded-full border border-white absolute -top-40 -right-40"></div>
        <div className="w-[600px] h-[600px] rounded-full border border-white absolute -top-20 -right-20"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-white absolute top-0 right-0"></div>
      </div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
          {/* Speaker Image */}
          <div className="text-center lg:text-left">
            <ResponsiveImage
              image={speakerImage}
              alt="ZX9 Speaker"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <Heading level={1} color="white" className="mb-6">
              ZX9 Speaker
            </Heading>
            
            <Text color="white" className="opacity-90 mb-8 max-w-md mx-auto lg:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </Text>
            
            <Link to={`/product/${product.slug}`}>
              <Button variant="extra">
                See Product
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
