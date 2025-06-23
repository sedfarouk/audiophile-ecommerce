import { useField } from 'formik';

interface RadioFieldProps {
  label: string;
  name: string;
  value: string;
  className?: string;
}

export const RadioField = ({
  label,
  name,
  value,
  className = '',
  ...props
}: RadioFieldProps) => {
  const [field, meta] = useField({ name, value, type: 'radio' });
  const { checked } = field;
  const hasError = meta.touched && meta.error;

  return (
    <div className={`relative ${className}`}>
      <label
        className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer transition-colors ${
          checked
            ? 'border-audiophile-orange bg-white'
            : 'border-gray-300 hover:border-audiophile-orange'
        } ${hasError ? 'border-[#CD2C2C]' : ''}`}
      >
        <input
          type="radio"
          {...field}
          {...props}
          className="form-radio h-4 w-4 text-audiophile-orange border-gray-300 focus:ring-audiophile-orange"
          checked={checked}
          value={value}
        />
        <span className={`ml-3 font-bold text-sm ${hasError ? 'text-[#CD2C2C]' : ''}`}>
          {label}
        </span>
      </label>
    </div>
  );
};
