import { Container, Button, Heading, Text, Badge } from "../../styles";
import { getProductBySlug } from "../../../repository/data";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const heroProduct = getProductBySlug("xx99-mark-two-headphones");

  if (!heroProduct) return null;

  return (
    <section className="relative bg-audiophile-black text-white overflow-hidden">
      {/* Background image that shows on all screen sizes */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={
              import.meta.env.BASE_URL + "/assets/home/desktop/image-hero.jpg"
            }
          />
          <source
            media="(min-width: 768px)"
            srcSet={
              import.meta.env.BASE_URL + "/assets/home/tablet/image-header.jpg"
            }
          />
          <img
            src={
              import.meta.env.BASE_URL + "/assets/home/mobile/image-header.jpg"
            }
            alt="XX99 Mark II Headphones"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <Container>
        <div className="relative z-10 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
          <div className="w-full max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <Badge
              variant="new"
              className="text-white opacity-75 mb-4 md:mb-6 block"
            >
              NEW PRODUCT
            </Badge>

            <Heading level={1} color="white" className="mb-6">
              XX99 Mark II Headphones
            </Heading>

            <Text
              color="white"
              className="opacity-75 mb-8 md:mb-10 max-w-sm mx-auto lg:mx-0"
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>

            <Link to={`/product/${heroProduct.slug}`}>
              <Button variant="primary">See Product</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
