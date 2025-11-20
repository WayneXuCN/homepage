'use client';

import React from 'react';
import ContactContent from '../../../components/pages/Contact';
import { useLanguage } from '../../../lib/LanguageContext';

export default function ContactPage() {
  const { content } = useLanguage();

  if (!content) return null;

  return <ContactContent content={content} />;
}
