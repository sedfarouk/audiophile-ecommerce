import { useState } from 'react';

export interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export const NumberInput = ({
  value,
  onChange,
  min = 1,
  max = 99,
  step = 1,
  className = ''
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  const handleIncrement = () => {
    if (inputValue < max) {
      const newValue = inputValue + step;
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (inputValue > min) {
      const newValue = inputValue - step;
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className={`flex items-center bg-audiophile-white h-12 ${className}`}>
      <button 
        type="button"
        className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-audiophile-orange transition-colors"
        onClick={handleDecrement}
        disabled={inputValue <= min}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-10 h-full border-none text-center font-bold bg-transparent focus:outline-none"
        aria-label="Quantity"
      />
      <button 
        type="button"
        className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-audiophile-orange transition-colors"
        onClick={handleIncrement}
        disabled={inputValue >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
