import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg text-text">
      <h1 className="font-display text-4xl font-semibold">NJA Systems</h1>
      <ThemeToggle />
    </main>
  );
}