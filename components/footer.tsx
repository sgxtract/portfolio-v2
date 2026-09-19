import { socials, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-text-muted">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
