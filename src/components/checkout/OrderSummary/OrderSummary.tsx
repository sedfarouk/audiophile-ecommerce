import { Button } from '../../styles';
import { CartItem } from '../../../contexts/CartContext';
import { formatPrice } from '../../../utils/formatters';

interface OrderSummaryProps {
  cartItems: CartItem[];
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  onSubmit?: () => void;
  isSubmitting?: boolean;
  canSubmit?: boolean;
}

export const OrderSummary = ({
  cartItems,
  subtotal,
  shipping,
  vat,
  grandTotal,
  onSubmit,
  isSubmitting = false,
  canSubmit = true
}: OrderSummaryProps) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg sticky top-32">
      <h2 className="text-h6 uppercase mb-6">Summary</h2>
      
      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {cartItems.map(item => (
          <div key={item.product.id} className="flex items-center">
            {/* Product Image */}
            <div className="w-16 h-16 rounded-lg bg-audiophile-white-light overflow-hidden mr-4">
              <img 
                src={item.product.image.desktop.replace('./', '/')} 
                alt={item.product.name} 
                className="w-full h-full object-contain"
                onError={(e) => { 
                  e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="#F1F1F1"/>
                      <text x="50%" y="50%" font-family="Arial" font-size="10" fill="#999" text-anchor="middle">${item.product.name}</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            
            {/* Product Info */}
            <div className="flex-1">
              <p className="font-bold text-sm">{item.product.name.split(' ')[0]}</p>
              <p className="text-gray-500 text-sm">{formatPrice(item.product.price)}</p>
            </div>
            
            {/* Quantity */}
            <div className="font-bold text-gray-500 text-sm">
              x{item.quantity}
            </div>
          </div>
        ))}
      </div>
      
      {/* Order Details */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <p className="text-gray-500">TOTAL</p>
          <p className="font-bold">{formatPrice(subtotal)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-500">SHIPPING</p>
          <p className="font-bold">{formatPrice(shipping)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-500">VAT (INCLUDED)</p>
          <p className="font-bold">{formatPrice(vat)}</p>
        </div>
      </div>
      
      <div className="flex justify-between mb-8">
        <p className="text-gray-500">GRAND TOTAL</p>
        <p className="font-bold text-audiophile-orange">{formatPrice(grandTotal)}</p>
      </div>
      
      <Button 
        variant="primary" 
        fullWidth 
        onClick={handleSubmit} 
        disabled={isSubmitting || !canSubmit}
      >
        {isSubmitting ? "PROCESSING..." : "CONTINUE & PAY"}
      </Button>
    </div>
  );
};
