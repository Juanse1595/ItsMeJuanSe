"use client";

import { useCallback, useEffect, useState } from "react";
import { quotes, type Quote } from "@/lib/quotes";

const FADE_OUT_MS = 500;

export function Greeting() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(true);

  // Static export: the random pick has to happen on the client, after mount.
  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const close = useCallback(() => {
    setClosing(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setOpen(false), reduced ? 0 : FADE_OUT_MS);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <>
      <noscript>
        <style>{"#greeting{display:none}"}</style>
      </noscript>
      <div
        id="greeting"
        role="dialog"
        aria-modal="true"
        aria-label="Greeting"
        onClick={close}
        className={`fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-bg px-6 transition-opacity duration-500 motion-reduce:transition-none ${
          closing ? "opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          aria-label="Close"
          autoFocus
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-md text-2xl leading-none text-muted transition-colors hover:text-accent"
        >
          ×
        </button>

        {quote && (
          <figure className="greeting-fade-in max-w-2xl text-center">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
              “{quote.text}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted sm:text-base">
              — {quote.author}
              {quote.source && <span>, {quote.source}</span>}
            </figcaption>
            <p className="mt-12 text-xs text-muted">
              Click or press any key to continue
            </p>
          </figure>
        )}
      </div>
    </>
  );
}
