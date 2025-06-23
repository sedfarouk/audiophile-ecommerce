import { CartItem } from './cart.types';

// Billing details form interface
export interface BillingDetails {
  name: string;
  email: string;
  phone: string;
}

// Shipping information interface
export interface ShippingInfo {
  address: string;
  zipCode: string;
  city: string;
  country: string;
}

// Payment details interface
export interface PaymentDetails {
  paymentMethod: 'e-money' | 'cash';
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

// Complete checkout form interface
export interface CheckoutForm extends BillingDetails, ShippingInfo, PaymentDetails {}

// Order interface for submitting orders
export interface Order {
  items: CartItem[];
  billingDetails: BillingDetails;
  shippingInfo: ShippingInfo;
  paymentDetails: PaymentDetails;
  summary: {
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
}

// Form field error interface
export interface FormFieldError {
  field?: string;
  message: string;
  type?: string; // Add this property to fix the error
}

// Form errors interface
export interface FormErrors {
  [key: string]: string;
}

// Validation error types
export type ValidationErrorType = 
  | 'required'
  | 'pattern'
  | 'minLength'
  | 'maxLength'
  | 'format';

// Form field validation interface
export interface FieldValidation {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
}
