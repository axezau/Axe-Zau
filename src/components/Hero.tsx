import { ArrowRight, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onFilterSelect: (region: 'all' | 'asia' | 'europe' | 'africa') => void;
}

export default function Hero({ onExploreClick, onFilterSelect }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-20 pb-16">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_travel_agency_1791503794135.jpg"
          alt="Paisagem litorânea e falésias imponentes dos Açores ao pôr do sol"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback gradient if file failed
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
        {/* Measured scrims for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40" />
        <div className="absolute inset-0 bg-neutral-950/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Editorial Subhead / Kicker (No pills, clean unboxed text) */}
        <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-emerald-300 uppercase mb-5">
          <span>Curadoria de Viagens Sob Medida</span>
          <span aria-hidden="true">·</span>
          <span>Expedições Privativas</span>
        </div>

        {/* Primary Headline with text-wrap balance */}
        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-[1.12] mb-6 max-w-4xl [text-wrap:balance]">
          Viagens desenhadas para quem busca mais do que um destino.
        </h1>

        {/* Descriptive Body */}
        <p className="text-base sm:text-lg text-neutral-200/90 font-normal max-w-2xl leading-relaxed mb-10 [text-wrap:balance]">
          Acesso a lodges sustentáveis, rotas fora do turismo de massa e itinerários autorais criados por especialistas locais para momentos que permanecem para sempre.
        </p>

        {/* Main CTA & Secondary Trust Marker */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-98 transition-all rounded-lg flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40 cursor-pointer"
          >
            <span>Conhecer Roteiros Selecionados</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-700/60 rounded-lg backdrop-blur-sm transition-all text-center"
          >
            Nosso Método de Planejamento
          </a>
        </div>

        {/* Interactive Trip Finder Filter Bar */}
        <div className="w-full max-w-4xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-2xl text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Quick Filter: Região */}
            <div className="border-b sm:border-b-0 sm:border-r border-neutral-800 pb-3 sm:pb-0 sm:pr-4">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Destino / Região
              </label>
              <select
                id="hero-region-select"
                aria-label="Selecionar Região do Destino"
                onChange={(e) => {
                  const val = e.target.value as 'all' | 'asia' | 'europe' | 'africa';
                  onFilterSelect(val);
                }}
                className="w-full bg-transparent text-sm text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-neutral-900 text-white">Todos os Destinos</option>
                <option value="asia" className="bg-neutral-900 text-white">Japão & Ásia</option>
                <option value="europe" className="bg-neutral-900 text-white">Dolomitas & Açores (Europa)</option>
                <option value="africa" className="bg-neutral-900 text-white">Serengeti & Tanzânia (África)</option>
              </select>
            </div>

            {/* Quick Filter: Estilo */}
            <div className="border-b sm:border-b-0 lg:border-r border-neutral-800 pb-3 sm:pb-0 sm:pr-4">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Experiência
              </label>
              <div className="text-sm text-neutral-200 font-medium truncate flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Sob Medida & Privativo</span>
              </div>
            </div>

            {/* Quick Filter: Assistência */}
            <div className="border-b sm:border-b-0 sm:border-r border-neutral-800 pb-3 sm:pb-0 sm:pr-4">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Acompanhamento
              </label>
              <div className="text-sm text-neutral-200 font-medium truncate flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Concierge 24 Horas</span>
              </div>
            </div>

            {/* Action button inside bar */}
            <div>
              <button
                onClick={onExploreClick}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-white text-neutral-950 hover:bg-neutral-100 active:scale-95 transition-all rounded-lg text-center cursor-pointer flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-neutral-800" />
                <span>Ver Roteiros</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
