/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsProof from './components/MetricsProof';
import FeaturedDestinations from './components/FeaturedDestinations';
import ItineraryModal from './components/ItineraryModal';
import Methodology from './components/Methodology';
import CuratorSpotlight from './components/CuratorSpotlight';
import TripCustomizer from './components/TripCustomizer';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { Destination } from './data/travelData';

export default function App() {
  const [activeRegion, setActiveRegion] = useState<'all' | 'asia' | 'europe' | 'africa'>('all');
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(null);
  const [plannerDestination, setPlannerDestination] = useState<Destination | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanTripClick = () => {
    scrollToSection('planejador');
  };

  const handleHeroExplore = () => {
    scrollToSection('destinos');
  };

  const handleHeroFilter = (region: 'all' | 'asia' | 'europe' | 'africa') => {
    setActiveRegion(region);
    scrollToSection('destinos');
  };

  const handleSelectForPlanner = (destination: Destination) => {
    setPlannerDestination(destination);
    scrollToSection('planejador');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans-clean antialiased selection:bg-emerald-400 selection:text-neutral-950">
      {/* Top Bar Navigation adhering to strict 3-zone contract */}
      <Navbar onPlanTripClick={handlePlanTripClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with high-resolution photography & trip finder */}
        <Hero
          onExploreClick={handleHeroExplore}
          onFilterSelect={handleHeroFilter}
        />

        {/* 2. Quantitative rigor & Proof strip */}
        <MetricsProof />

        {/* 3. Featured Destinations Marquee with interactive filtering */}
        <FeaturedDestinations
          activeRegion={activeRegion}
          onSelectRegion={setActiveRegion}
          onOpenModal={(dest) => setSelectedDestinationModal(dest)}
          onSelectForPlanner={handleSelectForPlanner}
        />

        {/* 4. Methodology / How It Works */}
        <Methodology />

        {/* 5. Curator & Founders Spotlight */}
        <CuratorSpotlight />

        {/* 6. Interactive Trip Planner & Quote Customizer */}
        <TripCustomizer preselectedDestination={plannerDestination} />

        {/* 7. Attributable Social Proof / Testimonials */}
        <Testimonials />

        {/* 8. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 9. Quiet, elegant footer */}
      <Footer />

      {/* Modal for full day-by-day itinerary details */}
      <ItineraryModal
        destination={selectedDestinationModal}
        onClose={() => setSelectedDestinationModal(null)}
        onSelectForQuote={handleSelectForPlanner}
      />
    </div>
  );
}
