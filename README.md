# Still Waiting

Still Waiting is an interactive shelter-data story for the
[DEV Weekend Challenge: Dog Days Edition](https://dev.to/challenges/weekend-2026-08-13).
It asks a focused question: which dogs wait longest for a way home?

The interface is deliberately transparent about data state. The current values
are illustrative preview data; they must be replaced with the aggregate output
from Snowflake before the final submission.

## What is built

- Responsive editorial landing page
- Interactive age and intake filters
- Headline median, age-band bars, and annual trend
- Expandable methodology and matching rules
- Snowflake setup, transformation, quality-check, and result SQL

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

## Data source

City of Austin Open Data:

- [Animal Center Intakes](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Intakes-10-01-2013-to-05-05-2/wter-evkm)
- [Animal Center Outcomes](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Outcomes-10-01-2013-to-05-05-/9t4d-g238)
