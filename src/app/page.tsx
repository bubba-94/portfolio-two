import Link from "next/link";
import { personal } from "@/lib/siteData";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-900 to-orange-600 px-6 py-24 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.45),_transparent_25%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.35),_transparent_25%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(249,115,22,0.14),transparent_14%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(249,115,22,0.12),transparent_16%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.10),transparent_12%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col justify-center gap-16 text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-0">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
              Developer
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-200 sm:text-2xl">
              {personal.title}
            </p>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              {personal.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
              >
                Experience
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
              >
                About
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
