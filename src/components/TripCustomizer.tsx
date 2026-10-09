import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles, ShieldCheck, MapPin, Calendar, Users, Sliders } from 'lucide-react';
import { Destination } from '../data/travelData';

interface TripCustomizerProps {
  preselectedDestination?: Destination | null;
}

export default function TripCustomizer({ preselectedDestination }: TripCustomizerProps) {
  const [destinationChoice, setDestinationChoice] = useState('Kyoto & Japão Tradicional');
  const [travelStyle, setTravelStyle] = useState('Cultural & Imersão');
  const [durationChoice, setDurationChoice] = useState('10 a 14 dias');
  const [travelers, setTravelers] = useState('2 viajantes (casal)');
  const [accommodationStyle, setAccommodationStyle] = useState('Hotéis Boutique & Charme');
  const [departureWindow, setDepartureWindow] = useState('Próximos 6 meses');

  // Contact fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedDestination) {
      setDestinationChoice(preselectedDestination.title);
      // scroll to planner
      const element = document.getElementById('planejador');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedDestination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
  };

  return (
    <section id="planejador" className="py-24 bg-neutral-950 text-white scroll-mt-16 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Consultoria Personalizada</span>
            <span aria-hidden="true">·</span>
            <span>Sem Compromisso</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Desenhe o seu roteiro sob medida.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Selecione as suas preferências abaixo. Nossa equipe elabora uma proposta preliminar personalizada com logística, sugestões de hotéis e estimativa de investimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white">
                  Planejamento Iniciado com Sucesso!
                </h3>
                <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                  Obrigado, <strong>{name}</strong>. Recebemos o seu briefing para <strong>{destinationChoice}</strong>.
                  Nossa curadora entrará em contato via WhatsApp/E-mail dentro de 24 horas úteis com uma proposta preliminar.
                </p>
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 max-w-md mx-auto text-left text-xs text-neutral-400 space-y-1 mt-6">
                  <p><strong className="text-neutral-200">Destino:</strong> {destinationChoice}</p>
                  <p><strong className="text-neutral-200">Estilo:</strong> {travelStyle}</p>
                  <p><strong className="text-neutral-200">Duração:</strong> {durationChoice}</p>
                  <p><strong className="text-neutral-200">Viajantes:</strong> {travelers}</p>
                  <p><strong className="text-neutral-200">E-mail:</strong> {email}</p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
                  >
                    Planejar outro roteiro
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Destino */}
                <div>
                  <label htmlFor="planner-dest-select" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    1. Destino Desejado
                  </label>
                  <select
                    id="planner-dest-select"
                    value={destinationChoice}
                    onChange={(e) => setDestinationChoice(e.target.value)}
                    className="w-full text-sm px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none cursor-pointer"
                  >
                    <option value="Kyoto, Takayama & Alpes Japoneses">Kyoto, Takayama & Alpes Japoneses</option>
                    <option value="Dolomitas & Lagos Esmeralda (Itália)">Dolomitas & Lagos Esmeralda (Itália)</option>
                    <option value="Grande Migração & Serengeti (Tanzânia)">Grande Migração & Serengeti (Tanzânia)</option>
                    <option value="Açores & Santuário Vulcânico (Portugal)">Açores & Santuário Vulcânico (Portugal)</option>
                    <option value="Patagônia Glacial & Terra do Fogo">Patagônia Glacial & Terra do Fogo</option>
                    <option value="Islândia & Auroras Boreais">Islândia & Auroras Boreais</option>
                    <option value="Outro Destino (Definir com Curador)">Outro Destino (Definir com Curador)</option>
                  </select>
                </div>

                {/* 2. Estilo de Viagem */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    2. Foco Principal da Experiência
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'Cultural & Imersão',
                      'Natureza & Trekking',
                      'Safári & Vida Selvagem',
                      'Gastronomia & Vinhos',
                      'Praias & Relaxamento',
                      'Neve & Montanhas'
                    ].map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setTravelStyle(style)}
                        className={`px-3 py-2.5 text-xs font-medium rounded-lg text-left transition-colors border cursor-pointer ${
                          travelStyle === style
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Duração & Viajantes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="planner-duration-select" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      3. Duração Estimada
                    </label>
                    <select
                      id="planner-duration-select"
                      value={durationChoice}
                      onChange={(e) => setDurationChoice(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none cursor-pointer"
                    >
                      <option value="7 a 9 dias">7 a 9 dias</option>
                      <option value="10 a 14 dias">10 a 14 dias (Recomendado)</option>
                      <option value="15 a 21 dias">15 a 21 dias</option>
                      <option value="Mais de 3 semanas">Mais de 3 semanas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="planner-travelers-select" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      4. Quantidade de Viajantes
                    </label>
                    <select
                      id="planner-travelers-select"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none cursor-pointer"
                    >
                      <option value="1 viajante (solo privativo)">1 viajante (solo privativo)</option>
                      <option value="2 viajantes (casal)">2 viajantes (casal)</option>
                      <option value="3 a 4 viajantes (família)">3 a 4 viajantes (família)</option>
                      <option value="5+ viajantes (grupo exclusivo)">5+ viajantes (grupo exclusivo)</option>
                    </select>
                  </div>
                </div>

                {/* 4. Padrão de Hospedagem */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    5. Estilo de Hospedagem Preferido
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      'Hotéis Boutique & Charme',
                      'Luxo 5 Estrelas Tradicional',
                      'Lodges & Vilas Exclusivas'
                    ].map((acc) => (
                      <button
                        key={acc}
                        type="button"
                        onClick={() => setAccommodationStyle(acc)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors border cursor-pointer ${
                          accommodationStyle === acc
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {acc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Dados de Contato */}
                <div className="pt-2 border-t border-neutral-800 space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Onde enviamos a sua proposta preliminar?
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Nome Completo *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Dra. Mariana Vasconcelos"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">E-mail Profissional ou Pessoal *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="mariana@email.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">WhatsApp para Contato Rápido</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+55 11 99999-9999"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Previsão de Viagem</label>
                      <input
                        type="text"
                        value={departureWindow}
                        onChange={(e) => setDepartureWindow(e.target.value)}
                        placeholder="Ex: Setembro a Outubro de 2026"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Observações ou Desejos Especiais (Opcional)</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Comemoração de bodas, interesse em aulas particulares de culinária, restrições alimentares..."
                      className="w-full text-xs px-3.5 py-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sigilo total e sem spam. Consultoria sob medida.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950"
                  >
                    <Send className="w-4 h-4" />
                    <span>Solicitar Estudo de Viagem</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Interactive Live Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-7 sticky top-24 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                <span>Resumo do Briefing</span>
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-white">
                Seu Roteiro Personalizado
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-neutral-300 divide-y divide-neutral-800/80">
              <div className="pt-2 flex items-center justify-between">
                <span className="text-neutral-400">Destino Central:</span>
                <span className="font-semibold text-white text-right">{destinationChoice}</span>
              </div>

              <div className="pt-3.5 flex items-center justify-between">
                <span className="text-neutral-400">Perfil de Viagem:</span>
                <span className="font-semibold text-emerald-300">{travelStyle}</span>
              </div>

              <div className="pt-3.5 flex items-center justify-between">
                <span className="text-neutral-400">Duração Prevista:</span>
                <span className="font-semibold text-white">{durationChoice}</span>
              </div>

              <div className="pt-3.5 flex items-center justify-between">
                <span className="text-neutral-400">Viajantes:</span>
                <span className="font-semibold text-white">{travelers}</span>
              </div>

              <div className="pt-3.5 flex items-center justify-between">
                <span className="text-neutral-400">Estilo de Hospedagem:</span>
                <span className="font-semibold text-white">{accommodationStyle}</span>
              </div>
            </div>

            {/* Inclusions summary in the quote */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
              <span className="font-semibold text-neutral-200 block text-[11px] uppercase tracking-wider">
                Incluso em toda assessoria Latitude:
              </span>
              <p className="flex items-center gap-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Concierge 24/7 com linha direta em português</span>
              </p>
              <p className="flex items-center gap-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Vouchers digitais e itinerário offline em app</span>
              </p>
              <p className="flex items-center gap-2 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Seguro viagem de alta cobertura internacional</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
