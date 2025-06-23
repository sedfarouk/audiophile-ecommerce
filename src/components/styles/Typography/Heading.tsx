import { ReactNode, createElement } from 'react';

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  color?: 'black' | 'white' | 'orange';
}

export const Heading = ({
  level,
  children,
  className = '',
  color = 'black'
}: HeadingProps) => {
  const tag = `h${level}` as const;
  
  const sizeClasses = {
    1: 'text-h1',
    2: 'text-h2',
    3: 'text-h3',
    4: 'text-h4',
    5: 'text-h5',
    6: 'text-h6'
  };

  const colorClasses = {
    black: 'text-audiophile-black',
    white: 'text-audiophile-white-pure',
    orange: 'text-audiophile-orange'
  };

  const classes = `
    ${sizeClasses[level]}
    ${colorClasses[color]}
    ${className}
  `.trim();

  return createElement(tag, { className: classes }, children);
};
