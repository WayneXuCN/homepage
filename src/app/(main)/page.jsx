'use client';

import React from 'react';
import HomeContent from '../../components/pages/Home';
import { useLanguage } from '../../lib/LanguageContext';

export default function Page() {
  const { content } = useLanguage();

  if (!content) return null;

  return <HomeContent content={content} />;
}
