import { useState } from 'react';
import type { ResponsiveImage as ResponsiveImageType } from '../../../types';

export interface ResponsiveImageProps {
  image: ResponsiveImageType;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const ResponsiveImage = ({
  image,
  alt,
  className = '',
  priority = false
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Generate a placeholder image based on alt text
  const generatePlaceholder = () => {
    // Extract product name from alt text
    const productName = alt.split(' ')[0].length > 2 ? alt : 'Product';
    
    // Create SVG content
    const svgContent = `
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f1f1f1"/>
        <rect width="calc(100% - 20px)" height="calc(100% - 20px)" x="10" y="10" fill="none" stroke="#ddd" stroke-width="2"/>
        <text x="50%" y="50%" font-family="Arial" font-size="20" fill="#999" text-anchor="middle" dominant-baseline="middle">${productName}</text>
      </svg>
    `;
    
    // Return Data URI
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
  };

  // Fix paths to be absolute
  const fixImagePaths = (imagePaths: ResponsiveImageType): ResponsiveImageType => {
    return {
      mobile: imagePaths.mobile.replace('./', '/'),
      tablet: imagePaths.tablet.replace('./', '/'),
      desktop: imagePaths.desktop.replace('./', '/'),
    };
  };
  
  // Ensure all paths are absolute
  const fixedImage = fixImagePaths(image);

  // If image failed to load, show placeholder
  if (hasError) {
    return (
      <div className={className} style={{ aspectRatio: '1 / 1' }}>
        <img 
          src={generatePlaceholder()}
          alt={`${alt} (placeholder)`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      
      <picture>
        <source media="(min-width: 1024px)" srcSet={fixedImage.desktop} />
        <source media="(min-width: 768px)" srcSet={fixedImage.tablet} />
        <img
          src={fixedImage.mobile}
          alt={alt}
          className={`w-full h-auto ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </div>
  );
};
