type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  tag: string;
};

export default function ProjectCard({ title, description, href, cta, tag }: ProjectCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(15,23,42,0.18)]">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-800">
          {tag}
        </span>
        <div className="text-right text-xs text-slate-400 transition group-hover:text-slate-200">
          {cta}
        </div>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
      >
        {cta}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
