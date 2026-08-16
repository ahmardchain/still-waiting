"use client";

import { useMemo, useState } from "react";
import { dashboardRows, type DashboardRow } from "./dashboard-data";

type ProfileKey = "all" | "puppy" | "young" | "adult" | "senior";
type IntakeKey = "all" | "stray" | "owner" | "other";

type TrendPoint = {
  year: string;
  days: number;
};

const profiles: Record<ProfileKey, { label: string; dataLabel: string }> = {
  all: { label: "All dogs", dataLabel: "All dogs" },
  puppy: { label: "Puppies", dataLabel: "Puppy" },
  young: { label: "Young", dataLabel: "Young" },
  adult: { label: "Adults", dataLabel: "Adult" },
  senior: { label: "Seniors", dataLabel: "Senior" },
};

const intakeTypes: Record<IntakeKey, { label: string; dataLabel: string }> = {
  all: { label: "All intake types", dataLabel: "All intake types" },
  stray: { label: "Stray", dataLabel: "Stray" },
  owner: { label: "Owner surrender", dataLabel: "Owner surrender" },
  other: { label: "Other", dataLabel: "Other" },
};

const ageOrder = ["Puppy", "Young", "Adult", "Senior"] as const;
const ageProfileKeys: Record<(typeof ageOrder)[number], ProfileKey> = {
  Puppy: "puppy",
  Young: "young",
  Adult: "adult",
  Senior: "senior",
};
const years = Array.from({ length: 11 }, (_, index) => String(2014 + index));
const numberFormatter = new Intl.NumberFormat("en");

function findMetric(year: string, age: string, intake: string): DashboardRow | undefined {
  return dashboardRows.find(
    (row) =>
      row.yearFilter === year &&
      row.ageFilter === age &&
      row.intakeFilter === intake,
  );
}

function formatDays(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

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

function TrendChart({ points }: { points: TrendPoint[] }) {
  const width = 680;
  const height = 280;
  const insetX = 34;
  const insetTop = 22;
  const insetBottom = 46;
  const values = points.map((point) => point.days);
  const max = Math.ceil(Math.max(...values)) + 2;
  const min = Math.max(0, Math.floor(Math.min(...values)) - 2);
  const range = Math.max(1, max - min);
  const plotHeight = height - insetTop - insetBottom;
  const plotWidth = width - insetX * 2;
  const chartPoints = points.map((point, index) => {
    const x = insetX + (plotWidth * index) / Math.max(1, points.length - 1);
    const y = insetTop + ((max - point.days) / range) * plotHeight;
    return { ...point, x, y };
  });
  const line = chartPoints.map((point) => point.x + "," + point.y).join(" ");
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
        aria-label="Snowflake median shelter wait by intake year"
      >
        {[0, 1, 2, 3].map((lineIndex) => {
          const y = insetTop + (plotHeight * lineIndex) / 3;
          const value = Math.round(max - (range * lineIndex) / 3);
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
        {chartPoints.map((point, index) => (
          <g key={point.year}>
            <circle className="trend-dot" cx={point.x} cy={point.y} r="5">
              <title>{point.year + ": " + formatDays(point.days) + " median days"}</title>
            </circle>
            <text className="axis-year" x={point.x} y={height - 18}>
              {index === 0 ? point.year : point.year.slice(2)}
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
    const selected =
      findMetric("All", profile.dataLabel, intake.dataLabel) ??
      findMetric("All", "All dogs", "All intake types")!;

    const ages = ageOrder.flatMap((label) => {
      const metric = findMetric("All", label, intake.dataLabel);
      return metric
        ? [
            {
              label,
              profileKey: ageProfileKeys[label],
              days: metric.medianWaitDays,
              records: metric.dogStays,
            },
          ]
        : [];
    });

    const trend = years.flatMap((year) => {
      const metric = findMetric(year, profile.dataLabel, intake.dataLabel);
      return metric ? [{ year, days: metric.medianWaitDays }] : [];
    });

    return { selected, ages, trend };
  }, [profile, intake]);

  const maxAgeDays = Math.max(...data.ages.map((age) => age.days));
  const peak = data.trend.reduce(
    (highest, point) => (point.days > highest.days ? point : highest),
    data.trend[0],
  );

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
          <span className="preview-pill data-live">Snowflake data</span>
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
            Still Waiting joins more than a decade of public shelter records to ask one clear
            question: which dogs wait longest for a way home?
          </p>
          <a className="primary-link" href="#explore">
            Explore the wait <span aria-hidden="true">↓</span>
          </a>
        </div>
        <aside className="hero-note" aria-label="Project summary">
          <PawMark />
          <p>
            Built with <strong>Snowflake</strong> to pair each intake with its next valid outcome,
            calculate the stay, and aggregate the patterns.
          </p>
          <dl>
            <div>
              <dt>11</dt>
              <dd>complete years</dd>
            </div>
            <div>
              <dt>89.7k</dt>
              <dd>analyzed stays</dd>
            </div>
            <div>
              <dt>2</dt>
              <dd>joined datasets</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="statement">
        <p>
          The median stay was six days. The average was 21.2. That gap is the long tail of dogs
          still waiting.
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
            Verified Snowflake aggregates · 89,723 complete-year stays.
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
              <strong>{formatDays(data.selected.medianWaitDays)}</strong>
              <span>days</span>
            </div>
            <p className="metric-context">
              {profile.label} · {intake.label}
            </p>
            <p className="metric-average">
              Average: {formatDays(data.selected.averageWaitDays)} days
            </p>
            <div className="record-line">
              <span>{numberFormatter.format(data.selected.dogStays)} matched stays</span>
              <span>2014–2024</span>
            </div>
          </article>

          <article className="chart-card age-card">
            <div className="card-heading">
              <div>
                <p className="card-kicker">By age band</p>
                <h3>The age pattern isn&apos;t linear</h3>
              </div>
              <span>tap to filter</span>
            </div>
            <div className="bar-list">
              {data.ages.map((age) => (
                <button
                  className={"bar-row " + (profileKey === age.profileKey ? "selected" : "")}
                  key={age.label}
                  type="button"
                  onClick={() => setProfileKey(age.profileKey)}
                  aria-pressed={profileKey === age.profileKey}
                  aria-label={
                    age.label +
                    ": " +
                    formatDays(age.days) +
                    " median days across " +
                    numberFormatter.format(age.records) +
                    " stays"
                  }
                >
                  <span>{age.label}</span>
                  <div className="bar-track">
                    <i style={{ width: Math.max(9, (age.days / maxAgeDays) * 100) + "%" }} />
                  </div>
                  <strong>{formatDays(age.days)}</strong>
                </button>
              ))}
            </div>
          </article>

          <article className="chart-card trend-card">
            <div className="card-heading">
              <div>
                <p className="card-kicker">Across time</p>
                <h3>Median wait by intake year</h3>
              </div>
              <span>
                Peak {formatDays(peak.days)} · {peak.year}
              </span>
            </div>
            <TrendChart points={data.trend} />
          </article>
        </div>
      </section>

      <section className="questions section-shell">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Snowflake findings</p>
            <h2>What the records revealed</h2>
          </div>
        </div>
        <div className="question-grid">
          <article>
            <span>01</span>
            <h3>Six days hides a long tail.</h3>
            <p>
              Across 89,723 stays, the median was 6 days while the average reached 21.2 days.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>The wait peaked in 2023.</h3>
            <p>
              The shelter-wide median rose from 5.3 days in 2019 to 13.9 in 2023, then eased to
              10.8 in 2024.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Intake context matters.</h3>
            <p>
              Median stays were 5.3 days for strays, 6.9 for owner surrenders, and 8.3 for other
              intake paths.
            </p>
          </article>
        </div>
      </section>

      <section className="methodology" id="methodology">
        <div className="section-shell method-inner">
          <div>
            <p className="eyebrow">Methodology</p>
            <h2>From two messy files to one honest measure.</h2>
            <p className="method-lede">
              Snowflake cleans timestamps, matches each intake to its next valid outcome,
              calculates elapsed days, and builds a filterable aggregate cube without publishing
              animal-level records.
            </p>
          </div>
          <div className="pipeline" aria-label="Data pipeline">
            <div>
              <span>01</span>
              <strong>Raw intakes</strong>
              <small>173,813 rows</small>
            </div>
            <i aria-hidden="true">+</i>
            <div>
              <span>02</span>
              <strong>Raw outcomes</strong>
              <small>173,775 rows</small>
            </div>
            <i aria-hidden="true">→</i>
            <div>
              <span>03</span>
              <strong>Matched stays</strong>
              <small>93,792 stays</small>
            </div>
            <i aria-hidden="true">→</i>
            <div className="result-step">
              <span>04</span>
              <strong>Wait summary</strong>
              <small>89,723 complete-year stays</small>
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
                intake. Non-dog rows, incomplete timestamps, and negative intervals are excluded.
                Medians reduce the influence of unusually long stays.
              </p>
              <p>
                The analysis uses complete calendar years 2014–2024. Of 93,792 matched dog stays,
                89,723 fall inside that window. The public interface contains aggregates only.
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
          Source: City of Austin open data—{" "}
          <a
            href="https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Intakes-10-01-2013-to-05-05-2/wter-evkm"
            target="_blank"
            rel="noreferrer"
          >
            intakes
          </a>{" "}
          and{" "}
          <a
            href="https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Outcomes-10-01-2013-to-05-05-/9t4d-g238"
            target="_blank"
            rel="noreferrer"
          >
            outcomes
          </a>
          . Aggregated in Snowflake for complete years 2014–2024.
        </p>
      </footer>
    </main>
  );
}
