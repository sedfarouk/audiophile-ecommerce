export const VALIDATION_PATTERNS = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE: /^[+]?[1-9][\d]{0,15}$/,
  ZIP_CODE: /^\d{5}(-\d{4})?$/,
  E_MONEY_NUMBER: /^\d{9}$/,
  E_MONEY_PIN: /^\d{4}$/,
  NAME: /^[a-zA-Z\s'-]{2,50}$/,
} as const;

export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  INVALID_ZIP: 'Please enter a valid ZIP code',
  INVALID_E_MONEY_NUMBER: 'Please enter a valid 9-digit number',
  INVALID_E_MONEY_PIN: 'Please enter a valid 4-digit PIN code',
  INVALID_NAME: 'Please enter a valid name (2-50 characters)',
  MIN_LENGTH: (min: number) => `Minimum of ${min} characters required`,
  MAX_LENGTH: (max: number) => `Maximum of ${max} characters allowed`,
} as const;
