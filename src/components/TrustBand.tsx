import { Shield, Award, Factory, TrendingUp, ArrowRight } from 'lucide-react';

const TRUST_ITEMS = [
  {
    icon: Award,
    label: 'RDSO Approved',
    sublabel: 'Indian Railways',
    color: '#C8102E',
  },
  {
    icon: Shield,
    label: 'BIS Certified',
    sublabel: 'Bureau of Indian Standards',
    color: '#3B82F6',
  },
  {
    icon: Factory,
    label: 'Make In India',
    sublabel: 'Sovereign Manufacturing',
    color: '#22C55E',
  },
  {
    icon: TrendingUp,
    label: '₹250 Cr Revenue',
    sublabel: '53% YoY Growth',
    color: '#F59E0B',
  },
];

export default function TrustBand() {
  return (
    <section className="py-20 border-y border-white/6 bg-[#0F1A35]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-[#C8102E]" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C8102E]">
              Why JMV LPS
            </span>
            <div className="w-8 h-0.5 bg-[#C8102E]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Trusted by India's Most Critical Agencies
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Over 100 PSUs, Defence agencies, and Railway zones rely on JMV LPS
            infrastructure intelligence every day.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-[#1C2541]/40 p-6 text-center hover:border-white/15 transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-200 group-hover:scale-110"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <div className="text-base font-bold text-white mb-0.5">{item.label}</div>
                <div className="text-xs text-slate-500">{item.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Client logos placeholder band */}
        <div className="border-t border-white/6 pt-10">
          <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-600 text-center mb-6">
            Deployed Across
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'Indian Railways',
              'DMRC Delhi Metro',
              'NTPC Limited',
              'ONGC',
              'Army Corps of Engineers',
              'BSNL / MTNL',
              'PowerGrid Corp.',
              'HPCL Refinery',
              'CISF',
              'Border Security Force',
            ].map((org) => (
              <div
                key={org}
                className="px-4 py-2 rounded-lg border border-white/8 bg-white/3 text-xs text-slate-400 font-medium hover:border-white/15 hover:text-white transition-all duration-150 cursor-default"
              >
                {org}
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(200,16,46,0.12) 0%, rgba(28,77,199,0.1) 100%)',
            border: '1px solid rgba(200,16,46,0.2)',
          }}
        >
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Ready to Deploy Intelligence Infrastructure?
            </h3>
            <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
              Engage our engineering team for a technical consultation, site survey, or
              product demonstration tailored to your operational requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="btn-crimson flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold">
                Schedule Technical Demo
                <ArrowRight size={14} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 hover:border-white/25 hover:bg-white/5 transition-all duration-200">
                Download Capability Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
