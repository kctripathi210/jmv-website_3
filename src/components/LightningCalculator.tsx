import { useState } from 'react';
import { Zap, AlertTriangle, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

const FACILITY_TYPES = [
  'Select Facility Architecture',
  'Railway Station / Junction',
  'Metro Rail Depot',
  'Substation / Grid Node',
  'Defence Installation',
  'Telecom Tower / BTS',
  'Oil & Gas Terminal / Refinery',
  'Industrial Manufacturing Plant',
  'Data Centre / IT Infrastructure',
];

const HEIGHT_BANDS = [
  'Select Structure Height',
  '< 10 m (Low-rise)',
  '10 – 20 m (Medium-rise)',
  '20 – 45 m (High-rise)',
  '45 – 100 m (Tall structure)',
  '> 100 m (Very tall / Tower)',
];

const ZONES = [
  'Select Lightning Flash Density Zone',
  'Zone I — Low (Ng < 2 / km²/yr)',
  'Zone II — Moderate (Ng 2–6)',
  'Zone III — High (Ng 6–10)',
  'Zone IV — Very High (Ng > 10)',
];

const RISK_MATRIX: Record<string, { level: 'low' | 'medium' | 'high' | 'critical'; label: string; description: string; recommendations: string[] }> = {
  default: {
    level: 'medium',
    label: 'Moderate Risk',
    description: 'Standard protection measures recommended per IS/IEC 62305.',
    recommendations: [
      'Install Type 2 SPD at main distribution board',
      'Verify earthing resistance < 10Ω',
      'Review bonding continuity across structure',
    ],
  },
};

function computeRisk(facility: string, height: string, zone: string) {
  const isHighFacility = facility.includes('Refinery') || facility.includes('Defence') || facility.includes('Data Centre');
  const isHighRise = height.includes('>') || height.includes('45 – 100') || height.includes('100');
  const isHighDensity = zone.includes('IV') || zone.includes('III');

  const score = (isHighFacility ? 2 : 0) + (isHighRise ? 2 : 0) + (isHighDensity ? 2 : 0);

  if (score >= 5) return {
    level: 'critical' as const,
    label: 'Critical Risk — Immediate Action Required',
    description: 'Facility profile indicates very high probability of direct/indirect lightning damage per IEC 62305-2 risk analysis.',
    recommendations: [
      'Deploy Type 1 + Type 2 combined SPD coordination',
      'Install Class I LPS with air termination network',
      'Achieve earthing resistance < 1Ω (critical sites)',
      'Commission DAS-based physical perimeter monitoring',
      'Conduct full IEC 62305-4 internal protection audit',
    ],
  };
  if (score >= 3) return {
    level: 'high' as const,
    label: 'High Risk — Enhanced Protection Mandatory',
    description: 'Elevated exposure based on height, zone, and facility criticality. Enhanced protection system required.',
    recommendations: [
      'Class II LPS with meshed air termination network',
      'Type 1 + Type 2 SPD at entry points',
      'Earthing resistance < 5Ω with regular RFMS monitoring',
      'Annual ground resistance inspection protocol',
    ],
  };
  if (score >= 1) return RISK_MATRIX.default;
  return {
    level: 'low' as const,
    label: 'Low Risk — Basic Protection Sufficient',
    description: 'Standard IS 2309 / IEC 62305 Class III/IV protection with routine earthing verification.',
    recommendations: [
      'Class III LPS — simplified air termination',
      'Type 2 SPD at distribution panels',
      'Earthing resistance < 10Ω',
    ],
  };
}

export default function LightningCalculator() {
  const [facility, setFacility] = useState(FACILITY_TYPES[0]);
  const [height, setHeight] = useState(HEIGHT_BANDS[0]);
  const [zone, setZone] = useState(ZONES[0]);
  const [result, setResult] = useState<ReturnType<typeof computeRisk> | null>(null);
  const [scanning, setScanning] = useState(false);

  const canRun =
    facility !== FACILITY_TYPES[0] && height !== HEIGHT_BANDS[0] && zone !== ZONES[0];

  const handleScan = () => {
    if (!canRun) return;
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setResult(computeRisk(facility, height, zone));
      setScanning(false);
    }, 1600);
  };

  const riskColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
    low:      { bg: 'rgba(34,197,94,0.06)',  border: 'rgba(34,197,94,0.25)',  text: '#86EFAC', icon: '#22C55E' },
    medium:   { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.25)', text: '#FCD34D', icon: '#F59E0B' },
    high:     { bg: 'rgba(239,68,68,0.06)',  border: 'rgba(239,68,68,0.25)',  text: '#FCA5A5', icon: '#EF4444' },
    critical: { bg: 'rgba(200,16,46,0.08)',  border: 'rgba(200,16,46,0.4)',   text: '#FCA5A5', icon: '#C8102E' },
  };

  const rc = result ? riskColors[result.level] : null;

  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#C8102E]" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C8102E]">
              Compliance Tool
            </span>
            <div className="w-8 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Lightning Risk Assessment
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Instant IEC 62305 preliminary risk classification for your facility.
            Submit results to receive a full technical proposal from our engineers.
          </p>
        </div>

        {/* Glass card */}
        <div
          className="max-w-3xl mx-auto rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          style={{
            background: 'rgba(28, 37, 65, 0.5)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-6 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #C8102E, transparent)' }}
          />

          <div className="relative z-10">
            {/* Icon header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(200,16,46,0.12)', border: '1px solid rgba(200,16,46,0.25)' }}
              >
                <Zap size={26} className="text-[#C8102E]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Preliminary Risk Scan</h3>
                <p className="text-sm text-slate-400">IEC 62305-2 Classification</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
                <span className="text-[11px] text-green-400 font-medium">Engine Online</span>
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Facility Architecture', value: facility, options: FACILITY_TYPES, setter: setFacility },
                { label: 'Structure Height',       value: height,   options: HEIGHT_BANDS,   setter: setHeight   },
                { label: 'Flash Density Zone',     value: zone,     options: ZONES,          setter: setZone     },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-1.5">
                    {f.label}
                  </label>
                  <div className="relative">
                    <select
                      value={f.value}
                      onChange={(e) => { f.setter(e.target.value); setResult(null); }}
                      className="w-full appearance-none bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 pr-9 focus:outline-none focus:border-[#C8102E]/50 focus:bg-white/8 transition-all cursor-pointer"
                    >
                      {f.options.map((o) => (
                        <option key={o} value={o} style={{ background: '#1C2541' }}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleScan}
              disabled={!canRun || scanning}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                canRun && !scanning
                  ? 'btn-crimson glow-crimson cursor-pointer'
                  : 'bg-white/6 text-slate-500 cursor-not-allowed'
              }`}
            >
              {scanning ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Running Compliance & Risk Scan...
                </>
              ) : (
                <>
                  <Zap size={15} />
                  Run Compliance & Risk Scan
                  {canRun && <ArrowRight size={14} />}
                </>
              )}
            </button>

            {/* Result */}
            {result && rc && (
              <div
                className="mt-6 rounded-2xl p-6 count-up"
                style={{
                  background: rc.bg,
                  border: `1px solid ${rc.border}`,
                  animationDuration: '0.4s',
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  {result.level === 'low' ? (
                    <CheckCircle size={18} style={{ color: rc.icon }} className="flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle size={18} style={{ color: rc.icon }} className="flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: rc.text }}>
                      {result.label}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{result.description}</p>
                  </div>
                </div>

                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-2">
                  Recommended Actions
                </div>
                <ul className="flex flex-col gap-1.5">
                  {result.recommendations.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <ArrowRight size={10} className="mt-1 flex-shrink-0" style={{ color: rc.icon }} />
                      <span className="text-xs text-slate-300 leading-snug">{r}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-5 btn-crimson flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold w-full justify-center">
                  Request Full Technical Proposal
                  <ArrowRight size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
