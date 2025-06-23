import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from '../../styles';
import { formatPrice } from '../../../utils/formatters';
import { Order } from '../../../types/checkout.types';

interface OrderConfirmationProps {
  order: Order;
}

export const OrderConfirmation = ({ order }: OrderConfirmationProps) => {
  const navigate = useNavigate();
  const [showAllItems, setShowAllItems] = useState(false);

  // Get the first item for display in the main summary
  const firstItem = order.items[0];
  const hasMoreItems = order.items.length > 1;
  const otherItemsCount = order.items.length - 1;

  return (
    <Modal 
      isOpen={true} 
      onClose={() => navigate('/')}
      position="center"
      className="max-w-lg w-full my-4"
      preventBackdropClick
    >
      <div className="p-8 md:p-12">
        {/* Check Icon */}
        <div className="w-16 h-16 rounded-full bg-audiophile-orange flex items-center justify-center mb-8">
          <svg width="26" height="21" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.56 0.44L8.47 17.52L0.44 9.5" stroke="white" strokeWidth="2" fill="none" fillRule="evenodd"/>
          </svg>
        </div>
        
        <h1 className="text-h3 font-bold mb-6">
          THANK YOU<br />
          FOR YOUR ORDER
        </h1>
        
        <p className="text-gray-500 mb-8">
          You will receive an email confirmation shortly.
        </p>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left side - Item details */}
            <div className="bg-audiophile-white-light p-6 md:col-span-3">
              {/* First item always shown */}
              <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white mr-4">
                    <img 
                      src={firstItem.product.image.desktop.replace('./', '/')} 
                      alt={firstItem.product.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{firstItem.product.name.split(' ')[0]}</p>
                    <p className="text-gray-500 text-xs">{formatPrice(firstItem.product.price)}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">x{firstItem.quantity}</p>
              </div>
              
              {/* "and X other items" text or additional items */}
              {hasMoreItems && (
                <div className="pt-3 text-center">
                  <button
                    className="text-gray-500 text-sm font-medium hover:text-audiophile-orange"
                    onClick={() => setShowAllItems(!showAllItems)}
                  >
                    {showAllItems ? (
                      "View less"
                    ) : (
                      `and ${otherItemsCount} other item${otherItemsCount > 1 ? 's' : ''}`
                    )}
                  </button>
                  
                  {/* Additional items when expanded */}
                  {showAllItems && (
                    <div className="mt-4 space-y-4">
                      {order.items.slice(1).map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white mr-4">
                              <img 
                                src={item.product.image.desktop.replace('./', '/')} 
                                alt={item.product.name} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-sm">{item.product.name.split(' ')[0]}</p>
                              <p className="text-gray-500 text-xs">{formatPrice(item.product.price)}</p>
                            </div>
                          </div>
                          <p className="text-gray-500 text-sm">x{item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Right side - Grand Total */}
            <div className="bg-audiophile-black p-6 text-white md:col-span-2 flex flex-col justify-center">
              <p className="text-gray-400 mb-2 text-sm">GRAND TOTAL</p>
              <p className="font-bold">{formatPrice(order.summary.grandTotal)}</p>
            </div>
          </div>
        </div>
        
        <Button
          variant="primary"
          fullWidth
          onClick={() => navigate('/')}
        >
          BACK TO HOME
        </Button>
      </div>
    </Modal>
  );
};
