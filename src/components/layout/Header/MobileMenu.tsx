import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Debug log
  useEffect(() => {
    console.log('MobileMenu render - isOpen:', isOpen);
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="relative bg-white shadow-xl transition-transform duration-300 transform">
        <Container>
          <nav className="py-8" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200 py-3 border-b border-gray-100"
                onClick={onClose}
              >
                HOME
              </Link>
              <Link 
                to="/headphones" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200 py-3 border-b border-gray-100"
                onClick={onClose}
              >
                HEADPHONES
              </Link>
              <Link 
                to="/speakers" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200 py-3 border-b border-gray-100"
                onClick={onClose}
              >
                SPEAKERS
              </Link>
              <Link 
                to="/earphones" 
                className="block text-h6 text-audiophile-black hover:text-audiophile-orange transition-colors duration-200 py-3"
                onClick={onClose}
              >
                EARPHONES
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </div>
  );
};
