import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBar from '../ui/HeaderBar.jsx';
import SocialLink from '../ui/SocialLink.jsx';
import { useLanguage } from '../../lib/LanguageContext.jsx';

const Layout = () => {
  const { content } = useLanguage();
  const { header, footer } = content;

  return (
    <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 animate-fade-in">
      <HeaderBar header={header} />

      <main>
        <Outlet />
      </main>

      <footer className="pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0">
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg text-center md:text-left">
            {footer.copyright}
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            {footer.socialLinks.map((link) => (
              <SocialLink key={link.url} link={link} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
