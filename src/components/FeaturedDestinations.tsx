import { useState } from 'react';
import { ArrowUpRight, Compass, Calendar, Sparkles } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/travelData';

interface FeaturedDestinationsProps {
  activeRegion: 'all' | 'asia' | 'europe' | 'africa';
  onSelectRegion: (region: 'all' | 'asia' | 'europe' | 'africa') => void;
  onOpenModal: (destination: Destination) => void;
  onSelectForPlanner: (destination: Destination) => void;
}

export default function FeaturedDestinations({
  activeRegion,
  onSelectRegion,
  onOpenModal,
  onSelectForPlanner
}: FeaturedDestinationsProps) {
  const filtered = activeRegion === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <section id="destinos" className="py-24 bg-neutral-900 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <span>Roteiros em Destaque</span>
              <span aria-hidden="true">·</span>
              <span>Edição 2026/2027</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white max-w-xl">
              Expedições desenhadas com tempo, alma e exclusividade.
            </h2>
          </div>

          {/* Interactive Filter Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-950/80 border border-neutral-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => onSelectRegion('all')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Todos ({DESTINATIONS.length})
            </button>
            <button
              onClick={() => onSelectRegion('asia')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'asia'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ásia & Japão
            </button>
            <button
              onClick={() => onSelectRegion('europe')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'europe'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Europa Alpina & Ilhas
            </button>
            <button
              onClick={() => onSelectRegion('africa')}
              className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeRegion === 'africa'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              África Selvagem
            </button>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="group bg-neutral-950 border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col hover:border-neutral-700 transition-all duration-300"
            >
              {/* Media Container with 16:10 or 4:3 Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Price Indicator pinned at corner cleanly */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-300 block">
                      A partir de
                    </span>
                    <span className="text-lg font-serif-luxury font-semibold tabular-nums text-white">
                      {dest.priceFrom}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenModal(dest)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-emerald-400 hover:text-neutral-950 backdrop-blur-md transition-colors text-white cursor-pointer"
                    aria-label={`Ver detalhes completos de ${dest.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2.5 font-medium">
                    <span className="text-emerald-400">{dest.regionLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dest.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dest.bestSeason}</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-medium text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                    {dest.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {dest.subtitle}
                  </p>

                  <p className="text-xs text-neutral-300/90 leading-relaxed line-clamp-3">
                    {dest.summary}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenModal(dest)}
                    className="text-xs font-semibold text-neutral-300 hover:text-emerald-300 transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Ver Itinerário Completo
                  </button>

                  <button
                    onClick={() => onSelectForPlanner(dest)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Personalizar Este Roteiro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
