import { useState } from 'react';
import { X, Check, Calendar, MapPin, Clock, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { Destination } from '../data/travelData';

interface ItineraryModalProps {
  destination: Destination | null;
  onClose: () => void;
  onSelectForQuote: (destination: Destination) => void;
}

export default function ItineraryModal({
  destination,
  onClose,
  onSelectForQuote
}: ItineraryModalProps) {
  const [quickName, setQuickName] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [travelMonth, setTravelMonth] = useState('');
  const [travelersCount, setTravelersCount] = useState('2');
  const [submitted, setSubmitted] = useState(false);

  if (!destination) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickEmail) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-neutral-900 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-neutral-950">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-black/30" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-900/70 hover:bg-neutral-900 text-white backdrop-blur-md transition-colors z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Fechar detalhes do roteiro"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">
              <span>{destination.regionLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{destination.duration}</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
              {destination.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Overview & Pricing strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                Estimativa de Investimento
              </p>
              <p className="text-2xl font-serif-luxury font-semibold text-neutral-900 tabular-nums">
                {destination.priceFrom}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Valores base por viajante em acomodação dupla privativa
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-neutral-600">
              <div>
                <span className="font-semibold block text-neutral-900">Melhor Época</span>
                <span>{destination.bestSeason}</span>
              </div>
              <div className="border-l border-neutral-200 pl-6">
                <span className="font-semibold block text-neutral-900">Formato</span>
                <span>100% Privativo & Sob Medida</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-2">
              Visão Geral da Experiência
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {destination.summary}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-3">
              Momentos Exclusivos Latitude
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
              {destination.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Day by Day overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-4">
              Itinerário Sugerido
            </h3>
            <div className="space-y-4">
              {destination.daysOverview.map((day, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5"
                >
                  <div className="sm:w-32 shrink-0">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                      {day.dayRange}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                      {day.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is Included */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-3">
              O que Está Incluso
            </h3>
            <div className="bg-emerald-50/60 border border-emerald-200/60 rounded-xl p-4">
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                {destination.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Request Form for this specific Trip */}
          <div className="pt-4 border-t border-neutral-200">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-1">
              Deseja este roteiro adaptado para você?
            </h3>
            <p className="text-xs text-neutral-600 mb-4">
              Preencha abaixo para receber a proposta completa deste destino em formato PDF e agendar conversa com nossa curadora.
            </p>

            {submitted ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <Check className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-semibold text-emerald-950 mb-1">
                  Proposta Solicitada com Sucesso!
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Enviamos os detalhes do roteiro para <strong>{quickEmail}</strong>. Nossa equipe entrará em contato via WhatsApp dentro de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      placeholder="Ex: Carlos Albuquerque"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                      placeholder="carlos@email.com"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      placeholder="+55 11 98888-7777"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Mês / Ano Pretendido
                    </label>
                    <input
                      type="text"
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      placeholder="Ex: Outubro de 2026"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Número de Viajantes
                    </label>
                    <select
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-neutral-300 focus:border-emerald-600 focus:outline-none bg-white"
                    >
                      <option value="1">1 viajante (solo privativo)</option>
                      <option value="2">2 viajantes (casal / dupla)</option>
                      <option value="3-4">3 a 4 viajantes (família pequena)</option>
                      <option value="5+">5 ou mais viajantes (grupo de amigos / família)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Seus dados nunca são compartilhados. Resposta em até 24h.</span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectForQuote(destination);
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 border border-neutral-300 hover:border-neutral-400 rounded-lg transition-colors cursor-pointer"
                    >
                      Abrir no Planejador Completo
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Receber Proposta em PDF</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
