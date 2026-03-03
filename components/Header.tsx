"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/trophy-map",          label: "Trophy Map" },
  { href: "/deer-score-calculator", label: "Score Calculator" },
  { href: "/shop",                label: "Shop" },
  { href: "/for-outfitters",      label: "For Outfitters" },
  { href: "/blog",                label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-green shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/app-icon.png"
            alt="rackline.ai"
            width={36}
            height={36}
            className="rounded-xl shadow-sm"
            priority
          />
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
