import { useState, useRef, useEffect } from 'react';
import jmvLogo from '../../public/asset/JMV_logo.png';
import {
  Menu, X, ChevronDown, Radio, Cpu, Building2, BookOpen, CalendarCheck,
  Wifi, Zap, Shield, Eye, Layers, Train, Flame, PhoneCall
} from 'lucide-react';

const NAV_ITEMS = [
  {
    label: 'Core IoT Systems',
    icon: Wifi,
    columns: [
      {
        heading: 'Monitoring & Sensing',
        links: [
          { label: 'Remote Fiber Monitoring System (RFMS)', icon: Radio },
          { label: 'Distributed Acoustic Sensing (DAS)', icon: Layers },
          { label: 'Remote Diagnostic & Predictive Monitoring (RDPMS)', icon: Cpu },
          { label: 'Earthing, Lightning & Protection Monitoring (ELP)', icon: Zap },
          { label: 'Digital Earthing & Ground Resistance Monitoring', icon: Shield },
          { label: 'Battery Health Monitoring System (TMMS)', icon: Radio },
        ],
      },
    ],
  },
  {
    label: 'Industrial Hardware',
    icon: Cpu,
    columns: [
      {
        heading: 'Electrical Safety',
        links: [
          { label: 'Earthing & Bonding Solutions', icon: Zap },
          { label: 'Lightning Protection Systems', icon: Zap },
          { label: 'Surge Protection Devices (SPD)', icon: Shield },
        ],
      },
      {
        heading: 'Cable & Railway',
        links: [
          { label: 'Polyolefin Cable Ducts', icon: Layers },
          { label: 'Composite Engineering Plastic Ducts', icon: Layers },
          { label: 'Signalling & Telecom Products', icon: Radio },
          { label: 'Rope Screen Doors & Loco Propulsion', icon: Train },
        ],
      },
      {
        heading: 'Surveillance & Security',
        links: [
          { label: 'Industrial IP Camera Systems', icon: Eye },
          { label: 'Mobile NV Recorders', icon: Eye },
          { label: 'Field Deployable Tablet PCs', icon: Cpu },
        ],
      },
    ],
  },
  {
    label: 'Sectors',
    icon: Building2,
    columns: [
      {
        heading: 'Verticals Served',
        links: [
          { label: 'Smart Mobility & Metro Rail', icon: Train },
          { label: 'Defence Perimeters & Critical Security', icon: Shield },
          { label: 'Power Utilities & Grid Infrastructure', icon: Zap },
          { label: 'Telecom Tower & Network Infrastructure', icon: Radio },
          { label: 'Oil & Gas Pipeline Monitoring', icon: Flame },
        ],
      },
    ],
  },
  {
    label: 'Corporate',
    icon: BookOpen,
    columns: [
      {
        heading: 'Company',
        links: [
          { label: 'About JMV LPS Limited', icon: Building2 },
          { label: 'Leadership & Governance', icon: BookOpen },
          { label: 'Make In India Initiative', icon: Shield },
          { label: 'Careers at JMV', icon: BookOpen },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Technical Catalogues & Datasheets', icon: BookOpen },
          { label: 'Compliance & RDSO Letters', icon: Shield },
          { label: 'Blog / Technical News', icon: BookOpen },
          { label: 'Contact & RFQ', icon: PhoneCall },
        ],
      },
    ],
  },
];

interface DropdownState {
  index: number | null;
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownState>({ index: null });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openDropdown = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown({ index });
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown({ index: null }), 160);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B132B]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/6'
            : 'bg-[#0B132B]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                src={jmvLogo}
                alt="JMV LPS Limited"
                className="h-10 md:h-12 w-auto object-contain"
                style={{ filter: 'brightness(1.08) drop-shadow(0 1px 4px rgba(200,16,46,0.3))' }}
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item, i) => {
                const Icon = item.icon;
                const isOpen = activeDropdown.index === i;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(i)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isOpen ? 'text-white bg-white/8' : 'text-slate-300 hover:text-white hover:bg-white/6'
                      }`}
                    >
                      <Icon size={14} strokeWidth={2} />
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                      <div
                        className="absolute top-full left-0 pt-2"
                        onMouseEnter={cancelClose}
                        onMouseLeave={closeDropdown}
                      >
                        <div
                          className="rounded-xl p-4 shadow-2xl min-w-[240px]"
                          style={{
                            background: 'rgba(11,19,43,0.97)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(20px)',
                          }}
                        >
                          <div className={`flex gap-6 ${item.columns.length > 1 ? 'min-w-[540px]' : ''}`}>
                            {item.columns.map((col) => (
                              <div key={col.heading} className="flex-1 min-w-[200px]">
                                <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#C8102E] mb-2 px-1">
                                  {col.heading}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                  {col.links.map((link) => {
                                    const LinkIcon = link.icon;
                                    return (
                                      <button
                                        key={link.label}
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/6 transition-all duration-150 text-left w-full"
                                      >
                                        <LinkIcon size={13} className="text-slate-500 flex-shrink-0" />
                                        <span className="leading-tight">{link.label}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+911204444444"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <PhoneCall size={14} />
                <span className="text-xs font-medium">+91 120 444 4444</span>
              </a>
              <button className="bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-[#C8102E]/30 active:scale-95 flex items-center gap-2 px-4 py-2 rounded-lg text-sm">
                <CalendarCheck size={14} />
                Schedule Technical Demo
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/8 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t border-white/8 overflow-y-auto"
            style={{ background: 'rgba(11,19,43,0.98)', maxHeight: 'calc(100vh - 68px)' }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => {
                const Icon = item.icon;
                const expanded = mobileExpanded === i;
                return (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/6 transition-colors"
                      onClick={() => setMobileExpanded(expanded ? null : i)}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon size={15} className="text-slate-400" />
                        {item.label}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`text-slate-500 transition-transform ${expanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {expanded && (
                      <div className="ml-4 mt-1 mb-2 flex flex-col gap-0.5 border-l border-white/8 pl-3">
                        {item.columns.flatMap((col) =>
                          col.links.map((link) => {
                            const LinkIcon = link.icon;
                            return (
                              <button
                                key={link.label}
                                className="flex items-center gap-2 py-2 px-2 text-sm text-slate-400 hover:text-white transition-colors rounded text-left"
                              >
                                <LinkIcon size={12} className="flex-shrink-0" />
                                {link.label}
                              </button>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="mt-3 pt-3 border-t border-white/8">
                <button className="bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold transition-all duration-200 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm">
                  <CalendarCheck size={15} />
                  Schedule Technical Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Header spacer */}
      <div className="h-16 lg:h-[68px]" />
    </>
  );
}
