import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      <Navigation />
      <main className={`${className}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;