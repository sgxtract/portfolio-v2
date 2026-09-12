"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./theme-provider";

type Particle = { x: number; y: number; vx: number; vy: number };

const LINK_DISTANCE = 130;
const MOUSE_LINK_DISTANCE = 180;

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  // Read the latest theme inside the animation loop without needing to
  // tear down and rebuild the whole particle system every time it changes.
  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrame = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    function makeParticles() {
      const count = Math.round((width * height) / 13000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      makeParticles();
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);
      const isDark = themeRef.current !== "light";
      const dotColor = isDark
        ? "rgba(230,232,240,0.55)"
        : "rgba(20,23,28,0.45)";
      const lineRGB = isDark ? "108,139,255" : "58,95,247";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // Connect nearby particles to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(${lineRGB}, ${(1 - dist / LINK_DISTANCE) * 0.35})`;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }

        // Connect particles to the mouse
        if (mouse.active) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(${lineRGB}, ${(1 - dist / MOUSE_LINK_DISTANCE) * 0.5})`;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.fillStyle = dotColor;
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(step);
      }
    }

    function handlePointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function handlePointerLeave() {
      mouse.active = false;
    }

    resize();
    step();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    // Cleanup: runs if this component ever unmounts, or before the
    // effect re-runs. Without this, resize/pointermove listeners and
    // the animation frame loop would keep running forever, even after
    // the canvas is gone — a classic memory leak.
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
