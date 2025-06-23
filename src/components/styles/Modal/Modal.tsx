import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  position?: 'center' | 'top-right' | 'custom';
  preventBackdropClick?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  overlayClassName = '',
  position = 'center',
  preventBackdropClick = false
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle clicks outside the modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (preventBackdropClick) return;
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Get position classes based on position prop
  const getPositionClasses = () => {
    switch (position) {
      case 'center':
        return 'items-center justify-center';
      case 'top-right':
        return 'items-start justify-end pt-20';
      case 'custom':
        return '';
      default:
        return 'items-center justify-center';
    }
  };

  if (!isOpen) return null;

  // Use portal to render the modal at the document root
  return ReactDOM.createPortal(
    <div 
      className={`fixed inset-0 z-50 flex ${getPositionClasses()} ${overlayClassName}`}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay/Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-40" aria-hidden="true"></div>
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className={`bg-white rounded-lg shadow-xl relative z-10 ${className}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
