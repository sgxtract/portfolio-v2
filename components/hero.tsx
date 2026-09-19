import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="font-mono text-sm text-accent">
            {siteConfig.fullName} · {siteConfig.role} · {siteConfig.location}
          </p>

          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
            Building reliable
            <br />
            web systems.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            {siteConfig.tagline} I work end to end interfaces, APIs, and the
            databases underneath so every layer holds together.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              View my work
              <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-medium text-text transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="relative aspect-[4/5] w-56 sm:w-64 lg:w-80 overflow-hidden rounded-[9rem]">
            <Image
              src="/profile.png"
              alt={`Portrait of ${siteConfig.fullName}`}
              fill
              priority
              sizes="(min-width: 1024px) 320px, 256px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
