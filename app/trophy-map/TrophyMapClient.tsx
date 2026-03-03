"use client";
import { useState, useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// ─── GEO SOURCE ───────────────────────────────────────────────────────────────
const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// ─── STATE DATA (realistic trophy hunting metrics) ───────────────────────────
type StateData = {
  name: string;
  abbr: string;
  fips: string;
  harvested: number;
  avgScore: number;
  topCounty: string;
  topCountyScore: number;
  counties: CountyData[];
};

type CountyData = {
  name: string;
  harvested: number;
  avgScore: number;
};

const STATE_DATA: Record<string, StateData> = {
  "19": { name:"Iowa",       abbr:"IA", fips:"19", harvested:2841, avgScore:164.2, topCounty:"Boone Co.",      topCountyScore:178.4, counties:[{name:"Boone Co.",avgScore:178.4,harvested:312},{name:"Mahaska Co.",avgScore:171.2,harvested:287},{name:"Monroe Co.",avgScore:168.9,harvested:261},{name:"Wapello Co.",avgScore:166.3,harvested:244},{name:"Davis Co.",avgScore:163.8,harvested:229}] },
  "17": { name:"Illinois",   abbr:"IL", fips:"17", harvested:2214, avgScore:158.7, topCounty:"Pike Co.",       topCountyScore:174.1, counties:[{name:"Pike Co.",avgScore:174.1,harvested:298},{name:"Adams Co.",avgScore:168.5,harvested:264},{name:"Calhoun Co.",avgScore:164.2,harvested:231},{name:"Jersey Co.",avgScore:160.7,harvested:208},{name:"Greene Co.",avgScore:157.3,harvested:187}] },
  "20": { name:"Kansas",     abbr:"KS", fips:"20", harvested:1987, avgScore:162.1, topCounty:"Osborne Co.",    topCountyScore:176.8, counties:[{name:"Osborne Co.",avgScore:176.8,harvested:241},{name:"Mitchell Co.",avgScore:170.3,harvested:218},{name:"Smith Co.",avgScore:165.9,harvested:196},{name:"Jewell Co.",avgScore:162.4,harvested:178},{name:"Republic Co.",avgScore:158.7,harvested:162}] },
  "55": { name:"Wisconsin",  abbr:"WI", fips:"55", harvested:1876, avgScore:155.3, topCounty:"Buffalo Co.",    topCountyScore:172.6, counties:[{name:"Buffalo Co.",avgScore:172.6,harvested:287},{name:"Trempealeau Co.",avgScore:165.1,harvested:251},{name:"Jackson Co.",avgScore:159.4,harvested:214},{name:"Richland Co.",avgScore:154.8,harvested:193},{name:"Vernon Co.",avgScore:151.2,harvested:176}] },
  "39": { name:"Ohio",       abbr:"OH", fips:"39", harvested:1654, avgScore:153.8, topCounty:"Coshocton Co.",  topCountyScore:168.9, counties:[{name:"Coshocton Co.",avgScore:168.9,harvested:231},{name:"Tuscarawas Co.",avgScore:162.4,harvested:198},{name:"Guernsey Co.",avgScore:157.1,harvested:175},{name:"Muskingum Co.",avgScore:152.8,harvested:158},{name:"Morgan Co.",avgScore:149.3,harvested:144}] },
  "48": { name:"Texas",      abbr:"TX", fips:"48", harvested:3124, avgScore:148.4, topCounty:"Maverick Co.",   topCountyScore:165.7, counties:[{name:"Maverick Co.",avgScore:165.7,harvested:387},{name:"Kinney Co.",avgScore:158.3,harvested:341},{name:"Edwards Co.",avgScore:152.1,harvested:298},{name:"Real Co.",avgScore:148.9,harvested:264},{name:"Uvalde Co.",avgScore:145.6,harvested:241}] },
  "29": { name:"Missouri",   abbr:"MO", fips:"29", harvested:1923, avgScore:152.1, topCounty:"Randolph Co.",   topCountyScore:167.4, counties:[{name:"Randolph Co.",avgScore:167.4,harvested:261},{name:"Howard Co.",avgScore:161.8,harvested:234},{name:"Boone Co.",avgScore:156.3,harvested:209},{name:"Cooper Co.",avgScore:152.7,harvested:187},{name:"Moniteau Co.",avgScore:149.1,harvested:168}] },
  "18": { name:"Indiana",    abbr:"IN", fips:"18", harvested:1432, avgScore:149.6, topCounty:"Tippecanoe Co.", topCountyScore:163.2, counties:[{name:"Tippecanoe Co.",avgScore:163.2,harvested:198},{name:"Carroll Co.",avgScore:157.4,harvested:176},{name:"White Co.",avgScore:152.8,harvested:154},{name:"Pulaski Co.",avgScore:149.3,harvested:138},{name:"Jasper Co.",avgScore:146.1,harvested:124}] },
  "31": { name:"Nebraska",   abbr:"NE", fips:"31", harvested:1287, avgScore:157.4, topCounty:"Boone Co.",      topCountyScore:171.8, counties:[{name:"Boone Co.",avgScore:171.8,harvested:187},{name:"Antelope Co.",avgScore:165.3,harvested:164},{name:"Madison Co.",avgScore:159.7,harvested:143},{name:"Pierce Co.",avgScore:155.2,harvested:128},{name:"Stanton Co.",avgScore:151.4,harvested:115}] },
  "27": { name:"Minnesota",  abbr:"MN", fips:"27", harvested:1341, avgScore:145.2, topCounty:"Fillmore Co.",   topCountyScore:159.8, counties:[{name:"Fillmore Co.",avgScore:159.8,harvested:187},{name:"Houston Co.",avgScore:153.4,harvested:162},{name:"Winona Co.",avgScore:148.1,harvested:141},{name:"Olmsted Co.",avgScore:144.7,harvested:128},{name:"Wabasha Co.",avgScore:141.3,harvested:114}] },
  "26": { name:"Michigan",   abbr:"MI", fips:"26", harvested:1198, avgScore:142.8, topCounty:"Montmorency Co.",topCountyScore:155.4, counties:[{name:"Montmorency Co.",avgScore:155.4,harvested:162},{name:"Oscoda Co.",avgScore:149.1,harvested:142},{name:"Crawford Co.",avgScore:143.8,harvested:124},{name:"Roscommon Co.",avgScore:139.5,harvested:108},{name:"Missaukee Co.",avgScore:136.2,harvested:97}] },
  "21": { name:"Kentucky",   abbr:"KY", fips:"21", harvested:1087, avgScore:147.3, topCounty:"Meade Co.",      topCountyScore:161.9, counties:[{name:"Meade Co.",avgScore:161.9,harvested:154},{name:"Breckinridge Co.",avgScore:155.6,harvested:134},{name:"Grayson Co.",avgScore:150.3,harvested:117},{name:"Ohio Co.",avgScore:146.8,harvested:104},{name:"Butler Co.",avgScore:143.4,harvested:93}] },
  "54": { name:"W. Virginia",abbr:"WV", fips:"54", harvested:987,  avgScore:143.6, topCounty:"Hardy Co.",      topCountyScore:158.2, counties:[{name:"Hardy Co.",avgScore:158.2,harvested:142},{name:"Hampshire Co.",avgScore:151.7,harvested:123},{name:"Pendleton Co.",avgScore:146.4,harvested:107},{name:"Grant Co.",avgScore:142.1,harvested:96},{name:"Mineral Co.",avgScore:138.9,harvested:86}] },
  "51": { name:"Virginia",   abbr:"VA", fips:"51", harvested:876,  avgScore:138.4, topCounty:"Frederick Co.",  topCountyScore:152.7, counties:[{name:"Frederick Co.",avgScore:152.7,harvested:124},{name:"Clarke Co.",avgScore:146.3,harvested:108},{name:"Warren Co.",avgScore:141.1,harvested:94},{name:"Shenandoah Co.",avgScore:137.8,harvested:84},{name:"Page Co.",avgScore:134.6,harvested:76}] },
  "42": { name:"Pennsylvania",abbr:"PA", fips:"42", harvested:1124, avgScore:141.2, topCounty:"Clinton Co.",   topCountyScore:154.8, counties:[{name:"Clinton Co.",avgScore:154.8,harvested:162},{name:"Potter Co.",avgScore:148.3,harvested:141},{name:"Cameron Co.",avgScore:143.7,harvested:123},{name:"Clearfield Co.",avgScore:139.4,harvested:108},{name:"Centre Co.",avgScore:136.1,harvested:97}] },
  "40": { name:"Oklahoma",   abbr:"OK", fips:"40", harvested:987,  avgScore:149.8, topCounty:"Pushmataha Co.", topCountyScore:163.4, counties:[{name:"Pushmataha Co.",avgScore:163.4,harvested:138},{name:"McCurtain Co.",avgScore:157.1,harvested:120},{name:"Choctaw Co.",avgScore:151.8,harvested:105},{name:"Bryan Co.",avgScore:148.3,harvested:94},{name:"Marshall Co.",avgScore:144.9,harvested:84}] },
  "05": { name:"Arkansas",   abbr:"AR", fips:"05", harvested:1043, avgScore:146.7, topCounty:"Chicot Co.",     topCountyScore:160.3, counties:[{name:"Chicot Co.",avgScore:160.3,harvested:148},{name:"Drew Co.",avgScore:153.9,harvested:129},{name:"Ashley Co.",avgScore:148.6,harvested:113},{name:"Desha Co.",avgScore:145.1,harvested:101},{name:"Lincoln Co.",avgScore:141.8,harvested:91}] },
  "22": { name:"Louisiana",  abbr:"LA", fips:"22", harvested:876,  avgScore:138.9, topCounty:"Tensas Par.",    topCountyScore:152.4, counties:[{name:"Tensas Par.",avgScore:152.4,harvested:124},{name:"Madison Par.",avgScore:146.1,harvested:108},{name:"Catahoula Par.",avgScore:140.8,harvested:94},{name:"Concordia Par.",avgScore:137.5,harvested:84},{name:"Franklin Par.",avgScore:134.2,harvested:76}] },
  "28": { name:"Mississippi",abbr:"MS", fips:"28", harvested:934,  avgScore:141.3, topCounty:"Adams Co.",      topCountyScore:154.8, counties:[{name:"Adams Co.",avgScore:154.8,harvested:131},{name:"Jefferson Co.",avgScore:148.5,harvested:114},{name:"Claiborne Co.",avgScore:143.2,harvested:99},{name:"Copiah Co.",avgScore:139.9,harvested:89},{name:"Lawrence Co.",avgScore:136.6,harvested:80}] },
  "01": { name:"Alabama",    abbr:"AL", fips:"01", harvested:876,  avgScore:137.6, topCounty:"Wilcox Co.",     topCountyScore:150.2, counties:[{name:"Wilcox Co.",avgScore:150.2,harvested:124},{name:"Dallas Co.",avgScore:143.9,harvested:108},{name:"Perry Co.",avgScore:138.6,harvested:94},{name:"Marengo Co.",avgScore:135.3,harvested:84},{name:"Hale Co.",avgScore:132.1,harvested:76}] },
  "13": { name:"Georgia",    abbr:"GA", fips:"13", harvested:768,  avgScore:133.4, topCounty:"Ben Hill Co.",   topCountyScore:146.8, counties:[{name:"Ben Hill Co.",avgScore:146.8,harvested:108},{name:"Irwin Co.",avgScore:140.5,harvested:94},{name:"Tift Co.",avgScore:135.2,harvested:82},{name:"Coffee Co.",avgScore:131.9,harvested:74},{name:"Dodge Co.",avgScore:128.7,harvested:66}] },
  "45": { name:"S. Carolina",abbr:"SC", fips:"45", harvested:698,  avgScore:130.8, topCounty:"Colleton Co.",   topCountyScore:143.4, counties:[{name:"Colleton Co.",avgScore:143.4,harvested:98},{name:"Hampton Co.",avgScore:137.1,harvested:86},{name:"Jasper Co.",avgScore:131.8,harvested:75},{name:"Beaufort Co.",avgScore:128.5,harvested:67},{name:"Allendale Co.",avgScore:125.3,harvested:60}] },
  "37": { name:"N. Carolina",abbr:"NC", fips:"37", harvested:734,  avgScore:132.1, topCounty:"Bertie Co.",     topCountyScore:144.7, counties:[{name:"Bertie Co.",avgScore:144.7,harvested:103},{name:"Hertford Co.",avgScore:138.4,harvested:90},{name:"Northampton Co.",avgScore:133.1,harvested:78},{name:"Halifax Co.",avgScore:129.8,harvested:70},{name:"Edgecombe Co.",avgScore:126.6,harvested:63}] },
  "47": { name:"Tennessee",  abbr:"TN", fips:"47", harvested:943,  avgScore:144.2, topCounty:"Hardeman Co.",   topCountyScore:157.8, counties:[{name:"Hardeman Co.",avgScore:157.8,harvested:132},{name:"Fayette Co.",avgScore:151.5,harvested:115},{name:"Haywood Co.",avgScore:146.2,harvested:101},{name:"McNairy Co.",avgScore:142.9,harvested:90},{name:"Hardin Co.",avgScore:139.6,harvested:81}] },
  "12": { name:"Florida",    abbr:"FL", fips:"12", harvested:543,  avgScore:118.4, topCounty:"Osceola Co.",    topCountyScore:130.2, counties:[{name:"Osceola Co.",avgScore:130.2,harvested:76},{name:"Highlands Co.",avgScore:124.1,harvested:66},{name:"Polk Co.",avgScore:118.8,harvested:58},{name:"Okeechobee Co.",avgScore:115.5,harvested:52},{name:"Glades Co.",avgScore:112.3,harvested:47}] },
  "38": { name:"N. Dakota",  abbr:"ND", fips:"38", harvested:876,  avgScore:154.8, topCounty:"Burleigh Co.",   topCountyScore:168.4, counties:[{name:"Burleigh Co.",avgScore:168.4,harvested:124},{name:"Morton Co.",avgScore:162.1,harvested:108},{name:"Mercer Co.",avgScore:156.8,harvested:94},{name:"Oliver Co.",avgScore:153.5,harvested:84},{name:"McLean Co.",avgScore:150.2,harvested:76}] },
  "46": { name:"S. Dakota",  abbr:"SD", fips:"46", harvested:743,  avgScore:151.6, topCounty:"Haakon Co.",     topCountyScore:165.2, counties:[{name:"Haakon Co.",avgScore:165.2,harvested:104},{name:"Stanley Co.",avgScore:158.9,harvested:91},{name:"Jones Co.",avgScore:153.6,harvested:79},{name:"Lyman Co.",avgScore:150.3,harvested:71},{name:"Hughes Co.",avgScore:147.1,harvested:64}] },
  "30": { name:"Montana",    abbr:"MT", fips:"30", harvested:654,  avgScore:152.3, topCounty:"Petroleum Co.",  topCountyScore:166.8, counties:[{name:"Petroleum Co.",avgScore:166.8,harvested:91},{name:"Garfield Co.",avgScore:160.5,harvested:79},{name:"McCone Co.",avgScore:155.2,harvested:69},{name:"Richland Co.",avgScore:151.9,harvested:62},{name:"Dawson Co.",avgScore:148.7,harvested:56}] },
  "56": { name:"Wyoming",    abbr:"WY", fips:"56", harvested:487,  avgScore:148.7, topCounty:"Goshen Co.",     topCountyScore:162.4, counties:[{name:"Goshen Co.",avgScore:162.4,harvested:68},{name:"Platte Co.",avgScore:156.1,harvested:59},{name:"Niobrara Co.",avgScore:150.8,harvested:52},{name:"Laramie Co.",avgScore:147.5,harvested:46},{name:"Converse Co.",avgScore:144.3,harvested:41}] },
  "16": { name:"Idaho",      abbr:"ID", fips:"16", harvested:421,  avgScore:143.2, topCounty:"Clearwater Co.", topCountyScore:156.8, counties:[{name:"Clearwater Co.",avgScore:156.8,harvested:59},{name:"Nez Perce Co.",avgScore:150.5,harvested:51},{name:"Lewis Co.",avgScore:145.2,harvested:45},{name:"Idaho Co.",avgScore:141.9,harvested:40},{name:"Latah Co.",avgScore:138.7,harvested:36}] },
  "08": { name:"Colorado",   abbr:"CO", fips:"08", harvested:567,  avgScore:141.8, topCounty:"Yuma Co.",       topCountyScore:155.4, counties:[{name:"Yuma Co.",avgScore:155.4,harvested:79},{name:"Phillips Co.",avgScore:149.1,harvested:69},{name:"Logan Co.",avgScore:143.8,harvested:60},{name:"Sedgwick Co.",avgScore:140.5,harvested:54},{name:"Washington Co.",avgScore:137.3,harvested:49}] },
  "02": { name:"Alaska",     abbr:"AK", fips:"02", harvested:198,  avgScore:312.4, topCounty:"Kodiak Island",  topCountyScore:389.2, counties:[{name:"Kodiak Island",avgScore:389.2,harvested:28},{name:"Kenai Pen.",avgScore:341.7,harvested:24},{name:"Mat-Su",avgScore:298.4,harvested:21},{name:"Fairbanks NP",avgScore:276.1,harvested:18},{name:"Bethel",avgScore:254.8,harvested:16}] },
};

// States not in dataset get minimal placeholder data
const ALL_STATE_FIPS = [
  "01","02","04","05","06","08","09","10","12","13","15","16","17","18","19","20",
  "21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36",
  "37","38","39","40","41","42","44","45","46","47","48","49","50","51","53","54","55","56"
];

// Color scale: low → high (dark brown → brand-orange) — same for both metrics
function getColor(value: number, min: number, max: number): string {
  if (value === 0) return "rgba(255,255,255,0.04)";
  const ratio = Math.min((value - min) / (max - min), 1);
  const r = Math.round(40 + ratio * 172);
  const g = Math.round(27 + ratio * 55);
  const b = Math.round(15 + ratio * 11);
  return `rgb(${r},${g},${b})`;
}

// ─── LEADERBOARD ──────────────────────────────────────────────────────────────
function Leaderboard({ metric, onSelect, selected }: {
  metric: "harvested" | "score";
  onSelect: (fips: string) => void;
  selected: string | null;
}) {
  const sorted = Object.values(STATE_DATA).sort((a, b) =>
    metric === "harvested" ? b.harvested - a.harvested : b.avgScore - a.avgScore
  ).slice(0, 10);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/10">
        <h3 className="text-white font-bold text-sm">
          Top 10 States — {metric === "harvested" ? "Most Harvested" : "Highest Avg Score"}
          <span className="text-white/30 text-xs font-normal italic ml-2">(sample)</span>
        </h3>
      </div>
      <div className="divide-y divide-white/5">
        {sorted.map((s, i) => (
          <button
            key={s.fips}
            onClick={() => onSelect(s.fips)}
            className={`w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-white/5 transition-colors ${selected === s.fips ? "bg-brand-orange/10 border-l-2 border-brand-orange" : ""}`}
          >
            <span className="text-white/30 text-xs font-mono w-5 shrink-0">{String(i+1).padStart(2,"0")}</span>
            <span className="text-white text-sm font-semibold flex-1">{s.name}</span>
            <span className="text-brand-orange text-sm font-bold">
              {metric === "harvested" ? s.harvested.toLocaleString() : `${s.avgScore}"`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── STATE DETAIL PANEL ───────────────────────────────────────────────────────
function StateDetail({ fips, onClose }: { fips: string; onClose: () => void }) {
  const d = STATE_DATA[fips];
  if (!d) return null;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold">{d.name}</h3>
          <p className="text-white/40 text-xs mt-0.5">{d.harvested.toLocaleString()} bucks · {d.avgScore}" avg B&C</p>
        </div>
        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Summary metrics */}
      <div className="grid grid-cols-2 gap-px bg-white/5 border-b border-white/10">
        <div className="bg-brand-dark px-5 py-4">
          <div className="text-white/40 text-xs mb-1">Total Harvested</div>
          <div className="text-white font-bold text-xl">{d.harvested.toLocaleString()}</div>
        </div>
        <div className="bg-brand-dark px-5 py-4">
          <div className="text-white/40 text-xs mb-1">Avg B&C Score</div>
          <div className="text-brand-orange font-bold text-xl">{d.avgScore}"</div>
        </div>
        <div className="bg-brand-dark px-5 py-4">
          <div className="text-white/40 text-xs mb-1">Top County</div>
          <div className="text-white font-semibold text-sm">{d.topCounty}</div>
        </div>
        <div className="bg-brand-dark px-5 py-4">
          <div className="text-white/40 text-xs mb-1">Top County Score</div>
          <div className="text-brand-orange font-bold text-sm">{d.topCountyScore}"</div>
        </div>
      </div>

      {/* County breakdown */}
      <div className="px-5 py-4">
        <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Top Counties</h4>
        <div className="space-y-2">
          {d.counties.map((c, i) => {
            const maxScore = d.counties[0].avgScore;
            const pct = (c.avgScore / maxScore) * 100;
            return (
              <div key={c.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/70 text-xs">{c.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 text-xs">{c.harvested} bucks</span>
                    <span className="text-brand-orange text-xs font-bold">{c.avgScore}"</span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-orange transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 pb-4">
        <a
          href="/download"
          className="block w-full text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3 text-sm transition-colors"
        >
          Score Your {d.name} Buck →
        </a>
      </div>
    </div>
  );
}

// ─── MAIN MAP COMPONENT ───────────────────────────────────────────────────────
export default function TrophyMapClient() {
  const [metric, setMetric] = useState<"harvested" | "score">("harvested");
  const [selectedFips, setSelectedFips] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; fips: string } | null>(null);

  const harvestedValues = Object.values(STATE_DATA).map((d) => d.harvested);
  const scoreValues = Object.values(STATE_DATA).map((d) => d.avgScore);
  const minH = Math.min(...harvestedValues), maxH = Math.max(...harvestedValues);
  const minS = Math.min(...scoreValues), maxS = Math.max(...scoreValues);

  const getFillColor = useCallback((fips: string) => {
    const d = STATE_DATA[fips];
    if (!d) return "rgba(255,255,255,0.04)";
    return metric === "harvested"
      ? getColor(d.harvested, minH, maxH)
      : getColor(d.avgScore, minS, maxS);
  }, [metric, minH, maxH, minS, maxS]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 gap-1">
          <button
            onClick={() => setMetric("harvested")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${metric === "harvested" ? "bg-brand-orange text-white" : "text-white/50 hover:text-white"}`}
          >
            Harvest Count
          </button>
          <button
            onClick={() => setMetric("score")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${metric === "score" ? "bg-brand-orange text-white" : "text-white/50 hover:text-white"}`}
          >
            Avg B&C Score
          </button>
        </div>
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
            <span>No data</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded" style={{ background: "linear-gradient(to right, rgb(40,27,15), rgb(212,82,26))" }} />
            <span>Low → High</span>
          </div>
        </div>
        {hovered && STATE_DATA[hovered] && (
          <div className="ml-auto text-white/60 text-xs">
            <span className="text-white font-semibold">{STATE_DATA[hovered].name}</span>
            {" · "}
            {metric === "harvested"
              ? `${STATE_DATA[hovered].harvested.toLocaleString()} harvested`
              : `${STATE_DATA[hovered].avgScore}" avg B&C`}
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative">
          <div className="relative">
            <ComposableMap
              projection="geoAlbersUsa"
              projectionConfig={{ scale: 850 }}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const fips = geo.id as string;
                    const isSelected = selectedFips === fips;
                    const isHovered = hovered === fips;
                    const fill = getFillColor(fips);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isSelected ? "#D4521A" : fill}
                        stroke="#0D1B0F"
                        strokeWidth={isHovered || isSelected ? 1.5 : 0.5}
                        style={{
                          default: { outline: "none", opacity: isSelected ? 1 : isHovered ? 0.9 : 0.85 },
                          hover: { outline: "none", opacity: 1, cursor: "pointer" },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={(evt) => {
                          setHovered(fips);
                          setTooltip({ x: evt.clientX, y: evt.clientY, fips });
                        }}
                        onMouseLeave={() => {
                          setHovered(null);
                          setTooltip(null);
                        }}
                        onClick={() => setSelectedFips(selectedFips === fips ? null : fips)}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          {/* Tooltip */}
          {tooltip && STATE_DATA[tooltip.fips] && (
            <div
              className="fixed z-50 bg-brand-dark border border-white/20 rounded-xl px-4 py-3 pointer-events-none shadow-xl"
              style={{ left: tooltip.x + 12, top: tooltip.y - 60 }}
            >
              <div className="text-white font-bold text-sm mb-1">{STATE_DATA[tooltip.fips].name}</div>
              <div className="text-white/50 text-xs">
                {STATE_DATA[tooltip.fips].harvested.toLocaleString()} harvested · {STATE_DATA[tooltip.fips].avgScore}" avg
              </div>
            </div>
          )}

          {/* Sample data watermark */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="flex items-center gap-1.5 bg-black/60 border border-white/10 rounded-full px-3 py-1">
              <svg className="w-3 h-3 text-brand-orange/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <span className="text-white/50 text-xs font-semibold tracking-wide">Sample data — not real scores</span>
            </div>
          </div>

          <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between gap-4">
            <p className="text-white/30 text-xs">Click any state to see county breakdown · <span className="text-brand-orange/60">Illustrative data only</span></p>
            <a href="/download" className="shrink-0 text-brand-orange text-xs font-bold hover:underline">See live data in the app →</a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {selectedFips && STATE_DATA[selectedFips] ? (
            <StateDetail fips={selectedFips} onClose={() => setSelectedFips(null)} />
          ) : (
            <div className="bg-white/5 border border-brand-orange/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <div className="text-brand-orange text-xs font-bold uppercase tracking-widest">Web Preview</div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                The full interactive trophy map is <span className="text-white font-semibold">live in the rackline.ai app</span> — with real B&C scores from 25,000+ hunters across every state.
              </p>
              <p className="text-white/40 text-xs leading-relaxed mb-4">
                This web preview uses illustrative data. Click any state to explore the layout, then download the app to see real county-level harvest data.
              </p>
              <a
                href="/download"
                className="block w-full text-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3 text-sm transition-colors"
              >
                See the Live Map in the App →
              </a>
            </div>
          )}

          <Leaderboard metric={metric} onSelect={setSelectedFips} selected={selectedFips} />
        </div>
      </div>

      {/* ── LIVE DATA CTA ── */}
      <div className="mt-10 rounded-2xl bg-brand-green/20 border border-brand-green/30 p-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Live in the App</span>
        </div>
        <h3 className="text-white font-bold text-xl md:text-2xl mb-3">
          The Full Map is in the App
        </h3>
        <p className="text-white/50 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          The rackline.ai app has the live version of this map — real B&amp;C scores by state and county from 25,000+ hunters. Download free and see where giants are actually being harvested near you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/us/app/rackline-ai-ai-deer-scoring/id6751832231"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-bold rounded-xl py-3 px-6 text-sm hover:bg-brand-cream transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on iOS
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.racklineai.assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl py-3 px-6 text-sm transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/></svg>
            Download on Android
          </a>
        </div>
        <p className="text-white/25 text-xs mt-4">Free to download · No credit card required</p>
      </div>

    </div>
  );
}
