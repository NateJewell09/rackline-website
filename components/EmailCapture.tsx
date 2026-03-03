"use client";
import { useState } from "react";

interface EmailCaptureProps {
  variant?: "dark" | "light";
  headline?: string;
  subtext?: string;
}

export default function EmailCapture({
  variant = "dark",
  headline = "Get Weekly Buck Scoring Tips",
  subtext = "Early access to new features + hunting season tips. No spam, ever.",
}: EmailCaptureProps) {
  const [email, setEmail]     = useState("");
  const [status, setStatus]   = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox for a confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const isDark = variant === "dark";

  return (
    <div className={`rounded-2xl p-8 ${isDark ? "bg-brand-green text-white" : "bg-brand-cream-dark text-brand-dark"}`}>
      <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-brand-green"}`}>
        {headline}
      </h3>
      <p className={`text-sm mb-5 ${isDark ? "text-white/70" : "text-brand-gray"}`}>
        {subtext}
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-3">
          <span className="text-green-400 text-xl">✓</span>
          <p className={`text-sm font-medium ${isDark ? "text-white" : "text-brand-green"}`}>{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={`flex-1 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange
              ${isDark
                ? "bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-brand-orange"
                : "bg-white text-brand-dark placeholder-gray-400 border border-gray-200 focus:border-brand-orange"
              }`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary whitespace-nowrap py-3 px-5 text-sm disabled:opacity-60"
          >
            {status === "loading" ? "Signing up…" : "Get Tips Free"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-red-400 text-xs">{message}</p>
      )}
    </div>
  );
}
