import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  fullWidth?: boolean;
}

export const Input = ({
  error,
  label,
  fullWidth = true,
  className = '',
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'px-6 py-4 border rounded-lg text-body font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors duration-200';
  
  const stateClasses = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:border-audiophile-orange focus:ring-audiophile-orange';
  
  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `
    ${baseClasses}
    ${stateClasses}
    ${widthClass}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-bold text-audiophile-black mb-2">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={classes}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
