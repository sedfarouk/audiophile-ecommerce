import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product } from '../types';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART'; payload?: boolean };

const initialState: CartState = {
  items: [],
  isOpen: false
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (isOpen?: boolean) => void;
  totalPrice: number;
  totalItems: number;
  distinctItems: number;
}>({
  state: initialState,
  dispatch: () => null,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  toggleCart: () => {},
  totalPrice: 0,
  totalItems: 0,
  distinctItems: 0
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity
        };
        return { ...state, items: updatedItems };
      }

      return { ...state, items: [...state.items, action.payload] };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload.productId)
      };

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => 
        item.product.id === action.payload.productId
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload !== undefined ? action.payload : !state.isOpen };

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const storedCart = typeof window !== 'undefined' ? localStorage.getItem('audiophileCart') : null;
  const initialCart: CartState = storedCart ? JSON.parse(storedCart) : initialState;

  const [state, dispatch] = useReducer(cartReducer, initialCart);

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );

  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity, 
    0
  );

  const distinctItems = state.items.length;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('audiophileCart', JSON.stringify(state));
    }
  }, [state]);

  const addToCart = (product: Product, quantity: number) => {
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: { product, quantity } 
    });
    // Open cart when adding items
    dispatch({ type: 'TOGGLE_CART', payload: true });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ 
      type: 'REMOVE_ITEM', 
      payload: { productId } 
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      payload: { productId, quantity } 
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = (isOpen?: boolean) => {
    dispatch({ type: 'TOGGLE_CART', payload: isOpen });
  };

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      totalPrice,
      totalItems,
      distinctItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart context
export const useCart = () => useContext(CartContext);
