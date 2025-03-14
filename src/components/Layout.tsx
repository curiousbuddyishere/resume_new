import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#000033] text-white">
      <div className="max-w-[620px] mx-auto py-6 sm:py-12 px-4">
        <Navigation />
        {children}
      </div>
    </div>
  );
};

export default Layout;