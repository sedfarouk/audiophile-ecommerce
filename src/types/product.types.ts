import { ResponsiveImage, Category } from './common.types';

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ResponsiveImage;
  second: ResponsiveImage;
  third: ResponsiveImage;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  image: ResponsiveImage;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImage;
  category: Category;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: ProductGallery;
  others: RelatedProduct[];
}

export interface ProductFilters {
  category?: Category;
  priceRange?: {
    min: number;
    max: number;
  };
  isNew?: boolean;
  sortBy?: 'price-low' | 'price-high' | 'name' | 'newest';
}
