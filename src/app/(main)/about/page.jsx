'use client';

import React from 'react';
import AboutContent from '../../../components/pages/About';
import { useLanguage } from '../../../lib/LanguageContext';

export default function AboutPage() {
  const { content } = useLanguage();

  if (!content) return null;

  return <AboutContent content={content} />;
}
