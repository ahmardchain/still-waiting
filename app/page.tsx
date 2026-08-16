"use client";

import { useMemo, useState } from "react";

type ProfileKey = "all" | "puppy" | "adult" | "senior";
type IntakeKey = "all" | "stray" | "owner";

type AgeBand = {
  label: string;
  days: number;
  records: number;
};

type Profile = {
  label: string;
  median: number;
  ages: AgeBand[];
};

const profiles: Record<ProfileKey, Profile> = {
  all: {
    label: "All dogs",
    median: 21,
    ages: [
      { label: "Puppy", days: 12, records: 18400 },
      { label: "Young", days: 16, records: 27100 },
      { label: "Adult", days: 26, records: 41800 },
      { label: "Senior", days: 34, records: 9600 },
    ],
  },
  puppy: {
    label: "Puppies",
    median: 12,
    ages: [
      { label: "0–3 mo", days: 9, records: 5800 },
      { label: "4–6 mo", days: 11, records: 6100 },
      { label: "7–9 mo", days: 14, records: 3900 },
      { label: "10–12 mo", days: 17, records: 2600 },
    ],
  },
  adult: {
    label: "Adults",
    median: 26,
    ages: [
      { label: "2–3 yrs", days: 21, records: 14200 },
      { label: "4–5 yrs", days: 25, records: 13700 },
      { label: "6–7 yrs", days: 29, records: 8900 },
      { label: "Unknown", days: 31, records: 5000 },
    ],
  },
  senior: {
    label: "Seniors",
    median: 34,
    ages: [
      { label: "8–9 yrs", days: 29, records: 3800 },
      { label: "10–11 yrs", days: 34, records: 3100 },
      { label: "12–13 yrs", days: 39, records: 1900 },
      { label: "14+ yrs", days: 44, records: 800 },
    ],
  },
};

const intakeTypes: Record<IntakeKey, { label: string; multiplier: number }> = {
  all: { label: "All intake types", multiplier: 1 },
  stray: { label: "Stray", multiplier: 0.9 },
  owner: { label: "Owner surrender", multiplier: 1.18 },
};

const trend = [18, 20, 19, 23, 22, 24, 28, 31, 27, 23, 21];
const years = ["2014", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];

function PawMark() {
  return (
    <span className="paw-mark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}

function TrendChart({ values }: { values: number[] }) {
  const width = 680;
  const height = 280;
  const insetX = 34;
  const insetTop = 22;
  const insetBottom = 46;
  const max = Math.max(...values) + 5;
  const min = Math.max(0, Math.min(...values) - 5);
  const plotHeight = height - insetTop - insetBottom;
  const plotWidth = width - insetX * 2;
  const points = values.map((value, index) => {
    const x = insetX + (plotWidth * index) / (values.length - 1);
    const y = insetTop + ((max - value) / (max - min)) * plotHeight;
    return { x, y, value };
  });
  const line = points.map((point) => point.x + "," + point.y).join(" ");
  const area =
    insetX +
    "," +
    (height - insetBottom) +
    " " +
    line +
    " " +
    (width - insetX) +
    "," +
    (height - insetBottom);

  return (
    <div className="trend-wrap">
      <svg
        className="trend-chart"
        viewBox={"0 0 " + width + " " + height}
        role="img"
        aria-label="Illustrative median shelter wait by year"
      >
        {[0, 1, 2, 3].map((lineIndex) => {
          const y = insetTop + (plotHeight * lineIndex) / 3;
          const value = Math.round(max - ((max - min) * lineIndex) / 3);
          return (
            <g key={lineIndex}>
              <line className="grid-line" x1={insetX} x2={width - insetX} y1={y} y2={y} />
              <text className="axis-value" x="2" y={y + 4}>
                {value}
              </text>
            </g>
          );
        })}
        <polygon className="trend-area" points={area} />
        <polyline className="trend-line" points={line} />
        {points.map((point, index) => (
          <g key={years[index]}>
            <circle className="trend-dot" cx={point.x} cy={point.y} r="5">
              <title>{years[index] + ": " + point.value + " days"}</title>
            </circle>
            <text className="axis-year" x={point.x} y={height - 18}>
              {years[index]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  const [profileKey, setProfileKey] = useState<ProfileKey>("all");
  const [intakeKey, setIntakeKey] = useState<IntakeKey>("all");
  const [showMethod, setShowMethod] = useState(false);

  const profile = profiles[profileKey];
  const intake = intakeTypes[intakeKey];

  const data = useMemo(() => {
    const profileFactor = profile.median / profiles.all.median;
    return {
      median: Math.round(profile.median * intake.multiplier),
      ages: profile.ages.map((age) => ({
        ...age,
        days: Math.round(age.days * intake.multiplier),
      })),
      trend: trend.map((value) => Math.round(value * profileFactor * intake.multiplier)),
    };
  }, [profile, intake]);

  const maxAgeDays = Math.max(...data.ages.map((age) => age.days));
  const recordCount = profile.ages.reduce((sum, age) => sum + age.records, 0);

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Still Waiting home">
          <PawMark />
          <span>Still Waiting</span>
        </a>
        <div className="nav-links">
          <a href="#explore">Explore</a>
          <a href="#methodology">Methodology</a>
          <span className="preview-pill">Preview data</span>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A shelter data story</p>
          <h1>
            Every row is a dog.
            <br />
            Every number is a day
            <br />
            <em>they waited.</em>
          </h1>
          <p className="hero-lede">
            Still Waiting turns years of public shelter records into one clear question:
            which dogs wait longest for a way home?
          </p>
          <a className="primary-link" href="#explore">
            Explore the wait <span aria-hidden="true">↓</span>
          </a>
        </div>
        <aside className="hero-note" aria-label="Project summary">
          <PawMark />
          <p>
            Built with <strong>Snowflake</strong> to join intake and outcome records, calculate
            each stay, and reveal patterns hidden across thousands of rows.
          </p>
          <dl>
            <div>
              <dt>10+</dt>
              <dd>years</dd>
            </div>
            <div>
              <dt>2</dt>
              <dd>datasets</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>urgent question</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="statement">
        <p>
          Averages can make waiting feel abstract. This project makes the pattern visible—so
          overlooked dogs are harder to overlook.
        </p>
      </section>

      <section className="explorer section-shell" id="explore">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Interactive explorer</p>
            <h2>Who waits—and for how long?</h2>
          </div>
          <p className="data-note">
            <span />
            Illustrative preview. Snowflake results replace these values after data load.
          </p>
        </div>

        <div className="filters" aria-label="Chart filters">
          <div className="segmented" aria-label="Dog age group">
            {(Object.keys(profiles) as ProfileKey[]).map((key) => (
              <button
                type="button"
                key={key}
                className={profileKey === key ? "active" : ""}
                onClick={() => setProfileKey(key)}
                aria-pressed={profileKey === key}
              >
                {profiles[key].label}
              </button>
            ))}
          </div>
          <label className="select-label">
            Intake
            <select
              value={intakeKey}
              onChange={(event) => setIntakeKey(event.target.value as IntakeKey)}
            >
              {(Object.keys(intakeTypes) as IntakeKey[]).map((key) => (
                <option key={key} value={key}>
                  {intakeTypes[key].label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="dashboard-grid">
          <article className="metric-card">
            <p>Median time to outcome</p>
            <div className="metric-number">
              <strong>{data.median}</strong>
              <span>days</span>
            </div>
            <p className="metric-context">
              for {profile.label.toLowerCase()} · {intake.label.toLowerCase()}
            </p>
            <div className="record-line">
              <span>{new Intl.NumberFormat("en").format(recordCount)} illustrative records</span>
              <span>2014–2024</span>
            </div>
          </article>

          <article className="chart-card age-card">
            <div className="card-heading">
              <div>
                <p className="card-kicker">By age band</p>
                <h3>Older dogs wait longer</h3>
              </div>
              <span>median days</span>
            </div>
            <div className="bar-list">
              {data.ages.map((age) => (
                <div className="bar-row" key={age.label}>
                  <span>{age.label}</span>
                  <div className="bar-track">
                    <i style={{ width: Math.max(9, (age.days / maxAgeDays) * 100) + "%" }} />
                  </div>
                  <strong>{age.days}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="chart-card trend-card">
            <div className="card-heading">
              <div>
                <p className="card-kicker">Across time</p>
                <h3>The wait is not a fixed number</h3>
              </div>
              <span>median days</span>
            </div>
            <TrendChart values={data.trend} />
          </article>
        </div>
      </section>

      <section className="questions section-shell">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">The questions behind the query</p>
            <h2>What the final analysis will test</h2>
          </div>
        </div>
        <div className="question-grid">
          <article>
            <span>01</span>
            <h3>Does age change the wait?</h3>
            <p>Compare puppies, adults, and seniors using median—not only average—shelter stays.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Does the path in matter?</h3>
            <p>Separate strays from owner surrenders and other intake types to expose context.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Has the pattern shifted?</h3>
            <p>Track annual change and make disruption years visible instead of smoothing them away.</p>
          </article>
        </div>
      </section>

      <section className="methodology" id="methodology">
        <div className="section-shell method-inner">
          <div>
            <p className="eyebrow">Methodology</p>
            <h2>From two messy files to one honest measure.</h2>
            <p className="method-lede">
              Snowflake does the analytical work: cleaning timestamps, matching each intake to
              its next valid outcome, calculating elapsed days, then aggregating without exposing
              individual records.
            </p>
          </div>
          <div className="pipeline" aria-label="Data pipeline">
            <div>
              <span>01</span>
              <strong>Raw intakes</strong>
              <small>CSV → Snowflake</small>
            </div>
            <i aria-hidden="true">+</i>
            <div>
              <span>02</span>
              <strong>Raw outcomes</strong>
              <small>CSV → Snowflake</small>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <span>03</span>
              <strong>Matched stays</strong>
              <small>Animal ID + time</small>
            </div>
            <i aria-hidden="true">→</i>
            <div className="result-step">
              <span>04</span>
              <strong>Wait summary</strong>
              <small>Median + segments</small>
            </div>
          </div>
          <button
            className="method-toggle"
            type="button"
            onClick={() => setShowMethod((value) => !value)}
            aria-expanded={showMethod}
          >
            {showMethod ? "Hide analytical rules" : "Read the analytical rules"}
            <span aria-hidden="true">{showMethod ? "−" : "+"}</span>
          </button>
          {showMethod && (
            <div className="method-details">
              <p>
                One intake is paired only with the earliest outcome after it and before a later
                intake. Negative intervals, non-dog records, and incomplete timestamps are
                excluded. Medians reduce the effect of unusually long or short stays.
              </p>
              <p>
                The public release contains aggregated counts only. The interface always labels
                preview values separately from query-derived results.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <PawMark />
          <div>
            <strong>Still Waiting</strong>
            <span>Data in service of dogs.</span>
          </div>
        </div>
        <p>
          Source planned:{" "}
          <a
            href="https://data.austintexas.gov/browse?category=Health+and+Community+Services"
            target="_blank"
            rel="noreferrer"
          >
            Austin Animal Center open data
          </a>
          . Preview figures are illustrative and must not be cited.
        </p>
      </footer>
    </main>
  );
}
