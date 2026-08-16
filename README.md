# Still Waiting

Still Waiting is an interactive shelter-data story for the
[DEV Weekend Challenge: Dog Days Edition](https://dev.to/challenges/weekend-2026-08-13).
It asks a focused question: which dogs wait longest for a way home?

The production interface uses a validated aggregate export from Snowflake:
89,723 matched dog stays across complete calendar years 2014–2024. No
animal-level records are shipped to the browser.

## What is built

- Responsive editorial landing page
- Interactive age and intake filters backed by the Snowflake aggregate cube
- Headline median, age-band bars, and annual trend
- Expandable methodology and matching rules
- Snowflake setup, transformation, quality-check, and reproducible export SQL

## Run locally

    npm run dev

## Snowflake

Follow [snowflake/README.md](snowflake/README.md). Run the scripts in order:

1. snowflake/01_setup.sql
2. snowflake/02_analysis.sql
3. snowflake/03_results.sql

The analytical grain is one matched shelter stay. Each intake is paired with
the earliest valid outcome before that animal's next intake. Final web output
contains aggregate counts and medians only.

The validated export is retained at data/snowflake-dashboard.csv and compiled
into the typed frontend module at app/dashboard-data.ts.

## Data source

City of Austin Open Data:

- [Animal Center Intakes](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Intakes-10-01-2013-to-05-05-2/wter-evkm)
- [Animal Center Outcomes](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Outcomes-10-01-2013-to-05-05-/9t4d-g238)
