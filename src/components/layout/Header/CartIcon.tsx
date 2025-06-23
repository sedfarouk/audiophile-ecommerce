import { CartIcon as CartSvg } from '../../icons/CartIcon';

interface CartIconProps {
  itemCount?: number;
  onClick?: () => void;
}

export const CartIcon = ({ itemCount = 0, onClick }: CartIconProps) => {
  return (
    <button 
      onClick={onClick}
      className="relative p-2 text-white hover:text-audiophile-orange transition-colors duration-200"
      aria-label={`Open cart ${itemCount > 0 ? `with ${itemCount} items` : ''}`}
    >
      <CartSvg className="w-6 h-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-audiophile-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </button>
  );
};
