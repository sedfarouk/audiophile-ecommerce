import { Link } from 'react-router-dom';
import { Modal } from '../../styles/Modal/Modal';
import { Container, Button } from '../../styles';
import { useCart } from '../../../contexts/CartContext';
import { formatPrice } from '../../../utils/formatters';

export const CartModal = () => {
  const { state, toggleCart, totalPrice, clearCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  return (
    <Modal 
      isOpen={state.isOpen}
      onClose={() => toggleCart(false)}
      position="top-right"
      className="w-[375px] max-h-[calc(100vh-112px)] overflow-auto mt-10 mr-20"
      overlayClassName="pl-6 pr-16 md:pr-20 lg:pr-36 pt-0"
    >
      <Container className="py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-h6 uppercase">
            Cart ({state.items.length})
          </h2>
          {state.items.length > 0 && (
            <button 
              className="text-gray-500 hover:text-audiophile-orange text-sm underline transition-colors"
              onClick={clearCart}
            >
              Remove all
            </button>
          )}
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => toggleCart(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6 mb-8">
              {state.items.map(item => (
                <div key={item.product.id} className="flex items-center justify-between">
                  {/* Product Image & Info */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-md bg-audiophile-white-light overflow-hidden mr-4">
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
                    
                    <div>
                      <h3 className="font-bold text-sm">
                        {item.product.name.split(' ')[0]}
                      </h3>
                      <p className="text-gray-500 text-sm font-bold">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center bg-audiophile-white h-8">
                    <button 
                      className="px-3 text-gray-600 hover:text-audiophile-orange font-bold transition-colors"
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-bold">
                      {item.quantity}
                    </span>
                    <button 
                      className="px-3 text-gray-600 hover:text-audiophile-orange font-bold transition-colors"
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="space-y-6">
              <div className="flex justify-between">
                <p className="text-gray-500">TOTAL</p>
                <p className="font-bold">{formatPrice(totalPrice)}</p>
              </div>

              <Link to="/checkout" onClick={() => toggleCart(false)}>
                <Button 
                  variant="primary" 
                  fullWidth
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </Modal>
  );
};
