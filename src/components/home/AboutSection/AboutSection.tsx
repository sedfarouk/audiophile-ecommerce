import { Container, Section, Heading, Text } from '../../styles';

export const AboutSection = () => {
  const aboutImage = {
    mobile: import.meta.env.BASE_URL + '/assets/shared/mobile/image-best-gear.jpg',
    tablet: import.meta.env.BASE_URL + '/assets/shared/tablet/image-best-gear.jpg',
    desktop: import.meta.env.BASE_URL + '/assets/shared/desktop/image-best-gear.jpg'
  };

  return (
    <Section spacing="xl" background="light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <Heading level={2} className="mb-8">
              <div>BRINGING YOU THE</div>
              <div>
                <span className="text-audiophile-orange">BEST</span> AUDIO GEAR
              </div>
            </Heading>
            
            <Text color="gray" className="leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </Text>
          </div>

          <div className="order-1 lg:order-2 bg-audiophile-white-light rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-h-10">
              <img
                src={aboutImage.desktop}
                alt="Listening to music"
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
                    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                      <rect width="600" height="400" fill="#F1F1F1" />
                      <text x="300" y="200" font-family="Arial" font-size="20" fill="#777777" text-anchor="middle">About Image</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
