import { ReactNode } from 'react';

export interface TextProps {
  variant?: 'body' | 'overline' | 'subtitle';
  children: ReactNode;
  className?: string;
  color?: 'black' | 'white' | 'orange' | 'gray';
  as?: 'p' | 'span' | 'div';
}

export const Text = ({
  variant = 'body',
  children,
  className = '',
  color = 'black',
  as: Tag = 'p'
}: TextProps) => {
  const variantClasses = {
    body: 'text-body',
    overline: 'text-overline uppercase',
    subtitle: 'text-subtitle uppercase'
  };

  const colorClasses = {
    black: 'text-audiophile-black',
    white: 'text-audiophile-white-pure',
    orange: 'text-audiophile-orange',
    gray: 'text-gray-600'
  };

  const classes = `
    ${variantClasses[variant]}
    ${colorClasses[color]}
    ${className}
  `.trim();

  return <Tag className={classes}>{children}</Tag>;
};
