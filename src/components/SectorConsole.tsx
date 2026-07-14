import { useState } from 'react';
import { Train, Shield, Flame, Radio, Activity, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const SECTORS = [
  {
    id: 'railways',
    label: 'Railways',
    icon: Train,
    headline: 'Indian Railways & Metro Rail',
    description:
      'RDSO-approved systems deployed across 4,200+ track-km. From DAS acoustic intrusion detection to TMMS battery monitoring for loco fleets — JMV is the trusted partner of Indian Railways.',
    kpis: [
      { label: 'Track-KM Monitored', value: '4,200+', trend: '+12%', color: '#22C55E' },
      { label: 'Locos on RDPMS', value: '840', trend: '+8%', color: '#3B82F6' },
      { label: 'Signal Assets Protected', value: '12,400', trend: '+15%', color: '#F59E0B' },
      { label: 'RDSO Certifications', value: '17', trend: '—', color: '#C8102E' },
    ],
    products: ['DAS Fiber Intrusion', 'RFMS Ground Monitoring', 'TMMS Battery Health', 'Rope Screen Doors', 'Surge Protection SPD'],
    alert: { type: 'ok', message: 'All RDSO monitoring nodes — operational' },
  },
  {
    id: 'defence',
    label: 'Defence',
    icon: Shield,
    headline: 'Defence & Critical Perimeters',
    description:
      'DGQA empanelled vendor supplying earthing, lightning protection, and distributed acoustic sensing for Army installations, Air Force bases, and strategic perimeter security.',
    kpis: [
      { label: 'Perimeter KM Secured', value: '680+', trend: '+24%', color: '#22C55E' },
      { label: 'Defence Sites', value: '34', trend: '+6%', color: '#3B82F6' },
      { label: 'Intrusion Detections/Yr', value: '2,100', trend: '+31%', color: '#F59E0B' },
      { label: 'DGQA Approvals', value: '9', trend: '—', color: '#C8102E' },
    ],
    products: ['DAS Perimeter Sensing', 'ELP Lightning Protection', 'Digital Earthing Systems', 'Field Tablet PCs', 'IP Surveillance'],
    alert: { type: 'ok', message: 'Perimeter threat index — CLEAR' },
  },
  {
    id: 'oilgas',
    label: 'Oil & Gas',
    icon: Flame,
    headline: 'Oil & Gas Pipeline Infrastructure',
    description:
      'Cathodic protection monitoring, pipeline stray-current analysis, and hazardous-area lightning protection for refineries, terminals, and cross-country pipeline networks.',
    kpis: [
      { label: 'Pipeline-KM Monitored', value: '1,100+', trend: '+18%', color: '#22C55E' },
      { label: 'Refinery Sites', value: '11', trend: '+2%', color: '#3B82F6' },
      { label: 'Corrosion Events Flagged', value: '320/yr', trend: '-14%', color: '#F59E0B' },
      { label: 'OISD Compliance', value: '100%', trend: '—', color: '#C8102E' },
    ],
    products: ['RFMS Ground Resistance', 'ELP Hazardous Area LP', 'DAS Pipeline Leak', 'Surge Protection Class I/II', 'Digital Earthing'],
    alert: { type: 'warn', message: '2 cathodic protection readings pending review' },
  },
  {
    id: 'telecom',
    label: 'Telecom',
    icon: Radio,
    headline: 'Telecom Tower & Network Infrastructure',
    description:
      'Integrated earthing and lightning protection solutions for 26,000+ telecom towers with remote monitoring ensuring TRAI/DoT grid compliance and minimizing equipment damage.',
    kpis: [
      { label: 'Towers Protected', value: '26,000+', trend: '+9%', color: '#22C55E' },
      { label: 'Lightning Events/Yr', value: '8,400', trend: '+5%', color: '#3B82F6' },
      { label: 'Uptime SLA', value: '99.97%', trend: '+0.02%', color: '#F59E0B' },
      { label: 'TRAI Compliance', value: '100%', trend: '—', color: '#C8102E' },
    ],
    products: ['ELP Tower Protection', 'SPD Type 1/2/3', 'Digital Earthing Monitor', 'RFMS Ground Check', 'Remote Alert Dashboard'],
    alert: { type: 'ok', message: 'All tower protection nodes — nominal' },
  },
];

export default function SectorConsole() {
  const [active, setActive] = useState(SECTORS[0].id);
  const sector = SECTORS.find((s) => s.id === active)!;
  const Icon = sector.icon;

  return (
    <section className="py-24 bg-[#0F1A35]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#C8102E]" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C8102E]">
              Sectors Served
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Real-Time Sector Intelligence
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl leading-relaxed">
            Mission-critical deployments across India's most demanding infrastructure verticals,
            with live telemetry KPIs updated from the field.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SECTORS.map((s) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`sector-tab flex items-center gap-2 ${active === s.id ? 'active' : 'inactive'}`}
              >
                <TabIcon size={14} />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          key={sector.id}
          className="grid lg:grid-cols-5 gap-6 count-up"
          style={{ animationDuration: '0.3s' }}
        >
          {/* Left: Description + products */}
          <div className="lg:col-span-2 rounded-2xl border border-white/8 bg-[#1C2541]/50 p-7 flex flex-col justify-between">
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(200,16,46,0.12)', border: '1px solid rgba(200,16,46,0.25)' }}
              >
                <Icon size={22} className="text-[#C8102E]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">{sector.headline}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{sector.description}</p>

              {/* Alert badge */}
              <div
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 mb-6"
                style={{
                  background: sector.alert.type === 'ok' ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
                  border: `1px solid ${sector.alert.type === 'ok' ? 'rgba(34,197,94,0.2)' : 'rgba(245,158,11,0.25)'}`,
                }}
              >
                {sector.alert.type === 'ok' ? (
                  <CheckCircle size={13} className="text-green-400 flex-shrink-0" />
                ) : (
                  <AlertTriangle size={13} className="text-amber-400 flex-shrink-0" />
                )}
                <span
                  className="text-xs font-medium"
                  style={{ color: sector.alert.type === 'ok' ? '#86EFAC' : '#FCD34D' }}
                >
                  {sector.alert.message}
                </span>
              </div>

              <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 mb-2.5">
                Deployed Solutions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {sector.products.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-300 bg-white/5 border border-white/8"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: KPI cards */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {sector.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-white/8 bg-[#1C2541]/50 p-6 relative overflow-hidden"
              >
                {/* BG accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-5"
                  style={{ background: kpi.color, transform: 'translate(40%, -40%)' }}
                />

                <div className="flex items-start justify-between mb-3">
                  <Activity size={14} style={{ color: kpi.color }} />
                  <div
                    className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${kpi.color}14`,
                      color: kpi.color,
                    }}
                  >
                    <TrendingUp size={9} />
                    {kpi.trend}
                  </div>
                </div>
                <div
                  className="text-3xl font-extrabold tracking-tight mb-1"
                  style={{ color: kpi.color }}
                >
                  {kpi.value}
                </div>
                <div className="text-xs text-slate-400 font-medium leading-tight">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
