// Core types - selective barrel export for related types
export type { 
  Product, 
  IncludedItem, 
  ProductGallery, 
  RelatedProduct, 
  ProductFilters 
} from './product.types';

export type { 
  CartItem, 
  Cart, 
  CartAction 
} from './cart.types';

export type { 
  ResponsiveImage, 
  Category, 
  SortOption, 
  ValidationError, 
  ApiResponse 
} from './common.types';

export type { 
  BillingDetails, 
  ShippingInfo, 
  PaymentDetails, 
  CheckoutForm, 
  Order, 
  FormFieldError, 
  FormErrors 
} from './checkout.types';
