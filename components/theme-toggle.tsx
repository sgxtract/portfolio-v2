"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text transition-colors hover:border-accent"
    >
      {isDark ? <LuMoon className="h-4 w-4" /> : <LuSun className="h-4 w-4" />}
    </button>
  );
}