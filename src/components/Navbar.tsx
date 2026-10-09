import { useState, useEffect } from 'react';
import { Compass, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
}

export default function Navbar({ onPlanTripClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
          >
            <Compass className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-serif-luxury text-2xl tracking-wide">Latitude Viagens</span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#destinos"
              className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm py-1"
            >
              Destinos
            </a>
            <a
              href="#como-funciona"
              className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm py-1"
            >
              Como Funciona
            </a>
            <a
              href="#curadoria"
              className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm py-1"
            >
              Curadoria
            </a>
            <a
              href="#depoimentos"
              className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm py-1"
            >
              Depoimentos
            </a>
            <a
              href="#perguntas"
              className="hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm py-1"
            >
              Perguntas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onPlanTripClick}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 cursor-pointer"
            >
              Planejar Minha Viagem
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-800/80 bg-neutral-900/95 backdrop-blur-xl rounded-xl p-5 shadow-2xl flex flex-col gap-4">
            <a
              href="#destinos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-emerald-400 py-1 text-base font-medium"
            >
              Destinos Exclusivos
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-emerald-400 py-1 text-base font-medium"
            >
              Como Funciona
            </a>
            <a
              href="#curadoria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-emerald-400 py-1 text-base font-medium"
            >
              Nossa Curadoria
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-emerald-400 py-1 text-base font-medium"
            >
              Depoimentos de Viajantes
            </a>
            <a
              href="#perguntas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-emerald-400 py-1 text-base font-medium"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-2 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanTripClick();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all"
              >
                Planejar Minha Viagem
              </button>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-neutral-300 hover:text-white py-1"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                Falar com consultor via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
