"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Shared STATE_DATA subset — just FIPS → harvest/score for coloring
// (mirrors TrophyMapClient.tsx; kept minimal to avoid bundle bloat)
const STATE_SCORES: Record<string, number> = {
  "19":164.2,"17":158.7,"20":162.1,"55":155.3,"39":153.8,"48":148.4,
  "29":152.1,"18":149.6,"31":157.4,"27":145.2,"26":142.8,"21":147.3,
  "54":143.6,"51":138.4,"42":141.2,"40":149.8,"05":146.7,"22":138.9,
  "28":141.3,"01":137.6,"13":133.4,"45":130.8,"37":132.1,"47":144.2,
  "12":118.4,"38":154.8,"46":151.6,"30":152.3,"56":148.7,"16":143.2,
  "08":141.8,"53":135.2,"41":132.8,"06":128.4,"32":138.1,"49":140.6,
  "04":131.2,"35":139.7,"09":127.8,"23":134.5,"50":133.2,"33":131.9,
  "25":129.4,"44":128.1,"10":130.7,"24":136.4,"34":132.9,"36":135.8,
  "11":122.3,
};

const MIN_S = 118;
const MAX_S = 165;

function getColor(score: number | undefined): string {
  if (!score) return "rgba(255,255,255,0.04)";
  const ratio = Math.min((score - MIN_S) / (MAX_S - MIN_S), 1);
  const r = Math.round(15 + ratio * 19);   // 15 → 34
  const g = Math.round(45 + ratio * 150);  // 45 → 195
  const b = Math.round(25 + ratio * 63);   // 25 → 88
  return `rgb(${r},${g},${b})`;
}

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

type Props = {
  /** Show the pin overlay for the outfitters page */
  showPins?: boolean;
  className?: string;
};

// Sample outfitter pin positions (in the AlbersUSA SVG coordinate space ~960×600)
// These are approximate screen percentages for display purposes
const PINS = [
  { label: "IA", cx: "48%", cy: "38%" },
  { label: "KS", cx: "42%", cy: "46%" },
  { label: "WI", cx: "56%", cy: "28%" },
  { label: "TX", cx: "38%", cy: "66%" },
  { label: "IL", cx: "57%", cy: "38%" },
];

export default function TrophyMapPreview({ showPins = false, className = "" }: Props) {
  return (
    <div className={`relative w-full rounded-xl overflow-hidden bg-brand-dark ${className}`}>
      {/* Label */}
      <div className="absolute top-2 left-3 z-10 flex items-center gap-1.5">
        <span className="text-white/50 text-xs font-semibold">Trophy Heatmap — USA</span>
        <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wide border border-brand-orange/40 rounded px-1.5 py-0.5">
          Preview
        </span>
      </div>

      {/* Map */}
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fips = (geo.properties as { STATE?: string }).STATE
                ?? geo.rsmKey?.replace(/\D/g, "").slice(0, 2);
              const score = STATE_SCORES[fips as string];
              // Alaska (02) gets neutral — outlier scores
              const fill = fips === "02" ? "rgba(255,255,255,0.04)" : getColor(score);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke="#0D1B0F"
                  strokeWidth={0.8}
                  style={{
                    default: { outline: "none" },
                    hover:   { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Outfitter pins (for-outfitters page) */}
      {showPins && (
        <div className="absolute inset-0 pointer-events-none">
          {PINS.map((pin) => (
            <div
              key={pin.label}
              className="absolute flex flex-col items-center"
              style={{ left: pin.cx, top: pin.cy, transform: "translate(-50%,-100%)" }}
            >
              <div className="w-3 h-3 rounded-full bg-brand-orange border-2 border-white shadow-lg animate-pulse" />
              <div className="w-0.5 h-2 bg-brand-orange" />
            </div>
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1 z-10">
        <span className="text-white/40 text-[10px] mr-0.5">Low</span>
        {[0.1, 0.3, 0.5, 0.7, 1.0].map((ratio, i) => {
          const r = Math.round(15 + ratio * 19);
          const g = Math.round(45 + ratio * 150);
          const b = Math.round(25 + ratio * 63);
          return <div key={i} className="w-3.5 h-3.5 rounded-sm" style={{ backgroundColor: `rgb(${r},${g},${b})` }} />;
        })}
        <span className="text-white/40 text-[10px] ml-0.5">High</span>
      </div>
    </div>
  );
}
