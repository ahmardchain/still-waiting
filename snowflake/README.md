# Snowflake runbook

Still Waiting uses two official City of Austin CSV exports:

- [Austin Animal Center Intakes](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Intakes-10-01-2013-to-05-05-2/wter-evkm)
- [Austin Animal Center Outcomes](https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Outcomes-10-01-2013-to-05-05-/9t4d-g238)

## Fastest setup

1. Download each dataset as CSV from its Export menu.
2. In Snowflake, open **Projects → Worksheets → + Worksheet**.
3. Run 01_setup.sql.
4. Use **Home → Upload local files** for each CSV. Select the existing
   STILL_WAITING.ANALYTICS.RAW_INTAKES or RAW_OUTCOMES table and map by
   column order. The first CSV row is a header.
5. Confirm the final query in 01_setup.sql reports non-zero row counts.
6. Run 02_analysis.sql, inspect both quality-check result sets, then run
   03_results.sql.
7. Download the dashboard-cube result from 03_results.sql as CSV. Do not expose
   Snowflake credentials or raw animal-level records in the frontend.

If the upload wizard creates a table instead of offering the existing table,
cancel and reopen it from **Data → Databases → STILL_WAITING → ANALYTICS**, then
choose **Load Data** on the target table.

The production site embeds the validated aggregate export. Rerun the cube query
and replace data/snowflake-dashboard.csv when refreshing the analysis.
