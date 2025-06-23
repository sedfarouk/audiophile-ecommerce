import { Link } from 'react-router-dom';
import { Container } from '../../styles';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { Logo } from '../Header/Logo';

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/headphones', label: 'HEADPHONES' },
  { to: '/speakers', label: 'SPEAKERS' },
  { to: '/earphones', label: 'EARPHONES' },
];

const SocialLinks = () => (
  <div className="flex gap-4">
    <a 
      href="#" 
      className="text-white hover:text-audiophile-orange transition-colors duration-200"
      aria-label="Facebook"
    >
      <FacebookIcon className="w-6 h-6" />
    </a>
    <a 
      href="#" 
      className="text-white hover:text-audiophile-orange transition-colors duration-200"
      aria-label="Twitter"
    >
      <TwitterIcon className="w-6 h-6" />
    </a>
    <a 
      href="#" 
      className="text-white hover:text-audiophile-orange transition-colors duration-200"
      aria-label="Instagram"
    >
      <InstagramIcon className="w-6 h-6" />
    </a>
  </div>
);

const CompanyDescription = ({ className = '' }) => (
  <p className={`text-body text-gray-400 leading-relaxed ${className}`}>
    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
  </p>
);

const CopyrightText = ({ className = '' }) => (
  <p className={`text-body text-gray-500 ${className}`}>
    Copyright 2021. All Rights Reserved
  </p>
);

export const Footer = () => {
  return (
    <footer className="bg-audiophile-black text-white">
      <Container>
        {/* Orange accent */}
        <div className="w-24 h-1 bg-audiophile-orange"></div>
        
        <div className="py-12 lg:py-16">
          {/* Mobile/Tablet Layout - Centered */}
          <div className="lg:hidden text-center">
            <Logo />

            <nav className="mb-12">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.to} 
                    to={item.to} 
                    className="text-subtitle hover:text-audiophile-orange transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <CompanyDescription className="mb-12" />

            <div className="justify-center mb-12">
              <SocialLinks />
            </div>

            {/* Copyright */}
            <CopyrightText />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Top row: Logo and Navigation */}
            <div className="flex justify-between items-center mb-8">
              <Logo />

              <nav>
                <div className="flex gap-8">
                  {navItems.map((item) => (
                    <Link 
                      key={item.to} 
                      to={item.to} 
                      className="text-subtitle hover:text-audiophile-orange transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
            
            <div className="flex justify-between items-end">
              <div className="max-w-lg">
                <CompanyDescription />
              </div>

              <SocialLinks />
            </div>

            <div className="mt-12">
              <CopyrightText />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
