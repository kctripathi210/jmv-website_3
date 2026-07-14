import { useEffect, useState } from 'react';
import { ArrowRight, Activity, Shield, Wifi, Zap } from 'lucide-react';

interface EventLog {
  id: number;
  time: string;
  message: string;
  type: 'ok' | 'warn' | 'info';
}

interface NodeStatus {
  id: string;
  label: string;
  active: boolean;
  value: string;
  unit: string;
}

const INITIAL_NODES: NodeStatus[] = [
  { id: 'das-1', label: 'DAS Fiber Ch.1', active: true,  value: '99.8', unit: '%' },
  { id: 'das-2', label: 'DAS Fiber Ch.2', active: true,  value: '98.2', unit: '%' },
  { id: 'rfms-1',label: 'RFMS Node A',    active: true,  value: '0.02', unit: 'Ω' },
  { id: 'elp-1', label: 'ELP Zone 1',     active: false, value: '—',    unit: '' },
  { id: 'bat-1', label: 'TMMS Bank-3',    active: true,  value: '87.4', unit: '%' },
  { id: 'rdp-1', label: 'RDPMS Loco 07',  active: true,  value: '12.1', unit: 'kN' },
];

const EVENTS_POOL: Omit<EventLog, 'id'>[] = [
  { time: '',   message: 'DAS Fiber Status: 100% Secure',                type: 'ok'   },
  { time: '',   message: 'RFMS Node A — Ground resistance nominal',      type: 'ok'   },
  { time: '',   message: 'TMMS Bank-3 SOH 87% — Scheduled maintenance',  type: 'warn' },
  { time: '',   message: 'RDPMS Loco 07 — Brake force within tolerance', type: 'ok'   },
  { time: '',   message: 'ELP Zone 1 — Sensor reconnect in progress',    type: 'info' },
  { time: '',   message: 'Surge event logged at SPD-Rail-04 (+8kV)',     type: 'warn' },
  { time: '',   message: 'RFMS Node B — Fiber continuity verified',      type: 'ok'   },
  { time: '',   message: 'DAS Ch.2 — Acoustic signature: No anomaly',    type: 'ok'   },
];

const CHART_BARS = [42, 58, 35, 72, 61, 80, 55, 68, 47, 75, 63, 88];

function getTime() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export default function HeroSection() {
  const [nodes, setNodes] = useState<NodeStatus[]>(INITIAL_NODES);
  const [events, setEvents] = useState<EventLog[]>(
    EVENTS_POOL.slice(0, 4).map((e, i) => ({ ...e, id: i, time: getTime() }))
  );
  const [chartData, setChartData] = useState(CHART_BARS);
  const [eventIdCounter, setEventIdCounter] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mutate a random node value slightly
      setNodes((prev) =>
        prev.map((n) => {
          if (!n.active || Math.random() > 0.4) return n;
          const base = parseFloat(n.value);
          if (isNaN(base)) return n;
          const nudge = (Math.random() - 0.5) * 0.8;
          return { ...n, value: Math.max(0, base + nudge).toFixed(1) };
        })
      );

      // Append new event
      setEventIdCounter((c) => {
        const newId = c + 1;
        const pool = EVENTS_POOL[newId % EVENTS_POOL.length];
        setEvents((prev) => [
          { ...pool, id: newId, time: getTime() },
          ...prev.slice(0, 5),
        ]);
        return newId;
      });

      // Shift chart data
      setChartData((prev) => {
        const next = [...prev.slice(1), Math.round(30 + Math.random() * 60)];
        return next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const typeColor = (t: EventLog['type']) =>
    t === 'ok' ? '#22C55E' : t === 'warn' ? '#F59E0B' : '#60A5FA';

  const typeDot = (t: EventLog['type']) =>
    t === 'ok'
      ? 'bg-green-500'
      : t === 'warn'
      ? 'bg-amber-400'
      : 'bg-blue-400';

  return (
    <section className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden grid-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse, #C8102E 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-8"
          style={{
            background: 'radial-gradient(ellipse, #1C4ED8 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/40 bg-[#C8102E]/10 mb-6 fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] pulse-dot" />
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C8102E]">
                Live Infrastructure Intelligence
              </span>
            </div>

            <h1 className="text-4xl xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-white mb-6 fade-in-up fade-in-up-delay-1">
              Engineering India's{' '}
              <span className="text-[#C8102E]">Core Infrastructure</span>{' '}
              Intelligence
            </h1>

            <p className="text-base lg:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl fade-in-up fade-in-up-delay-2">
              JMV LPS Limited delivers vertically integrated deep-tech solutions — from
              in-house PCB assembly and CDEGS-grade earthing systems to AI-powered
              predictive monitoring — all engineered under one roof for Indian Railways,
              Defence, Power Utilities, and Critical Infrastructure.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10 fade-in-up fade-in-up-delay-3">
              {[
                { value: '₹250Cr', label: 'Annual Revenue' },
                { value: '53%',    label: 'YoY Growth' },
                { value: '15+',    label: 'Yrs on Railways' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/8 bg-white/4 px-4 py-3 text-center"
                >
                  <div className="text-2xl font-extrabold text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 fade-in-up fade-in-up-delay-4">
              <button className="btn-crimson flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
                Schedule Technical Demo
                <ArrowRight size={15} />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
                Download Catalogue
              </button>
            </div>
          </div>

          {/* Right: Telemetry dashboard */}
          <div className="relative">
            {/* Outer glow frame */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(200,16,46,0.25)',
                boxShadow: '0 0 60px rgba(200,16,46,0.12), 0 0 120px rgba(200,16,46,0.06)',
                background: 'rgba(15,26,53,0.85)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Terminal top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/6 bg-white/3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-3 text-[11px] text-slate-500 font-mono tracking-wider">
                    JMV-COMMAND v2.4.1 — LIVE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                  <span className="text-[10px] text-green-400 font-mono">CONNECTED</span>
                </div>
              </div>

              <div className="p-5 grid grid-cols-2 gap-4">
                {/* Nodes grid */}
                <div className="col-span-2 grid grid-cols-3 gap-2">
                  {nodes.map((n) => (
                    <div
                      key={n.id}
                      className={`rounded-xl p-3 border transition-all duration-500 ${
                        n.active
                          ? 'border-green-500/25 bg-green-500/5'
                          : 'border-white/6 bg-white/3'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            n.active ? 'bg-green-400 pulse-dot' : 'bg-slate-600'
                          }`}
                        />
                        <span className="text-[9px] text-slate-500 font-mono">{n.id.toUpperCase()}</span>
                      </div>
                      <div className="text-base font-bold font-mono text-white">
                        {n.value}
                        <span className="text-xs text-slate-500 ml-0.5">{n.unit}</span>
                      </div>
                      <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{n.label}</div>
                    </div>
                  ))}
                </div>

                {/* Waveform chart */}
                <div className="col-span-2 rounded-xl border border-white/6 bg-white/3 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <Activity size={12} className="text-[#C8102E]" />
                      <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wide">
                        Telemetry Stream — RFMS
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">
                      {getTime()}
                    </span>
                  </div>
                  <div className="flex items-end gap-0.5 h-14">
                    {chartData.map((v, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all duration-700"
                        style={{
                          height: `${v}%`,
                          background:
                            i === chartData.length - 1
                              ? '#C8102E'
                              : `rgba(200,16,46,${0.25 + (i / chartData.length) * 0.35})`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Event log */}
                <div className="col-span-2 rounded-xl border border-white/6 bg-white/3 p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Wifi size={11} className="text-slate-500" />
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                      Event Log
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 overflow-hidden" style={{ maxHeight: 100 }}>
                    {events.map((ev) => (
                      <div
                        key={ev.id}
                        className="flex items-start gap-2 count-up"
                        style={{ animationDuration: '0.3s' }}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${typeDot(ev.type)}`}
                          style={{ color: typeColor(ev.type) }}
                        />
                        <span className="text-[10px] font-mono text-slate-400 flex-1 leading-tight">
                          <span className="text-slate-600 mr-1">[{ev.time}]</span>
                          {ev.message}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick stats row */}
                {[
                  { icon: Shield, label: 'Compliance', value: '100%', color: '#22C55E' },
                  { icon: Zap,    label: 'Uptime SLA', value: '99.97%', color: '#C8102E' },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/6 bg-white/3 p-3 flex items-center gap-3"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${s.color}18` }}
                      >
                        <Icon size={14} style={{ color: s.color }} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white font-mono">{s.value}</div>
                        <div className="text-[10px] text-slate-500">{s.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 rounded-xl px-4 py-2.5 shadow-xl"
              style={{
                background: 'rgba(11,19,43,0.95)',
                border: '1px solid rgba(200,16,46,0.3)',
              }}
            >
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">RDSO Approved</div>
              <div className="text-sm font-bold text-white">Indian Railways</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
