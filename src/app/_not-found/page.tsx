import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
      <div className="mx-4 max-w-xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Page not found</p>
        <h1 className="mt-5 text-5xl font-semibold text-white">404</h1>
        <p className="mt-4 text-slate-400">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
