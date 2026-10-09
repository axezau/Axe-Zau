import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-neutral-900 text-white scroll-mt-16 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Relatos Reais</span>
            <span aria-hidden="true">·</span>
            <span>Experiências Vividas</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            A voz de quem já viajou conosco.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Mais de 98% dos nossos viajantes retornam para planejar novas expedições. Veja o que dizem sobre a nossa dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-emerald-400/60" />
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80">
                <h4 className="text-sm font-semibold text-white">
                  {t.author}
                </h4>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                  <span>{t.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400/90">{t.trip}</span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
