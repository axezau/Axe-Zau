import { Quote, CheckCircle2, Award, Globe, Compass } from 'lucide-react';

export default function CuratorSpotlight() {
  return (
    <section id="curadoria" className="py-24 bg-neutral-900 text-white scroll-mt-16 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Curator Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl">
              <img
                src="/src/assets/images/travel_curator_portrait_1791503830889.jpg"
                alt="Sofia Silveira, Fundadora e Curadora Chefe da Latitude Viagens"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                  Fundadora & Curadora Chefe
                </span>
                <h3 className="font-serif-luxury text-2xl font-medium">
                  Sofia Silveira
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Especialista em turismo sustentável & membro da rede Virtuoso
                </p>
              </div>
            </div>
          </div>

          {/* Manifesto & Credentials Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <span>Alma da Agência</span>
                <span aria-hidden="true">·</span>
                <span>Visão de Mundo</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                “Viajar não é colecionar carimbos, mas transformar a forma como você enxerga a vida.”
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                A Latitude nasceu após mais de uma década percorrendo trilhas remotas no Himalaia, savanas no leste africano e pequenos vilarejos nos fiordes nórdicos. Percebemos que o verdadeiro luxo não é a ostentação — é o silêncio, a hospitalidade genuína e a certeza de que cada momento foi pensado exclusivamente para você.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Cada fornecedor que recomendamos passa pelo nosso crivo pessoal: testamos as camas, conversamos com os proprietários e garantimos práticas sustentáveis que apoiam as comunidades locais.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Curadoria In Loco</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Destinos visitados e validados presencialmente pela nossa equipe.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Acesso Exclusivo</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Visitas fora de horário, reservas prioritárias e guias historiadores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
