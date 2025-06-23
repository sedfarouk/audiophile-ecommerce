import { Container } from '../styles';
import type { Product } from '../../types';

interface ProductGalleryProps {
  product: Product;
}

export const ProductGallery = ({ product }: ProductGalleryProps) => {
  // Get the bundled gallery image based on product category
  const getBundledGalleryImage = () => {
    // We need to use the category (headphones, speakers, earphones) for the bundled gallery image
    return import.meta.env.BASE_URL + `/assets/${product.category}-gallery.png`;
  };
  
  // Generate a placeholder SVG if the image fails to load
  const generatePlaceholder = () => {
    const svgContent = `
      <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="400" fill="#f1f1f1"/>
        <rect width="calc(100% - 20px)" height="calc(100% - 20px)" x="10" y="10" fill="none" stroke="#ddd" stroke-width="2"/>
        <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#999" text-anchor="middle">${product.name} Gallery</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
  };

  return (
    <section className="py-12">
      <Container>
        <div className="w-full rounded-lg overflow-hidden">
          <img 
            src={getBundledGalleryImage()}
            alt={`${product.name} gallery`}
            className="w-full h-auto"
            onError={(e) => {
              console.log(`Failed to load gallery image: ${getBundledGalleryImage()}`);
              e.currentTarget.src = generatePlaceholder();
            }}
          />
        </div>
      </Container>
    </section>
  );
};
