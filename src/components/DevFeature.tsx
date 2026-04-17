export default function DevFeature() {
  return (
    <section className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 text-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
        <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Embedded Dev
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Hardware-inspired status panel
          </h2>
          <p className="mt-5 max-w-2xl text-slate-300 sm:text-lg">
            A modern portfolio piece that feels like a board-level dashboard — perfect for firmware, sensors, and system design.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Voltage</p>
              <p className="mt-3 text-3xl font-semibold text-orange-400">3.3V</p>
              <p className="mt-2 text-sm text-slate-500">Stable MCU supply</p>
            </div>
            <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Firmware</p>
              <p className="mt-3 text-3xl font-semibold text-sky-400">v1.2.0</p>
              <p className="mt-2 text-sm text-slate-500">Release candidate ready</p>
            </div>
            <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Sensors</p>
              <p className="mt-3 text-3xl font-semibold text-emerald-300">6 active</p>
              <p className="mt-2 text-sm text-slate-500">Monitoring temperature and load</p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Signal strength</span>
              <span className="text-slate-200">92%</span>
            </div>
            <div className="mt-4 flex h-4 gap-2 rounded-full bg-slate-800 p-1">
              <div className="signal-bar h-full w-1/2 rounded-full bg-gradient-to-r from-orange-400 via-orange-300 to-sky-400" />
              <div className="signal-bar h-full w-1/3 rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-orange-300" />
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Visual status for embedded systems, sensors, and board health in a compact card.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_30px_40px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-500">Why it fits</p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-950">Firmware and hardware vibes</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Use this section to tell visitors that you build systems, combine software with hardware, and move data from sensors into action.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              Real-time status cards for boards, firmware, and sensors.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
              Clean blue-orange palette inspired by electronics and signal displays.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-950" />
              Great for embedded work, demos, and portfolio storytelling.
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-950/95 p-6 text-slate-100 shadow-[0_30px_40px_rgba(15,23,42,0.18)]">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Board insights</p>
          <div className="mt-5 grid gap-4">
            <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
              <p className="text-sm text-slate-400">CPU</p>
              <p className="mt-2 text-xl font-semibold text-white">ARM Cortex-M4</p>
            </div>
            <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
              <p className="text-sm text-slate-400">Protocol</p>
              <p className="mt-2 text-xl font-semibold text-white">MQTT / UART</p>
            </div>
            <div className="rounded-3xl bg-slate-900/95 p-5 ring-1 ring-slate-700/60">
              <p className="text-sm text-slate-400">Toolkit</p>
              <p className="mt-2 text-xl font-semibold text-white">C, Python, Linux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
