'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { locales, defaultLocale } from '../locales/config';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLocale);
  const [content, setContent] = useState(locales[defaultLocale].data);

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && locales[savedLang]) {
      setLanguage(savedLang);
      setContent(locales[savedLang].data);
    }
  }, []);

  const toggleLanguage = () => {
    const localeKeys = Object.keys(locales);
    const currentIndex = localeKeys.indexOf(language);
    const nextIndex = (currentIndex + 1) % localeKeys.length;
    const newLang = localeKeys[nextIndex];

    setLanguage(newLang);
    setContent(locales[newLang].data);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
