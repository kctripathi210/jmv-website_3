import { ArrowUp, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import jmvLogo from '../../public/asset/JMV_logo.png';

const IOT_LINKS = [
  'Remote Fiber Monitoring (RFMS)',
  'Distributed Acoustic Sensing (DAS)',
  'Predictive Monitoring (RDPMS)',
  'ELP Monitoring System',
  'Digital Earthing Monitor',
  'Battery Health Monitor (TMMS)',
];

const HARDWARE_LINKS = [
  'Earthing & Bonding Solutions',
  'Lightning Protection Systems',
  'Surge Protection Devices',
  'Cable Duct Systems',
  'Railway Signalling Products',
  'IP Surveillance Systems',
];

const CORPORATE_LINKS = [
  'About JMV LPS Limited',
  'Technical Catalogues',
  'Compliance & RDSO Letters',
  'Careers',
  'Blog & News',
  'Contact / RFQ',
];

const CERTIFICATIONS = ['RDSO', 'BIS', 'ISO 9001', 'DGQA', 'IEC 62305', 'CPRI'];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#070E1F] border-t border-white/6 relative">
      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-5">
              <img
                src={jmvLogo}
                alt="JMV LPS Limited"
                className="h-14 w-auto object-contain"
                style={{ filter: 'brightness(1.08) drop-shadow(0 2px 8px rgba(200,16,46,0.35))' }}
              />
              <div className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-2">
                Since 2008
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              India's Deep-Tech Infrastructure Intelligence Company. Vertically
              integrated engineering across Electrical, Electronics, Software &
              Mechanical disciplines.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {CERTIFICATIONS.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 text-[9px] font-bold tracking-wide uppercase rounded border border-white/10 text-slate-500"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 mb-3 text-sm text-slate-400">
              <MapPin size={13} className="text-[#C8102E] mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">
                JMV LPS Limited, A-83, Sector-4,<br />
                Noida — 201301, Uttar Pradesh, India
              </span>
            </div>
            <div className="flex items-center gap-2.5 mb-2 text-sm text-slate-400">
              <Phone size={13} className="text-[#C8102E] flex-shrink-0" />
              +91 120 444 4444
            </div>
            <div className="flex items-center gap-2.5 mb-6 text-sm text-slate-400">
              <Mail size={13} className="text-[#C8102E] flex-shrink-0" />
              info@jmvlps.com
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 border border-white/6 hover:border-white/15 transition-all duration-150"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: IoT Systems */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C8102E] mb-5">
              IoT Sensing Systems
            </h4>
            <ul className="flex flex-col gap-2">
              {IOT_LINKS.map((link) => (
                <li key={link}>
                  <button className="text-sm text-slate-400 hover:text-white transition-colors duration-150 text-left leading-snug group flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#C8102E] transition-colors flex-shrink-0" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hardware */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C8102E] mb-5">
              Hardware Engineering
            </h4>
            <ul className="flex flex-col gap-2">
              {HARDWARE_LINKS.map((link) => (
                <li key={link}>
                  <button className="text-sm text-slate-400 hover:text-white transition-colors duration-150 text-left leading-snug group flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#C8102E] transition-colors flex-shrink-0" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C8102E] mb-5">
              Corporate & Resources
            </h4>
            <ul className="flex flex-col gap-2 mb-6">
              {CORPORATE_LINKS.map((link) => (
                <li key={link}>
                  <button className="text-sm text-slate-400 hover:text-white transition-colors duration-150 text-left leading-snug group flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#C8102E] transition-colors flex-shrink-0" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            {/* Demo CTA card */}
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(200,16,46,0.08)',
                border: '1px solid rgba(200,16,46,0.2)',
              }}
            >
              <div className="text-xs font-bold text-white mb-1">Schedule a Technical Demo</div>
              <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                Speak with our engineers. Get a product walkthrough tailored to your sector.
              </p>
              <button className="btn-crimson text-xs font-bold px-4 py-2 rounded-lg w-full">
                Book Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span>&copy; 2026 JMV LPS Limited. All rights reserved. | Design & Developed By CSIPL</span>
              <span className="hidden md:inline text-slate-700">|</span>
              <button className="hover:text-slate-400 transition-colors">Privacy Policy</button>
              <span className="text-slate-700">|</span>
              <button className="hover:text-slate-400 transition-colors">Terms of Use</button>
              <span className="text-slate-700">|</span>
              <button className="hover:text-slate-400 transition-colors">Sitemap</button>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span>CIN: U74999UP2008PLC034XXX</span>
              <span className="text-slate-700">|</span>
              <span>GST: 09AAAJJ1234F1Z5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-[#C8102E] text-white shadow-xl shadow-[#C8102E]/30 hover:bg-[#E01535] transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Back to top"
      >
        <ArrowUp size={16} strokeWidth={2.5} />
      </button>
    </footer>
  );
}
