import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'light' | 'dark';
  className?: string;
}

export const Section = ({
  children,
  spacing = 'lg',
  background = 'white',
  className = ''
}: SectionProps) => {
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };

  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-audiophile-white-light',
    dark: 'bg-audiophile-black'
  };

  const classes = `
    ${spacingClasses[spacing]}
    ${backgroundClasses[background]}
    ${className}
  `.trim();

  return (
    <section className={classes}>
      {children}
    </section>
  );
};
