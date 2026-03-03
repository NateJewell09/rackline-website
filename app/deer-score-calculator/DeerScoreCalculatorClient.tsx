"use client";
import { useState, useCallback } from "react";

type Side = { beam: string; g1: string; g2: string; g3: string; g4: string; h1: string; h2: string; h3: string; h4: string };
const emptyS = (): Side => ({ beam: "", g1: "", g2: "", g3: "", g4: "", h1: "", h2: "", h3: "", h4: "" });

const fields: { key: keyof Side; label: string; hint: string }[] = [
  { key: "beam", label: "Main Beam",    hint: "Outer curve from burr to tip" },
  { key: "g1",   label: "G1 (Brow)",   hint: "Brow tine — first tine from base" },
  { key: "g2",   label: "G2",          hint: "Second tine" },
  { key: "g3",   label: "G3",          hint: "Third tine" },
  { key: "g4",   label: "G4",          hint: "Fourth tine (if present)" },
  { key: "h1",   label: "H1 Circ.",    hint: "Between burr and G1" },
  { key: "h2",   label: "H2 Circ.",    hint: "Between G1 and G2" },
  { key: "h3",   label: "H3 Circ.",    hint: "Between G2 and G3" },
  { key: "h4",   label: "H4 Circ.",    hint: "Between G3 and G4 (or midpoint)" },
];

function num(v: string): number { const n = parseFloat(v); return isNaN(n) || n < 0 ? 0 : n; }

function calcScore(left: Side, right: Side, spread: string) {
  const spreadCredit = num(spread);
  let gross = spreadCredit;
  let deductions = 0;

  for (const f of fields) {
    const l = num(left[f.key]);
    const r = num(right[f.key]);
    gross += l + r;
    deductions += Math.abs(l - r);
  }

  return { gross, deductions, net: gross - deductions, spread: spreadCredit };
}

function fmtScore(n: number): string {
  if (n === 0) return "—";
  const whole = Math.floor(n);
  const frac  = n - whole;
  const eighths = Math.round(frac * 8);
  if (eighths === 0) return `${whole}"`;
  if (eighths === 8) return `${whole + 1}"`;
  return `${whole} ${eighths}/8"`;
}

function scoreGrade(net: number): { label: string; color: string; bg: string } {
  if (net >= 170) return { label: "B&C All-Time Record Book", color: "text-purple-700", bg: "bg-purple-100" };
  if (net >= 160) return { label: "B&C Entry Class (Typical)", color: "text-green-700", bg: "bg-green-100" };
  if (net >= 140) return { label: "Trophy Class Buck",         color: "text-green-600", bg: "bg-green-50" };
  if (net >= 125) return { label: "Quality Mature Buck",       color: "text-blue-700",  bg: "bg-blue-50" };
  if (net >= 100) return { label: "Average Mature Buck",       color: "text-yellow-700",bg: "bg-yellow-50" };
  if (net > 0)    return { label: "Young / Developing Buck",   color: "text-gray-600",  bg: "bg-gray-100" };
  return { label: "Enter measurements above", color: "text-gray-400", bg: "bg-gray-50" };
}

export default function DeerScoreCalculatorClient() {
  const [left,   setLeft]   = useState<Side>(emptyS());
  const [right,  setRight]  = useState<Side>(emptyS());
  const [spread, setSpread] = useState("");

  const updateLeft  = useCallback((k: keyof Side, v: string) => setLeft(p  => ({ ...p, [k]: v })), []);
  const updateRight = useCallback((k: keyof Side, v: string) => setRight(p => ({ ...p, [k]: v })), []);

  const result = calcScore(left, right, spread);
  const grade  = scoreGrade(result.net);

  function handleReset() {
    setLeft(emptyS());
    setRight(emptyS());
    setSpread("");
  }

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Live Score Display */}
        <div className="bg-brand-dark rounded-2xl p-6 mb-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Gross Score</div>
              <div className="text-3xl font-bold text-brand-orange">{fmtScore(result.gross)}</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Deductions</div>
              <div className="text-3xl font-bold text-red-400">−{fmtScore(result.deductions)}</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Net Score</div>
              <div className="text-3xl font-bold text-white">{fmtScore(result.net)}</div>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Classification</div>
              <div className={`text-xs font-bold px-2 py-1 rounded-full ${grade.bg} ${grade.color}`}>
                {grade.label}
              </div>
            </div>
          </div>
        </div>

        {/* Spread */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-brand-green mb-2">
            Inside Spread Credit (inches)
          </label>
          <input
            type="number"
            min="0"
            step="0.125"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
            placeholder="e.g. 18.5"
            className="w-full max-w-xs border-2 border-gray-200 rounded-lg px-4 py-2.5 text-brand-dark focus:outline-none focus:border-brand-green text-sm"
          />
          <p className="text-gray-400 text-xs mt-1">Widest inside width between main beams — cannot exceed longest main beam</p>
        </div>

        {/* Measurement Grid */}
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-green text-white">
                <th className="text-left px-4 py-3 font-semibold">Measurement</th>
                <th className="px-4 py-3 font-semibold text-center">Left Side (in.)</th>
                <th className="px-4 py-3 font-semibold text-center">Right Side (in.)</th>
                <th className="px-4 py-3 font-semibold text-center text-brand-orange">Difference</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((f, i) => {
                const l    = num(left[f.key]);
                const r    = num(right[f.key]);
                const diff = Math.abs(l - r);
                return (
                  <tr key={f.key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-green">{f.label}</div>
                      <div className="text-gray-400 text-xs">{f.hint}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        step="0.125"
                        value={left[f.key]}
                        onChange={(e) => updateLeft(f.key, e.target.value)}
                        placeholder="0"
                        className="w-20 border-2 border-gray-200 rounded-lg px-2 py-1.5 text-center text-brand-dark focus:outline-none focus:border-brand-green text-sm"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <input
                        type="number"
                        min="0"
                        step="0.125"
                        value={right[f.key]}
                        onChange={(e) => updateRight(f.key, e.target.value)}
                        placeholder="0"
                        className="w-20 border-2 border-gray-200 rounded-lg px-2 py-1.5 text-center text-brand-dark focus:outline-none focus:border-brand-green text-sm"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`font-mono font-semibold ${diff > 0 ? "text-red-500" : "text-gray-300"}`}>
                        {diff > 0 ? `−${diff.toFixed(3)}"` : "—"}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {/* Totals row */}
              <tr className="bg-brand-dark text-white font-bold">
                <td className="px-4 py-3">TOTALS</td>
                <td className="px-4 py-3 text-center text-brand-orange">
                  {fmtScore(fields.reduce((s, f) => s + num(left[f.key]),  0))}
                </td>
                <td className="px-4 py-3 text-center text-brand-orange">
                  {fmtScore(fields.reduce((s, f) => s + num(right[f.key]), 0))}
                </td>
                <td className="px-4 py-3 text-center text-red-400">
                  −{fmtScore(result.deductions)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          onClick={handleReset}
          className="mt-6 text-sm text-gray-400 hover:text-brand-green transition-colors"
        >
          ↺ Reset all measurements
        </button>

        {/* Score breakdown */}
        {result.gross > 0 && (
          <div className="mt-10 bg-brand-cream rounded-2xl p-6">
            <h3 className="font-bold text-brand-green mb-4">Score Breakdown</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="card">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Spread Credit</div>
                <div className="text-xl font-bold text-brand-green">{fmtScore(result.spread)}</div>
              </div>
              <div className="card">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Antler Total</div>
                <div className="text-xl font-bold text-brand-green">{fmtScore(result.gross - result.spread)}</div>
              </div>
              <div className="card">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Sym. Deductions</div>
                <div className="text-xl font-bold text-red-500">−{fmtScore(result.deductions)}</div>
              </div>
            </div>
            <div className={`mt-4 rounded-xl p-4 ${grade.bg}`}>
              <div className={`font-bold ${grade.color} mb-1`}>
                Net Score: {fmtScore(result.net)} — {grade.label}
              </div>
              {result.net >= 170 && <p className="text-sm text-gray-600">🏆 This buck qualifies for Boone &amp; Crockett all-time records (170&quot;+ typical minimum).</p>}
              {result.net >= 160 && result.net < 170 && <p className="text-sm text-gray-600">📕 This buck qualifies for B&C entry level records (160&quot; minimum for typical whitetail).</p>}
              {result.net >= 140 && result.net < 160 && <p className="text-sm text-gray-600">🦌 Trophy class deer. This is a dream buck for most hunters — congratulations.</p>}
              {result.net > 0 && result.net < 140 && <p className="text-sm text-gray-600">Continue entering measurements for a more accurate score.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
