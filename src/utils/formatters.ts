/**
 * Formats a price number to a currency string
 * @param price - The price to format
 * @param currency - The currency symbol (default: '$')
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency = '$'): string => {
  return `${currency}${price.toLocaleString()}`;
};

/**
 * Formats a number with leading zeros
 * @param num - The number to format
 * @param length - The desired length of the output string
 * @returns Formatted string with leading zeros
 */
export const padWithZeros = (num: number, length = 2): string => {
  return String(num).padStart(length, '0');
};

/**
 * Truncates text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength = 50): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
