import Link from "next/link";
import { personal, projectCards, experience } from "@/lib/siteData";
import DevFeature from "@/components/DevFeature";
import ProjectCard from "@/components/ProjectCard";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.34),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.18),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(249,115,22,0.14),transparent_14%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_75%,rgba(249,115,22,0.10),transparent_12%)]" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Project Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Embedded systems and firmware cards
            </h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              This dashboard shows your project cards, hardware-inspired feature panel, and contact CTA in one place.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
          >
            Back to home
          </Link>
        </div>

        <DevFeature />

        <section className="mt-16 rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 text-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Featured Cards
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Cards for projects, links, and quick descriptions.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-400 sm:text-right">
              Share your work with clean, easy-to-scan cards that invite visitors to click through.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((card) => (
              <ProjectCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.1)] sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Ready to add a new card or launch a project?
              </h2>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Email Me
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-slate-400">
            This dashboard is a separate page from the home landing view and keeps your portfolio focused.
          </p>
        </section>
      </div>
    </div>
  );
}
