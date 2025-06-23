import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'extra';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold uppercase tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-audiophile-orange text-audiophile-white-pure hover:bg-audiophile-orange-light border-none',
    secondary: 'bg-transparent text-audiophile-black border-2 border-audiophile-black hover:bg-audiophile-black hover:text-audiophile-white-pure',
    tertiary: 'bg-transparent text-audiophile-black border-none hover:text-audiophile-orange',
    extra: 'bg-black text-white border-none hover:bg-[#4C4C4C] hover:text-audiophile-white-pure'
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-subtitle',
    lg: 'px-10 py-5 text-subtitle'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
    ${className}
  `.trim();

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : children}
    </button>
  );
};
