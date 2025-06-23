export const APP_CONFIG = {
  BRAND_NAME: 'Audiophile',
  SHIPPING_COST: 50,
  VAT_RATE: 0.2, // 20%
  CURRENCY: '$',
  CURRENCY_SYMBOL: '$',
  
  // Local storage keys
  STORAGE_KEYS: {
    CART: 'audiophile_cart',
    USER_PREFERENCES: 'audiophile_preferences',
  },
  
  // Pagination
  PRODUCTS_PER_PAGE: 12,
  
  // Breakpoints (matching Tailwind defaults)
  BREAKPOINTS: {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
  },
} as const;

export const FORM_VALIDATION = {
  MIN_NAME_LENGTH: 3,
  MAX_NAME_LENGTH: 50,
  MIN_PHONE_LENGTH: 10,
  MAX_PHONE_LENGTH: 15,
  ZIP_CODE_LENGTH: 5,
  E_MONEY_NUMBER_LENGTH: 9,
  E_MONEY_PIN_LENGTH: 4,
} as const;
