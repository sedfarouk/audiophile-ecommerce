import { VALIDATION_PATTERNS, VALIDATION_MESSAGES, FORM_VALIDATION } from '@/constants';
import { FormFieldError } from '@/types';

export const validateRequired = (value: string): FormFieldError | null => {
  if (!value || value.trim().length === 0) {
    return { message: VALIDATION_MESSAGES.REQUIRED, type: 'required' };
  }
  return null;
};

export const validateEmail = (email: string): FormFieldError | null => {
  const requiredError = validateRequired(email);
  if (requiredError) return requiredError;
  
  if (!VALIDATION_PATTERNS.EMAIL.test(email)) {
    return { message: VALIDATION_MESSAGES.INVALID_EMAIL, type: 'pattern' };
  }
  return null;
};

export const validatePhone = (phone: string): FormFieldError | null => {
  const requiredError = validateRequired(phone);
  if (requiredError) return requiredError;
  
  if (!VALIDATION_PATTERNS.PHONE.test(phone)) {
    return { message: VALIDATION_MESSAGES.INVALID_PHONE, type: 'pattern' };
  }
  return null;
};

export const validateName = (name: string): FormFieldError | null => {
  const requiredError = validateRequired(name);
  if (requiredError) return requiredError;
  
  if (name.length < FORM_VALIDATION.MIN_NAME_LENGTH) {
    return { 
      message: VALIDATION_MESSAGES.MIN_LENGTH(FORM_VALIDATION.MIN_NAME_LENGTH), 
      type: 'minLength' 
    };
  }
  
  if (name.length > FORM_VALIDATION.MAX_NAME_LENGTH) {
    return { 
      message: VALIDATION_MESSAGES.MAX_LENGTH(FORM_VALIDATION.MAX_NAME_LENGTH), 
      type: 'maxLength' 
    };
  }
  
  if (!VALIDATION_PATTERNS.NAME.test(name)) {
    return { message: VALIDATION_MESSAGES.INVALID_NAME, type: 'pattern' };
  }
  
  return null;
};

export const validateZipCode = (zipCode: string): FormFieldError | null => {
  const requiredError = validateRequired(zipCode);
  if (requiredError) return requiredError;
  
  if (!VALIDATION_PATTERNS.ZIP_CODE.test(zipCode)) {
    return { message: VALIDATION_MESSAGES.INVALID_ZIP, type: 'pattern' };
  }
  return null;
};

export const validateEMoneyNumber = (number: string): FormFieldError | null => {
  const requiredError = validateRequired(number);
  if (requiredError) return requiredError;
  
  if (!VALIDATION_PATTERNS.E_MONEY_NUMBER.test(number)) {
    return { message: VALIDATION_MESSAGES.INVALID_E_MONEY_NUMBER, type: 'pattern' };
  }
  return null;
};

export const validateEMoneyPin = (pin: string): FormFieldError | null => {
  const requiredError = validateRequired(pin);
  if (requiredError) return requiredError;
  
  if (!VALIDATION_PATTERNS.E_MONEY_PIN.test(pin)) {
    return { message: VALIDATION_MESSAGES.INVALID_E_MONEY_PIN, type: 'pattern' };
  }
  return null;
};
