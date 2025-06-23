import { ReactNode } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
  cartItemCount?: number;
  currentPath?: string;
  onCartClick?: () => void;
}

export const Layout = ({ 
  children, 
  cartItemCount = 0,
  currentPath = '/',
  onCartClick 
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-audiophile-white-light font-manrope">
      <Header 
        cartItemCount={cartItemCount}
        currentPath={currentPath}
        onCartClick={onCartClick}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
