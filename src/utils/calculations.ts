import { CartItem } from '@/types';
import { APP_CONFIG } from '@/constants';

export const calculateItemTotal = (item: CartItem): number => {
  return item.product.price * item.quantity;
};

export const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + calculateItemTotal(item), 0);
};

export const calculateVAT = (subtotal: number): number => {
  return Math.round(subtotal * APP_CONFIG.VAT_RATE);
};

export const calculateGrandTotal = (subtotal: number, shipping: number = APP_CONFIG.SHIPPING_COST): number => {
  const vat = calculateVAT(subtotal);
  return subtotal + shipping + vat;
};

export const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

export const getCartSummary = (items: CartItem[]) => {
  const subtotal = calculateSubtotal(items);
  const shipping = APP_CONFIG.SHIPPING_COST;
  const vat = calculateVAT(subtotal);
  const grandTotal = calculateGrandTotal(subtotal, shipping);
  const totalItems = calculateTotalItems(items);

  return {
    subtotal,
    shipping,
    vat,
    grandTotal,
    totalItems,
  };
};
