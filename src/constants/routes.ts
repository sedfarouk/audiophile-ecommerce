export const ROUTES = {
  HOME: '/',
  CATEGORY: '/category/:category',
  PRODUCT: '/product/:slug',
  CHECKOUT: '/checkout',
  // Dynamic route builders
  buildCategoryRoute: (category: string) => `/category/${category}`,
  buildProductRoute: (slug: string) => `/product/${slug}`,
} as const;

export const CATEGORIES = {
  HEADPHONES: 'headphones',
  SPEAKERS: 'speakers',
  EARPHONES: 'earphones',
} as const;
