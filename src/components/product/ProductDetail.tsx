import { useState, useEffect } from 'react';
import { Container, Heading, Text, Button } from '../styles';
import { ResponsiveImage } from '../styles';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../utils/formatters';
import type { Product } from '../../types';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, removeFromCart, state } = useCart();
  
  // Check if the product is already in the cart
  const isInCart = state.items.some(item => item.product.id === product.id);

  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="bg-audiophile-white rounded-lg p-8">
            <ResponsiveImage
              image={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[400px] object-contain"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            {product.new && (
              <p className="text-audiophile-orange text-sm uppercase tracking-[0.5em] font-normal mb-6">
                New Product
              </p>
            )}
            
            <Heading level={2} className="mb-6 md:mb-8">
              {product.name}
            </Heading>
            
            <Text color="gray" className="mb-8">
              {product.description}
            </Text>
            
            <div className="mb-8">
              <p className="text-h6 font-bold">{formatPrice(product.price)}</p>
            </div>
            
            {/* Add to Cart Actions */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              {/* Only show quantity selector if product is not in cart */}
              {!isInCart && (
                <div className="flex items-center bg-audiophile-white h-14 w-32">
                  <button 
                    className="px-4 text-gray-500 hover:text-audiophile-orange font-bold transition-colors"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold">
                    {quantity}
                  </span>
                  <button 
                    className="px-4 text-gray-500 hover:text-audiophile-orange font-bold transition-colors"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              )}
              
              {isInCart ? (
                <Button 
                  variant="secondary"
                  onClick={handleRemoveFromCart}
                >
                  REMOVE FROM CART
                </Button>
              ) : (
                <Button 
                  variant="primary"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
