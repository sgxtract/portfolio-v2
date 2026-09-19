import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="px-6 py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-text-muted">
            A few projects that show how I approach a full stack, from schema to
            shipped interface.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <article
              key={project.index}
              className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8"
            >
              <span className="font-mono text-sm text-text-muted">
                {project.index}
              </span>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-medium text-text">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 font-mono text-xs text-text-muted">
                    {project.repoHref && (
                      <a
                        href={project.repoHref}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                      >
                        <LuGithub className="h-3.5 w-3.5" />
                        Source
                      </a>
                    )}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                      >
                        Visit
                        <LuArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 max-w-2xl text-text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
