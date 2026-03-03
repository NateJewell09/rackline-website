"use client";
import { useState } from "react";
import Link from "next/link";

const DeerLogo = () => (
  <svg className="w-7 h-7 text-brand-orange" viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 36c-6 0-11 4-13 9h26c-2-5-7-9-13-9z"/>
    <path d="M32 34c3.3 0 6-3.1 6-7s-2.7-7-6-7-6 3.1-6 7 2.7 7 6 7z"/>
    {/* Left antler */}
    <path d="M26 24c0 0-4-3-6-7-1-2-1-4 0-5 1-1 2 0 3 2 1 2 1 4 2 5l1-4c0-2 1-3 2-3s1 1 1 3l-1 5 2-3c1-2 2-3 3-2s0 3-1 5c-2 3-4 5-6 4z" opacity="0.9"/>
    {/* Right antler */}
    <path d="M38 24c0 0 4-3 6-7 1-2 1-4 0-5-1-1-2 0-3 2-1 2-1 4-2 5l-1-4c0-2-1-3-2-3s-1 1-1 3l1 5-2-3c-1-2-2-3-3-2s0 3 1 5c2 3 4 5 6 4z" opacity="0.9"/>
    {/* Ears */}
    <ellipse cx="22" cy="21" rx="3" ry="4" transform="rotate(-20 22 21)" opacity="0.6"/>
    <ellipse cx="42" cy="21" rx="3" ry="4" transform="rotate(20 42 21)" opacity="0.6"/>
  </svg>
);

const navLinks = [
  { href: "/trophy-map",          label: "Trophy Map" },
  { href: "/deer-score-calculator", label: "Score Calculator" },
  { href: "/for-outfitters",      label: "For Outfitters" },
  { href: "/blog",                label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-green shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <DeerLogo />
          <span className="text-white font-bold text-xl tracking-tight group-hover:text-brand-orange transition-colors">
            rackline<span className="text-brand-orange">.ai</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/download" className="btn-primary py-2 px-4 text-sm">
            Try Free
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white/80 hover:text-white font-medium py-2.5 border-b border-white/5 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/download"
            className="btn-primary w-full justify-center mt-3 block text-center"
            onClick={() => setMenuOpen(false)}
          >
            Try Free
          </Link>
        </div>
      )}
    </header>
  );
}
