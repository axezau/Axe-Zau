import { Compass, Users, Sparkles, PhoneCall } from 'lucide-react';
import { METHOD_STEPS } from '../data/travelData';

export default function Methodology() {
  return (
    <section id="como-funciona" className="py-24 bg-neutral-950 text-white scroll-mt-16 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Metodologia Latitude</span>
            <span aria-hidden="true">·</span>
            <span>Do Planejamento ao Retorno</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Como construímos uma viagem verdadeiramente memorável.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Eliminamos o estresse de pesquisas exaustivas e itinerários genéricos. Você conta com a nossa vivência in loco e assistência irrestrita em cada etapa.
          </p>
        </div>

        {/* 3 Steps in Asymmetric Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {METHOD_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-emerald-400/80 block mb-6">
                  {item.step}
                </span>
                <h3 className="font-serif-luxury text-xl font-medium text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                {idx === 0 && <span>Reunião presencial ou virtual</span>}
                {idx === 1 && <span>Acesso a parceiros exclusivos</span>}
                {idx === 2 && <span>Vouchers offline & suporte 24h</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Highlight Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                Prefere conversar antes de definir o destino?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                Nossos curadores avaliam seu perfil e sugerem países e épocas ideais de acordo com suas preferências de clima, gastronomia e ritmo.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg whitespace-nowrap transition-colors self-start sm:self-center"
          >
            Falar com a Curadoria
          </a>
        </div>
      </div>
    </section>
  );
}
