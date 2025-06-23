import { Link } from 'react-router-dom';

interface NavigationProps {
  currentPath?: string;
}

export const Navigation = ({ currentPath = '/' }: NavigationProps) => {
  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/headphones', label: 'HEADPHONES' },
    { to: '/speakers', label: 'SPEAKERS' },
    { to: '/earphones', label: 'EARPHONES' },
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`text-subtitle font-bold tracking-wide transition-colors duration-200 ${
            currentPath === item.to
              ? 'text-audiophile-orange'
              : 'text-white hover:text-audiophile-orange'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
