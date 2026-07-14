const CREDENTIALS = [
  'RDSO Approved Infrastructure',
  'BIS Certified Products',
  '₹250 Cr Annual Revenue',
  '53% YoY Growth',
  'Make In India Since 2008',
  '15+ Years on Indian Railways',
  '100+ PSUs & Defence Agencies',
  'ISO 9001:2015 Certified',
  'IEC 62305 Compliant',
  'CPRI Tested & Approved',
  'DGQA Empanelled Vendor',
];

export default function CredentialsTicker() {
  const items = [...CREDENTIALS, ...CREDENTIALS];

  return (
    <div className="relative bg-[#0F1A35] border-y border-white/6 overflow-hidden">
      {/* Edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[#0F1A35] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[#0F1A35] to-transparent" />

      <div className="py-2.5 overflow-hidden">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-2 flex-shrink-0">
              <span className="text-xs font-semibold tracking-[0.08em] uppercase text-slate-300 whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
