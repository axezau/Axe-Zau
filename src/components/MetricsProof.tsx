export default function MetricsProof() {
  const metrics = [
    {
      value: '14',
      unit: 'anos',
      label: 'De curadoria independente',
      description: 'Fundada em 2012 com foco estrito em viagens de autor e pequenas expedições.'
    },
    {
      value: '98.6%',
      unit: '',
      label: 'Índice de satisfação',
      description: 'Auditoria de retorno espontâneo dos viajantes nos últimos 36 meses.'
    },
    {
      value: '42',
      unit: 'países',
      label: 'Com parceiros locais homologados',
      description: 'Guias ornitólogos, historiadores e anfitriões com acesso prioritário.'
    },
    {
      value: '24/7',
      unit: '',
      label: 'Suporte concierge bilíngue',
      description: 'Linha privativa de emergência e suporte logístico em tempo real.'
    }
  ];

  return (
    <section className="bg-neutral-950 text-white border-y border-neutral-800/80 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/80">
          {metrics.map((metric, idx) => (
            <div key={idx} className={`${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-8 lg:pl-10' : ''}`}>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-serif-luxury text-3xl lg:text-4xl font-semibold tracking-tight text-white tabular-nums">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="text-sm font-medium text-emerald-400">
                    {metric.unit}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-neutral-200 mb-1">
                {metric.label}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
