export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export type Category = 'headphones' | 'speakers' | 'earphones';

export type SortOption = 'price-low' | 'price-high' | 'name' | 'newest';

export interface ValidationError {
  field: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
