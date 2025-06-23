import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const Container = ({
  children,
  size = 'xl',
  className = ''
}: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const classes = `
    mx-auto px-6 lg:px-8
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
