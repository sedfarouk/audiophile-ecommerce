import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage/HomePage';
import { HeadphonesPage } from './pages/HeadphonesPage/HeadphonesPage';
import { SpeakersPage } from './pages/SpeakersPage/SpeakersPage';
import { EarphonesPage } from './pages/EarphonesPage/EarphonesPage';
import { ProductDetailPage } from './pages/ProductDetailPage/ProductDetailPage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { CartProvider, useCart } from './contexts/CartContext';
import { CartModal } from './components/cart/CartModal/CartModal';

const AppContent = () => {
  const location = useLocation();
  const { toggleCart, distinctItems } = useCart();

  const handleCartClick = () => {
    toggleCart();
  };

  return (
    <Layout 
      cartItemCount={distinctItems}
      currentPath={location.pathname}
      onCartClick={handleCartClick}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <CartModal />
    </Layout>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
