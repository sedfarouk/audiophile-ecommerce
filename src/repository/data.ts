import { Product, Category, ProductFilters } from '@/types';
import productsData from '../data/data.json';

// Fix relative image paths
const fixImagePaths = (product: Product): Product => {
  const clonedProduct = { ...product };
  
  // Fix main image paths
  if (clonedProduct.image) {
    clonedProduct.image = {
      mobile: clonedProduct.image.mobile.replace('./', '/'),
      tablet: clonedProduct.image.tablet.replace('./', '/'),
      desktop: clonedProduct.image.desktop.replace('./', '/'),
    };
  }

  // Fix category image paths
  if (clonedProduct.categoryImage) {
    clonedProduct.categoryImage = {
      mobile: clonedProduct.categoryImage.mobile.replace('./', '/'),
      tablet: clonedProduct.categoryImage.tablet.replace('./', '/'),
      desktop: clonedProduct.categoryImage.desktop.replace('./', '/'),
    };
  }

  // Fix gallery image paths
  if (clonedProduct.gallery) {
    clonedProduct.gallery = {
      first: {
        mobile: clonedProduct.gallery.first.mobile.replace('./', '/'),
        tablet: clonedProduct.gallery.first.tablet.replace('./', '/'),
        desktop: clonedProduct.gallery.first.desktop.replace('./', '/'),
      },
      second: {
        mobile: clonedProduct.gallery.second.mobile.replace('./', '/'),
        tablet: clonedProduct.gallery.second.tablet.replace('./', '/'),
        desktop: clonedProduct.gallery.second.desktop.replace('./', '/'),
      },
      third: {
        mobile: clonedProduct.gallery.third.mobile.replace('./', '/'),
        tablet: clonedProduct.gallery.third.tablet.replace('./', '/'),
        desktop: clonedProduct.gallery.third.desktop.replace('./', '/'),
      },
    };
  }

  // Fix related product image paths
  if (clonedProduct.others) {
    clonedProduct.others = clonedProduct.others.map(other => ({
      ...other,
      image: {
        mobile: other.image.mobile.replace('./', '/'),
        tablet: other.image.tablet.replace('./', '/'),
        desktop: other.image.desktop.replace('./', '/'),
      }
    }));
  }

  return clonedProduct;
};

export const getAllProducts = (): Product[] => {
  return (productsData as Product[]).map(fixImagePaths);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  const product = getAllProducts().find(product => product.slug === slug);
  return product;
};

export const getProductById = (id: number): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getProductsByCategory = (category: Category): Product[] => {
  // First sort by "new" status, then by price (highest first)
  return getAllProducts()
    .filter(product => product.category === category)
    .sort((a, b) => {
      // New products first
      if (a.new && !b.new) return -1;
      if (!a.new && b.new) return 1;
      // Then sort by price (highest first)
      return b.price - a.price;
    });
};

export const getNewProducts = (): Product[] => {
  return getAllProducts().filter(product => product.new);
};

export const getFeaturedProducts = (limit: number = 3): Product[] => {
  return getAllProducts()
    .sort((a, b) => b.price - a.price)
    .slice(0, limit);
};

export const getRelatedProducts = (currentProduct: Product, limit: number = 3): Product[] => {
  return getAllProducts()
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllProducts().filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProducts = (filters: ProductFilters): Product[] => {
  let filteredProducts = getAllProducts();

  if (filters.category) {
    filteredProducts = filteredProducts.filter(product => product.category === filters.category);
  }

  if (filters.isNew !== undefined) {
    filteredProducts = filteredProducts.filter(product => product.new === filters.isNew);
  }

  if (filters.priceRange) {
    filteredProducts = filteredProducts.filter(product => 
      product.price >= filters.priceRange!.min && 
      product.price <= filters.priceRange!.max
    );
  }

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filteredProducts.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
    }
  }

  return filteredProducts;
};

export const getCategoriesWithCounts = () => {
  const products = getAllProducts();
  const categories = ['headphones', 'speakers', 'earphones'] as Category[];
  
  return categories.map(category => ({
    category,
    count: products.filter(product => product.category === category).length,
    products: products.filter(product => product.category === category),
  }));
};
