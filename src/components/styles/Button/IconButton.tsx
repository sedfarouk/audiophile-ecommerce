import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost';
  'aria-label': string;
}

export const IconButton = ({
  icon,
  size = 'md',
  variant = 'default',
  className = '',
  ...props
}: IconButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center transition-colors duration-200 border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const variantClasses = {
    default: 'bg-audiophile-white hover:bg-audiophile-white-light text-audiophile-black',
    ghost: 'bg-transparent hover:bg-audiophile-white-light text-audiophile-black'
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return (
    <button className={classes} {...props}>
      {icon}
    </button>
  );
};
