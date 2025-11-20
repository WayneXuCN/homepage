import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import LoadingState from './ui/LoadingState.jsx';
import { applyFavicon } from '../lib/favicon.js';
import { loadSiteContent } from '../lib/content.js';
import { LanguageProvider, useLanguage } from '../lib/LanguageContext.jsx';
import { ThemeProvider } from '../lib/ThemeContext.jsx';
import { updateMetaTags } from '../lib/seo.js';

const MainContent = () => {
  const { content, language } = useLanguage();

  React.useEffect(() => {
    if (content?.site) {
      updateMetaTags(content.site, language);
      if (content.site.favicon) {
        applyFavicon(content.site.favicon);
      }
    }
  }, [content, language]);

  if (!content) {
    return <LoadingState />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home content={content} />} />
        <Route path="/index.html" element={<Home content={content} />} />
        <Route path="/about.html" element={<About content={content} />} />
        <Route path="/contact.html" element={<Contact content={content} />} />
        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  const [fullContent, setFullContent] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      const safeContent = await loadSiteContent();
      if (!isMounted) return;
      setFullContent(safeContent);
    };

    bootstrap();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!fullContent) {
    return <LoadingState />;
  }

  return (
    <BrowserRouter>
      <LanguageProvider content={fullContent}>
        <ThemeProvider>
          <MainContent />
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
