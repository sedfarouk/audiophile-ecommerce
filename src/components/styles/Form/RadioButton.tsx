import { InputHTMLAttributes } from 'react';

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const RadioButton = ({
  label,
  error,
  className = '',
  id,
  ...props
}: RadioButtonProps) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  
  const containerClasses = `
    flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors duration-200
    ${error ? 'border-red-500' : 'border-gray-300 hover:border-audiophile-orange'}
    ${props.checked ? 'border-audiophile-orange' : ''}
    ${className}
  `.trim();

  return (
    <div>
      <label htmlFor={radioId} className={containerClasses}>
        <input
          type="radio"
          id={radioId}
          className="w-5 h-5 text-audiophile-orange focus:ring-audiophile-orange border-gray-300"
          {...props}
        />
        <span className="text-body font-bold text-audiophile-black">{label}</span>
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
