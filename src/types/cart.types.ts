import { Product } from './product.types';

/**
 * Represents an item in the shopping cart
 */
export interface CartItem {
  product: Product;
  quantity: number;
}

/**
 * Represents the complete shopping cart
 */
export interface Cart {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

/**
 * Actions that can be performed on the shopping cart
 */
export type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART'; payload?: boolean };
