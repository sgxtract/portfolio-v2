import { LuArrowUpRight, LuMail } from "react-icons/lu";
import { siteConfig } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl rounded-lg border border-border bg-surface px-8 py-16 text-center sm:px-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-muted">
          Have a project in mind, or just want to talk shop about a stack? My
          inbox is open.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
        >
          <LuMail className="h-4 w-4" />
          {siteConfig.email}
          <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
