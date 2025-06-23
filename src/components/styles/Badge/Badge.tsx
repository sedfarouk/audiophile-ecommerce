import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'new' | 'sale' | 'default';
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) => {
  const baseClasses = 'inline-block px-3 py-1 text-overline uppercase font-normal'; // Removed tracking-wide
  
  const variantClasses = {
    new: 'text-white',
    sale: 'bg-red-500 text-white rounded',
    default: 'text-audiophile-black'
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return <span className={classes}>{children}</span>;
};
