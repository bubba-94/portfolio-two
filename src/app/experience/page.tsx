import Image from "next/image";
import Link from "next/link";
import { education, experience, personal, techCategories } from "@/lib/siteData";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.32),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.14),transparent_14%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(249,115,22,0.10),transparent_12%)]" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="mb-10 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Professional CV
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-3xl text-slate-400">
            {personal.title} with a focus on embedded firmware, device integration, and developer tooling.
            This CV-style page highlights my work history, key results, and the skill stack that supports it.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              About Me
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Contact
            </a>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
                Summary
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Embedded systems, firmware, and production tooling
              </h2>
              <p className="mt-4 text-slate-400">
                I build and maintain firmware for embedded devices, create tooling that improves field updates,
                and deploy consistent pipelines for hardware-focused engineering teams.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5">
                  <p className="text-sm text-slate-400">Years of experience</p>
                  <p className="mt-3 text-3xl font-semibold text-white">6+</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/95 p-5">
                  <p className="text-sm text-slate-400">Primary focus</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Embedded Firmware</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                    Work history
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    Experience highlights
                  </h2>
                </div>
              </div>
              <div className="mt-8 max-h-[42rem] overflow-y-auto space-y-6 pr-2">
                {experience.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">{item.role}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                      </div>
                      <div className="text-sm text-slate-400">
                        <p>{item.dates}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                    Education
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    Academic background
                  </h2>
                </div>
              </div>
              <div className="mt-8 max-h-[42rem] overflow-y-auto space-y-6 pr-2">
                {education.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="rounded-3xl border border-slate-800 bg-slate-900/95 p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">{item.role}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                      </div>
                      <div className="text-sm text-slate-400">
                        <p>{item.dates}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Technology stack
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Tools, languages, and platforms</h2>
              <div className="mt-6 space-y-6">
                {techCategories.map((group) => (
                  <div key={group.title} className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {group.title}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {group.icons.map((icon) => (
                        <div
                          key={icon.name}
                          className="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/95 p-4 text-center transition hover:border-orange-400"
                        >
                              <div className="relative h-8 w-8">
                            <Image
                              src={icon.src}
                              alt={icon.name}
                              title={icon.name}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <span className="sr-only">{icon.name}</span>
                          <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/95 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 opacity-0 transition duration-200 group-hover:opacity-100">
                            {icon.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
                Contact
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Work with me</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Interested in a firmware, embedded, or IoT project? Send a note and I’ll respond with next steps.
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Email {personal.name.split(" ")[0]}
              </a>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
