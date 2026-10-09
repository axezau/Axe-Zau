import { Compass, Mail, Phone, MapPin, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Compass className="w-5 h-5 text-emerald-400" />
              <span className="font-serif-luxury text-xl font-semibold tracking-wide">
                Latitude Viagens
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Agência de viagens boutique especializada em experiências autorais sob medida, expedições privativas e consultoria com curadoria independente.
            </p>
            <div className="pt-2 text-[11px] text-neutral-500 space-y-1">
              <p>Cadastur: 26.049.882/0001-40 · RNAVT: 9842</p>
              <p>Membro associado Brazilian Luxury Travel Association (BLTA)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#destinos" className="hover:text-emerald-300 transition-colors">
                  Destinos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-emerald-300 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#curadoria" className="hover:text-emerald-300 transition-colors">
                  Nossa Curadoria
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-emerald-300 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#perguntas" className="hover:text-emerald-300 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Destinos Populares */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Destinos Autorais
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Japão: Kyoto & Alpes Japoneses</li>
              <li>Itália: Dolomitas & Lagos de Altitude</li>
              <li>Tanzânia: Grande Migração no Serengeti</li>
              <li>Portugal: Arquipélago dos Açores</li>
              <li>Patagônia Chilena & Argentina</li>
            </ul>
          </div>

          {/* Escritórios & Contato */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Atendimento Concierge
            </h4>
            <div className="space-y-2 text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>São Paulo: Av. Brigadeiro Faria Lima, 3477 · Itaim Bibi</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Lisboa: Avenida da Liberdade, 245 · Santo António</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+55 11 3840-9200 / +351 21 829 4400</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>concierge@latitudeviagens.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Latitude Viagens e Expedições Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-neutral-400 cursor-pointer">Termos de Serviço</span>
            <span className="hover:text-neutral-400 cursor-pointer">Código de Conduta Sustentável</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
