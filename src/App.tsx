/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { DrinksPage } from './pages/DrinksPage';
import { FoodSnacksPage } from './pages/FoodSnacksPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { BUSINESS_INFO } from './data/businessData';

const VALID_ROUTES = [
  'home',
  'about',
  'menu',
  'coffee-tea',
  'food-snacks',
  'gallery',
  'contact',
  'faqs',
];

const ROUTE_TITLES: Record<string, { title: string; desc: string }> = {
  home: {
    title: 'Evening Hours Tea and Coffee | Premium Cafe in Okara, Pakistan',
    desc: 'Make your evenings a little more special. Authentic evening cafe experience in Okara, Punjab. Hot teas, fresh coffee, and snacks starting at 6:00 PM.',
  },
  about: {
    title: 'About Us | Evening Hours Tea and Coffee - Okara',
    desc: 'Discover our story and evening cafe culture in Okara. Welcoming dine-in and takeout hospitality.',
  },
  menu: {
    title: 'Menu & Offerings | Evening Hours Tea and Coffee',
    desc: 'Explore freshly brewed tea, coffee, cold beverages, and cafe snacks in Okara.',
  },
  'coffee-tea': {
    title: 'Coffee & Tea Craft | Evening Hours Cafe Okara',
    desc: 'Experience freshly poured steaming chai and velvety brewed coffee crafted for cool Punjab evenings.',
  },
  'food-snacks': {
    title: 'Food & Snacks | Evening Hours Tea and Coffee',
    desc: 'Light companion fare and cafe snacks prepared fresh daily for dine-in and takeout in Okara.',
  },
  gallery: {
    title: 'Atmosphere & Gallery | Evening Hours Cafe Okara',
    desc: 'View visual vignettes of our warm evening cafe ambiance, steaming tea pours, and brewed coffee.',
  },
  contact: {
    title: 'Contact & Visit Us | Evening Hours Tea and Coffee Okara',
    desc: 'Call +92 307 0002987 or visit us in Okara (Google code RFJC+42). Dine-in & takeout from 6:00 PM.',
  },
  faqs: {
    title: 'Frequently Asked Questions | Evening Hours Cafe',
    desc: 'Verified answers about opening hours, location in Okara, takeout orders, and services.',
  },
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return VALID_ROUTES.includes(hash) ? hash : 'home';
  });

  // Hash route synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (!hash) {
        setCurrentRoute('home');
      } else if (VALID_ROUTES.includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('not-found');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and meta description dynamically
  useEffect(() => {
    const meta = ROUTE_TITLES[currentRoute] || {
      title: 'Page Not Found | Evening Hours Tea and Coffee',
      desc: 'The requested page could not be found.',
    };

    document.title = meta.title;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', meta.desc);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', meta.title);
    }
  }, [currentRoute]);

  // Inject Schema.org JSON-LD LocalBusiness data
  useEffect(() => {
    const existingScript = document.getElementById('local-business-schema');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'local-business-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CafeOrCoffeeShop',
        name: BUSINESS_INFO.name,
        telephone: BUSINESS_INFO.phoneRaw,
        openingHours: 'Mo-Su 18:00-23:59',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Okara',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        servesCuisine: ['Tea', 'Coffee', 'Snacks'],
        hasMap: BUSINESS_INFO.mapsUrl,
      });
      document.head.appendChild(script);
    }
  }, []);

  const navigateTo = (route: string) => {
    window.location.hash = route === 'home' ? '' : route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'menu':
        return <MenuPage onNavigate={navigateTo} />;
      case 'coffee-tea':
        return <DrinksPage onNavigate={navigateTo} />;
      case 'food-snacks':
        return <FoodSnacksPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'faqs':
        return <FaqPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F0E5] text-[#242321] relative">
      {/* Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Content View with Smooth Transition */}
      <main className="flex-1 w-full pb-12">
        {renderCurrentPage()}
      </main>

      {/* Mandatory Left-Side Floating Call Button */}
      <FloatingCallButton />

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
