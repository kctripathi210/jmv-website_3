import { useState } from 'react';
import { Zap, Cpu, Code2, Settings, ChevronRight } from 'lucide-react';

const DISCIPLINES = [
  {
    id: 'electrical',
    number: '01',
    icon: Zap,
    title: 'Electrical Engineering',
    tagline: 'Ground Truth. Precision Safety.',
    description:
      'Decades of expertise in earthing system design, lightning risk assessment, surge coordination, and high-voltage protection for mission-critical infrastructure.',
    color: '#F59E0B',
    capabilities: [
      'CDEGS Software — advanced grounding analysis',
      'IEC 62305 Lightning Protection Design',
      'Step & Touch Potential Studies',
      'HV/MV Earthing System Commissioning',
      'Substation Surge Coordination Studies',
      'SPD Selection & Coordination (Types 1/2/3)',
    ],
    tags: ['CDEGS', 'IEC 62305', 'HV/MV', 'SPD'],
  },
  {
    id: 'electronics',
    number: '02',
    icon: Cpu,
    title: 'Electronics & Embedded',
    tagline: 'Born in India. Built to Last.',
    description:
      'Full-cycle in-house electronics development — from PCB design and firmware to EMC-tested hardware deployed in extreme rail and defence environments.',
    color: '#3B82F6',
    capabilities: [
      'In-house PCB Design & Assembly (SMT/THT)',
      'FPGA & Microcontroller Firmware',
      'Industrial Sensor Node Development',
      'EMI/EMC Testing Compliance',
      'MIL-SPEC & Railway EN50155 Grade HW',
      'Low-power IoT Edge Modules',
    ],
    tags: ['PCB', 'FPGA', 'IoT Edge', 'EN50155'],
  },
  {
    id: 'software',
    number: '03',
    icon: Code2,
    title: 'Software & AI',
    tagline: 'Data Pipelines. Predictive Intelligence.',
    description:
      'Cloud-native SCADA dashboards, machine-learning anomaly detection, and distributed telemetry engines processing millions of sensor events daily.',
    color: '#22C55E',
    capabilities: [
      'Real-time SCADA & HMI Dashboards',
      'Predictive Maintenance ML Models',
      'Distributed Acoustic Signal Processing',
      'REST/MQTT IoT Data Pipelines',
      'Digital Twin Infrastructure Models',
      'RDSO-compatible Reporting Engine',
    ],
    tags: ['ML/AI', 'SCADA', 'MQTT', 'Digital Twin'],
  },
  {
    id: 'mechanical',
    number: '04',
    icon: Settings,
    title: 'Mechanical Engineering',
    tagline: 'Precision Fabrication. Zero Tolerance.',
    description:
      'CNC machining, polymer extrusion, and structural fabrication for enclosures, cable management systems, and bespoke industrial hardware at scale.',
    color: '#C8102E',
    capabilities: [
      'CNC & VMC Precision Machining',
      'Polyolefin & Composite Cable Duct Extrusion',
      'Sheet Metal & Structural Fabrication',
      'IP67/IP68 Industrial Enclosures',
      'Railway Rope Screen Door Systems',
      'Custom Tooling & Jig Design',
    ],
    tags: ['CNC', 'IP67/68', 'Extrusion', 'Fabrication'],
  },
];

export default function FourDisciplines() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 lg:px-10 max-w-[1440px] mx-auto">
      {/* Section header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-0.5 bg-[#C8102E]" />
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C8102E]">
            Engineering Pillars
          </span>
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Four Disciplines,{' '}
          <span className="text-slate-400">One Integrated Roof</span>
        </h2>
        <p className="text-slate-400 text-base lg:text-lg max-w-2xl leading-relaxed">
          Vertical integration across all engineering dimensions enables JMV LPS to
          deliver turn-key infrastructure solutions with unmatched quality control,
          faster timelines, and sovereign manufacturing accountability.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {DISCIPLINES.map((d) => {
          const Icon = d.icon;
          const isHovered = hovered === d.id;

          return (
            <div
              key={d.id}
              className="discipline-card group"
              style={{
                borderColor: isHovered ? `${d.color}50` : 'rgba(255,255,255,0.06)',
                boxShadow: isHovered
                  ? `0 20px 60px ${d.color}18, 0 0 0 1px ${d.color}40`
                  : undefined,
                transform: isHovered ? 'translateY(-6px)' : undefined,
              }}
              onMouseEnter={() => setHovered(d.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <div
                className="absolute top-5 right-5 text-5xl font-black leading-none select-none"
                style={{ color: `${d.color}12` }}
              >
                {d.number}
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: isHovered ? `${d.color}20` : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${isHovered ? `${d.color}40` : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <Icon
                  size={20}
                  style={{ color: isHovered ? d.color : '#94A3B8' }}
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-white mb-1.5 leading-tight transition-colors duration-200"
                style={{ color: isHovered ? d.color : '#ffffff' }}
              >
                {d.title}
              </h3>
              <div className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
                {d.tagline}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {d.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase"
                    style={{
                      background: `${d.color}14`,
                      color: isHovered ? d.color : '#64748B',
                      border: `1px solid ${isHovered ? `${d.color}30` : 'rgba(255,255,255,0.06)'}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable capabilities */}
              <div
                className="overflow-hidden transition-all duration-400"
                style={{
                  maxHeight: isHovered ? '260px' : '0px',
                  opacity: isHovered ? 1 : 0,
                }}
              >
                <div
                  className="pt-4 border-t mb-2"
                  style={{ borderColor: `${d.color}20` }}
                >
                  <div className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2.5" style={{ color: d.color }}>
                    Core Capabilities
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {d.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2">
                        <ChevronRight size={11} className="mt-0.5 flex-shrink-0" style={{ color: d.color }} />
                        <span className="text-xs text-slate-300 leading-snug">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
