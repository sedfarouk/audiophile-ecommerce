import { formatPrice } from '../../../utils/formatters';

export interface PriceProps {
  amount: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Price = ({
  amount,
  currency = '$',
  size = 'md',
  className = ''
}: PriceProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-h6'
  };

  const formattedPrice = formatPrice(amount, currency);

  return (
    <span className={`font-bold ${sizeClasses[size]} ${className}`}>
      {formattedPrice}
    </span>
  );
};

