export type DashboardRow = {
  yearFilter: string;
  ageFilter: string;
  intakeFilter: string;
  dogStays: number;
  medianWaitDays: number;
  averageWaitDays: number;
};

/**
 * Aggregated in Snowflake from Austin Animal Center intake and outcome data.
 * Complete calendar years: 2014–2024. No animal-level records are shipped.
 */
export const dashboardRows: DashboardRow[] = [
  {
    "yearFilter": "All",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 12674,
    "medianWaitDays": 6,
    "averageWaitDays": 26.8
  },
  {
    "yearFilter": "All",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 2016,
    "medianWaitDays": 8.1,
    "averageWaitDays": 16.7
  },
  {
    "yearFilter": "All",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 3282,
    "medianWaitDays": 10.2,
    "averageWaitDays": 42.3
  },
  {
    "yearFilter": "All",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 7376,
    "medianWaitDays": 4.3,
    "averageWaitDays": 22.6
  },
  {
    "yearFilter": "All",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 89723,
    "medianWaitDays": 6,
    "averageWaitDays": 21.2
  },
  {
    "yearFilter": "All",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 9159,
    "medianWaitDays": 8.3,
    "averageWaitDays": 19.2
  },
  {
    "yearFilter": "All",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 19942,
    "medianWaitDays": 6.9,
    "averageWaitDays": 29.2
  },
  {
    "yearFilter": "All",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 60622,
    "medianWaitDays": 5.3,
    "averageWaitDays": 18.9
  },
  {
    "yearFilter": "All",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 45735,
    "medianWaitDays": 5.9,
    "averageWaitDays": 16.7
  },
  {
    "yearFilter": "All",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 3024,
    "medianWaitDays": 9,
    "averageWaitDays": 18.6
  },
  {
    "yearFilter": "All",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 10103,
    "medianWaitDays": 5,
    "averageWaitDays": 18.9
  },
  {
    "yearFilter": "All",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 32608,
    "medianWaitDays": 5.8,
    "averageWaitDays": 15.9
  },
  {
    "yearFilter": "All",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 7446,
    "medianWaitDays": 3.8,
    "averageWaitDays": 23.8
  },
  {
    "yearFilter": "All",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 1066,
    "medianWaitDays": 6.1,
    "averageWaitDays": 16.4
  },
  {
    "yearFilter": "All",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 1747,
    "medianWaitDays": 7.1,
    "averageWaitDays": 45.2
  },
  {
    "yearFilter": "All",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 4633,
    "medianWaitDays": 2.1,
    "averageWaitDays": 17.5
  },
  {
    "yearFilter": "All",
    "ageFilter": "Unknown",
    "intakeFilter": "All intake types",
    "dogStays": 7,
    "medianWaitDays": 4.1,
    "averageWaitDays": 8.9
  },
  {
    "yearFilter": "All",
    "ageFilter": "Unknown",
    "intakeFilter": "Other",
    "dogStays": 2,
    "medianWaitDays": 4.6,
    "averageWaitDays": 4.6
  },
  {
    "yearFilter": "All",
    "ageFilter": "Unknown",
    "intakeFilter": "Owner surrender",
    "dogStays": 2,
    "medianWaitDays": 21.1,
    "averageWaitDays": 21.1
  },
  {
    "yearFilter": "All",
    "ageFilter": "Unknown",
    "intakeFilter": "Stray",
    "dogStays": 3,
    "medianWaitDays": 4.1,
    "averageWaitDays": 3.6
  },
  {
    "yearFilter": "All",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 23861,
    "medianWaitDays": 7.1,
    "averageWaitDays": 26.2
  },
  {
    "yearFilter": "All",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 3051,
    "medianWaitDays": 8.9,
    "averageWaitDays": 22.4
  },
  {
    "yearFilter": "All",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 4808,
    "medianWaitDays": 10.3,
    "averageWaitDays": 36.1
  },
  {
    "yearFilter": "All",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 16002,
    "medianWaitDays": 6.1,
    "averageWaitDays": 23.9
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 1769,
    "medianWaitDays": 5.1,
    "averageWaitDays": 19.1
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 271,
    "medianWaitDays": 8,
    "averageWaitDays": 11.5
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 364,
    "medianWaitDays": 7.8,
    "averageWaitDays": 27.7
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 1134,
    "medianWaitDays": 4.2,
    "averageWaitDays": 18.1
  },
  {
    "yearFilter": "2014",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 10552,
    "medianWaitDays": 5.1,
    "averageWaitDays": 16.3
  },
  {
    "yearFilter": "2014",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 1006,
    "medianWaitDays": 8,
    "averageWaitDays": 11.5
  },
  {
    "yearFilter": "2014",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 2009,
    "medianWaitDays": 5.1,
    "averageWaitDays": 18.9
  },
  {
    "yearFilter": "2014",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 7537,
    "medianWaitDays": 5,
    "averageWaitDays": 16.2
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 4993,
    "medianWaitDays": 5.1,
    "averageWaitDays": 13.8
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 247,
    "medianWaitDays": 8.3,
    "averageWaitDays": 11.8
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 1036,
    "medianWaitDays": 4.1,
    "averageWaitDays": 13.7
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 3710,
    "medianWaitDays": 5.1,
    "averageWaitDays": 14
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 887,
    "medianWaitDays": 2.9,
    "averageWaitDays": 14.1
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 134,
    "medianWaitDays": 4.2,
    "averageWaitDays": 7.5
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 139,
    "medianWaitDays": 6,
    "averageWaitDays": 27
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 614,
    "medianWaitDays": 1.9,
    "averageWaitDays": 12.6
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 2903,
    "medianWaitDays": 6.2,
    "averageWaitDays": 19.5
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 354,
    "medianWaitDays": 8.8,
    "averageWaitDays": 12.9
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 470,
    "medianWaitDays": 6.9,
    "averageWaitDays": 21.2
  },
  {
    "yearFilter": "2014",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 2079,
    "medianWaitDays": 5.9,
    "averageWaitDays": 20.2
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 1730,
    "medianWaitDays": 5,
    "averageWaitDays": 19.8
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 261,
    "medianWaitDays": 8,
    "averageWaitDays": 12.1
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 357,
    "medianWaitDays": 8,
    "averageWaitDays": 29.2
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 1112,
    "medianWaitDays": 4.1,
    "averageWaitDays": 18.6
  },
  {
    "yearFilter": "2015",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 10287,
    "medianWaitDays": 5.1,
    "averageWaitDays": 16.8
  },
  {
    "yearFilter": "2015",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 970,
    "medianWaitDays": 8,
    "averageWaitDays": 13.9
  },
  {
    "yearFilter": "2015",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1880,
    "medianWaitDays": 5.9,
    "averageWaitDays": 21
  },
  {
    "yearFilter": "2015",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 7437,
    "medianWaitDays": 5,
    "averageWaitDays": 16.1
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 4687,
    "medianWaitDays": 5.1,
    "averageWaitDays": 13.3
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 234,
    "medianWaitDays": 8,
    "averageWaitDays": 13.1
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 856,
    "medianWaitDays": 4.2,
    "averageWaitDays": 14.4
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 3597,
    "medianWaitDays": 5.1,
    "averageWaitDays": 13.1
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 990,
    "medianWaitDays": 3,
    "averageWaitDays": 17.8
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 147,
    "medianWaitDays": 5.3,
    "averageWaitDays": 15.9
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 174,
    "medianWaitDays": 7.1,
    "averageWaitDays": 24.3
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 669,
    "medianWaitDays": 2,
    "averageWaitDays": 16.5
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Unknown",
    "intakeFilter": "All intake types",
    "dogStays": 1,
    "medianWaitDays": 5.8,
    "averageWaitDays": 5.8
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Unknown",
    "intakeFilter": "Stray",
    "dogStays": 1,
    "medianWaitDays": 5.8,
    "averageWaitDays": 5.8
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 2879,
    "medianWaitDays": 6.1,
    "averageWaitDays": 20.2
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 328,
    "medianWaitDays": 8.8,
    "averageWaitDays": 15.1
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 493,
    "medianWaitDays": 7.2,
    "averageWaitDays": 25.2
  },
  {
    "yearFilter": "2015",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 2058,
    "medianWaitDays": 5.8,
    "averageWaitDays": 19.9
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 1551,
    "medianWaitDays": 5.1,
    "averageWaitDays": 22.6
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 233,
    "medianWaitDays": 7.9,
    "averageWaitDays": 12.4
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 337,
    "medianWaitDays": 9,
    "averageWaitDays": 26.7
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 981,
    "medianWaitDays": 4.2,
    "averageWaitDays": 23.7
  },
  {
    "yearFilter": "2016",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 9903,
    "medianWaitDays": 5.1,
    "averageWaitDays": 17.7
  },
  {
    "yearFilter": "2016",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 886,
    "medianWaitDays": 8.1,
    "averageWaitDays": 15.8
  },
  {
    "yearFilter": "2016",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1923,
    "medianWaitDays": 6.2,
    "averageWaitDays": 23.4
  },
  {
    "yearFilter": "2016",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 7094,
    "medianWaitDays": 4.9,
    "averageWaitDays": 16.4
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 4920,
    "medianWaitDays": 5.1,
    "averageWaitDays": 13.5
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 250,
    "medianWaitDays": 8.8,
    "averageWaitDays": 11.4
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 906,
    "medianWaitDays": 4.1,
    "averageWaitDays": 17.6
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 3764,
    "medianWaitDays": 5,
    "averageWaitDays": 12.6
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 940,
    "medianWaitDays": 3.5,
    "averageWaitDays": 22.3
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 117,
    "medianWaitDays": 7,
    "averageWaitDays": 23.9
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 215,
    "medianWaitDays": 8.1,
    "averageWaitDays": 38
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 608,
    "medianWaitDays": 2,
    "averageWaitDays": 16.5
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Unknown",
    "intakeFilter": "All intake types",
    "dogStays": 1,
    "medianWaitDays": 42.1,
    "averageWaitDays": 42.1
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Unknown",
    "intakeFilter": "Owner surrender",
    "dogStays": 1,
    "medianWaitDays": 42.1,
    "averageWaitDays": 42.1
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 2491,
    "medianWaitDays": 6.1,
    "averageWaitDays": 21.2
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 286,
    "medianWaitDays": 8.9,
    "averageWaitDays": 19.1
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 464,
    "medianWaitDays": 8.6,
    "averageWaitDays": 25.7
  },
  {
    "yearFilter": "2016",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 1741,
    "medianWaitDays": 5.2,
    "averageWaitDays": 20.4
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 1544,
    "medianWaitDays": 5,
    "averageWaitDays": 17.9
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 246,
    "medianWaitDays": 9,
    "averageWaitDays": 15.7
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 410,
    "medianWaitDays": 6.2,
    "averageWaitDays": 28.8
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 888,
    "medianWaitDays": 4,
    "averageWaitDays": 13.4
  },
  {
    "yearFilter": "2017",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 9893,
    "medianWaitDays": 5,
    "averageWaitDays": 15.1
  },
  {
    "yearFilter": "2017",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 1040,
    "medianWaitDays": 9,
    "averageWaitDays": 16
  },
  {
    "yearFilter": "2017",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 2119,
    "medianWaitDays": 4.2,
    "averageWaitDays": 21.9
  },
  {
    "yearFilter": "2017",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 6734,
    "medianWaitDays": 4.4,
    "averageWaitDays": 12.9
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 4877,
    "medianWaitDays": 4.8,
    "averageWaitDays": 11.7
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 298,
    "medianWaitDays": 9.9,
    "averageWaitDays": 13.9
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 972,
    "medianWaitDays": 3,
    "averageWaitDays": 11.9
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 3607,
    "medianWaitDays": 4.9,
    "averageWaitDays": 11.4
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 922,
    "medianWaitDays": 3.4,
    "averageWaitDays": 22.3
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 118,
    "medianWaitDays": 8.1,
    "averageWaitDays": 16.3
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 223,
    "medianWaitDays": 4.9,
    "averageWaitDays": 45.2
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 581,
    "medianWaitDays": 1.9,
    "averageWaitDays": 14.8
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Unknown",
    "intakeFilter": "All intake types",
    "dogStays": 1,
    "medianWaitDays": 4.1,
    "averageWaitDays": 4.1
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Unknown",
    "intakeFilter": "Stray",
    "dogStays": 1,
    "medianWaitDays": 4.1,
    "averageWaitDays": 4.1
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 2549,
    "medianWaitDays": 6,
    "averageWaitDays": 17.5
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 378,
    "medianWaitDays": 9,
    "averageWaitDays": 17.8
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 514,
    "medianWaitDays": 7.3,
    "averageWaitDays": 25.3
  },
  {
    "yearFilter": "2017",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 1657,
    "medianWaitDays": 5,
    "averageWaitDays": 15.1
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 1403,
    "medianWaitDays": 5.4,
    "averageWaitDays": 24.3
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 226,
    "medianWaitDays": 8.9,
    "averageWaitDays": 15.3
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 386,
    "medianWaitDays": 9.1,
    "averageWaitDays": 44.3
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 791,
    "medianWaitDays": 4,
    "averageWaitDays": 17.2
  },
  {
    "yearFilter": "2018",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 9970,
    "medianWaitDays": 5.2,
    "averageWaitDays": 21.5
  },
  {
    "yearFilter": "2018",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 838,
    "medianWaitDays": 8.7,
    "averageWaitDays": 17.3
  },
  {
    "yearFilter": "2018",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 2150,
    "medianWaitDays": 6,
    "averageWaitDays": 31.7
  },
  {
    "yearFilter": "2018",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 6982,
    "medianWaitDays": 5,
    "averageWaitDays": 18.8
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 5224,
    "medianWaitDays": 5.2,
    "averageWaitDays": 18.3
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 235,
    "medianWaitDays": 8.4,
    "averageWaitDays": 17.2
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 1058,
    "medianWaitDays": 4.1,
    "averageWaitDays": 19.2
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 3931,
    "medianWaitDays": 5.2,
    "averageWaitDays": 18.1
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 881,
    "medianWaitDays": 3.1,
    "averageWaitDays": 27.2
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 106,
    "medianWaitDays": 8,
    "averageWaitDays": 15.1
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 203,
    "medianWaitDays": 7,
    "averageWaitDays": 59.4
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 572,
    "medianWaitDays": 1.3,
    "averageWaitDays": 18
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Unknown",
    "intakeFilter": "All intake types",
    "dogStays": 2,
    "medianWaitDays": 4.6,
    "averageWaitDays": 4.6
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Unknown",
    "intakeFilter": "Other",
    "dogStays": 2,
    "medianWaitDays": 4.6,
    "averageWaitDays": 4.6
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 2460,
    "medianWaitDays": 6.1,
    "averageWaitDays": 24.7
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 269,
    "medianWaitDays": 8.9,
    "averageWaitDays": 20.1
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 503,
    "medianWaitDays": 10,
    "averageWaitDays": 37.3
  },
  {
    "yearFilter": "2018",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 1688,
    "medianWaitDays": 5.1,
    "averageWaitDays": 21.6
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 1452,
    "medianWaitDays": 6,
    "averageWaitDays": 23.6
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 224,
    "medianWaitDays": 7.1,
    "averageWaitDays": 11
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 396,
    "medianWaitDays": 10.4,
    "averageWaitDays": 41.9
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 832,
    "medianWaitDays": 4.1,
    "averageWaitDays": 18.2
  },
  {
    "yearFilter": "2019",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 10889,
    "medianWaitDays": 5.3,
    "averageWaitDays": 18.1
  },
  {
    "yearFilter": "2019",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 814,
    "medianWaitDays": 7.8,
    "averageWaitDays": 15.8
  },
  {
    "yearFilter": "2019",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 2532,
    "medianWaitDays": 6.1,
    "averageWaitDays": 28
  },
  {
    "yearFilter": "2019",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 7543,
    "medianWaitDays": 5.1,
    "averageWaitDays": 15
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 5676,
    "medianWaitDays": 5.2,
    "averageWaitDays": 13.6
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 230,
    "medianWaitDays": 8.2,
    "averageWaitDays": 17.7
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 1291,
    "medianWaitDays": 4.1,
    "averageWaitDays": 16.7
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 4155,
    "medianWaitDays": 5.2,
    "averageWaitDays": 12.5
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 879,
    "medianWaitDays": 3.8,
    "averageWaitDays": 30.4
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 84,
    "medianWaitDays": 7.2,
    "averageWaitDays": 22.2
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 253,
    "medianWaitDays": 6.9,
    "averageWaitDays": 55.2
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 542,
    "medianWaitDays": 1.9,
    "averageWaitDays": 20.1
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Unknown",
    "intakeFilter": "All intake types",
    "dogStays": 2,
    "medianWaitDays": 0.6,
    "averageWaitDays": 0.6
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Unknown",
    "intakeFilter": "Owner surrender",
    "dogStays": 1,
    "medianWaitDays": 0.1,
    "averageWaitDays": 0.1
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Unknown",
    "intakeFilter": "Stray",
    "dogStays": 1,
    "medianWaitDays": 1.1,
    "averageWaitDays": 1.1
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 2880,
    "medianWaitDays": 6.2,
    "averageWaitDays": 20.3
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 276,
    "medianWaitDays": 7.2,
    "averageWaitDays": 16.2
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 591,
    "medianWaitDays": 9.1,
    "averageWaitDays": 31.9
  },
  {
    "yearFilter": "2019",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 2013,
    "medianWaitDays": 5.9,
    "averageWaitDays": 17.4
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 679,
    "medianWaitDays": 8.2,
    "averageWaitDays": 42.6
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 103,
    "medianWaitDays": 9,
    "averageWaitDays": 26.3
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 226,
    "medianWaitDays": 17.6,
    "averageWaitDays": 72
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 350,
    "medianWaitDays": 5.2,
    "averageWaitDays": 28.5
  },
  {
    "yearFilter": "2020",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 5407,
    "medianWaitDays": 6.1,
    "averageWaitDays": 27.4
  },
  {
    "yearFilter": "2020",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 620,
    "medianWaitDays": 7.8,
    "averageWaitDays": 18.8
  },
  {
    "yearFilter": "2020",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1438,
    "medianWaitDays": 10,
    "averageWaitDays": 47.2
  },
  {
    "yearFilter": "2020",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 3349,
    "medianWaitDays": 5.3,
    "averageWaitDays": 20.6
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 2619,
    "medianWaitDays": 5.8,
    "averageWaitDays": 18.9
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 250,
    "medianWaitDays": 7.3,
    "averageWaitDays": 13.1
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 679,
    "medianWaitDays": 6.2,
    "averageWaitDays": 30.5
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 1690,
    "medianWaitDays": 5.3,
    "averageWaitDays": 15.1
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 456,
    "medianWaitDays": 3.9,
    "averageWaitDays": 31.3
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 66,
    "medianWaitDays": 3.9,
    "averageWaitDays": 7.2
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 146,
    "medianWaitDays": 14.6,
    "averageWaitDays": 65
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 244,
    "medianWaitDays": 1.9,
    "averageWaitDays": 17.7
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 1653,
    "medianWaitDays": 7.2,
    "averageWaitDays": 33.6
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 201,
    "medianWaitDays": 8,
    "averageWaitDays": 25.8
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 387,
    "medianWaitDays": 13.2,
    "averageWaitDays": 55.2
  },
  {
    "yearFilter": "2020",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 1065,
    "medianWaitDays": 6.2,
    "averageWaitDays": 27.3
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 695,
    "medianWaitDays": 7.3,
    "averageWaitDays": 39.7
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 86,
    "medianWaitDays": 7.1,
    "averageWaitDays": 34.1
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 273,
    "medianWaitDays": 14.1,
    "averageWaitDays": 52.3
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 336,
    "medianWaitDays": 5.9,
    "averageWaitDays": 30.9
  },
  {
    "yearFilter": "2021",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 6215,
    "medianWaitDays": 7.1,
    "averageWaitDays": 23.7
  },
  {
    "yearFilter": "2021",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 629,
    "medianWaitDays": 7.1,
    "averageWaitDays": 22.1
  },
  {
    "yearFilter": "2021",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1916,
    "medianWaitDays": 8.2,
    "averageWaitDays": 32.1
  },
  {
    "yearFilter": "2021",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 3670,
    "medianWaitDays": 7,
    "averageWaitDays": 19.6
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 3229,
    "medianWaitDays": 7,
    "averageWaitDays": 16.3
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 273,
    "medianWaitDays": 7.4,
    "averageWaitDays": 15.7
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 1015,
    "medianWaitDays": 6,
    "averageWaitDays": 18.7
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 1941,
    "medianWaitDays": 7.1,
    "averageWaitDays": 15.2
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 472,
    "medianWaitDays": 4,
    "averageWaitDays": 29
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 62,
    "medianWaitDays": 5,
    "averageWaitDays": 16.2
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 157,
    "medianWaitDays": 8.2,
    "averageWaitDays": 47.9
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 253,
    "medianWaitDays": 3.2,
    "averageWaitDays": 20.4
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 1819,
    "medianWaitDays": 9.1,
    "averageWaitDays": 29.4
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 208,
    "medianWaitDays": 7.5,
    "averageWaitDays": 27.2
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 471,
    "medianWaitDays": 13,
    "averageWaitDays": 44.2
  },
  {
    "yearFilter": "2021",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 1140,
    "medianWaitDays": 8.1,
    "averageWaitDays": 23.6
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 698,
    "medianWaitDays": 8.2,
    "averageWaitDays": 48.9
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 118,
    "medianWaitDays": 7.6,
    "averageWaitDays": 21.8
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 214,
    "medianWaitDays": 15.2,
    "averageWaitDays": 62
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 366,
    "medianWaitDays": 6.8,
    "averageWaitDays": 50.1
  },
  {
    "yearFilter": "2022",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 6480,
    "medianWaitDays": 8.2,
    "averageWaitDays": 30.1
  },
  {
    "yearFilter": "2022",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 771,
    "medianWaitDays": 9.3,
    "averageWaitDays": 26.5
  },
  {
    "yearFilter": "2022",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1614,
    "medianWaitDays": 7.1,
    "averageWaitDays": 33.4
  },
  {
    "yearFilter": "2022",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 4095,
    "medianWaitDays": 8.3,
    "averageWaitDays": 29.5
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 3757,
    "medianWaitDays": 7.9,
    "averageWaitDays": 21.8
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 332,
    "medianWaitDays": 11.1,
    "averageWaitDays": 26.4
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 988,
    "medianWaitDays": 5.2,
    "averageWaitDays": 20.4
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 2437,
    "medianWaitDays": 8.2,
    "averageWaitDays": 21.7
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 351,
    "medianWaitDays": 4.1,
    "averageWaitDays": 25.6
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 79,
    "medianWaitDays": 6.3,
    "averageWaitDays": 18.3
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 77,
    "medianWaitDays": 7.3,
    "averageWaitDays": 40.8
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 195,
    "medianWaitDays": 3.3,
    "averageWaitDays": 22.6
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 1674,
    "medianWaitDays": 12,
    "averageWaitDays": 42
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 242,
    "medianWaitDays": 9.9,
    "averageWaitDays": 31.5
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 335,
    "medianWaitDays": 14.9,
    "averageWaitDays": 51.8
  },
  {
    "yearFilter": "2022",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 1097,
    "medianWaitDays": 11.9,
    "averageWaitDays": 41.3
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 544,
    "medianWaitDays": 13.6,
    "averageWaitDays": 46.6
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 108,
    "medianWaitDays": 9,
    "averageWaitDays": 27.3
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 157,
    "medianWaitDays": 31,
    "averageWaitDays": 72.9
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 279,
    "medianWaitDays": 9.3,
    "averageWaitDays": 39.3
  },
  {
    "yearFilter": "2023",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 5064,
    "medianWaitDays": 13.9,
    "averageWaitDays": 36
  },
  {
    "yearFilter": "2023",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 754,
    "medianWaitDays": 10.4,
    "averageWaitDays": 33.7
  },
  {
    "yearFilter": "2023",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1214,
    "medianWaitDays": 18.1,
    "averageWaitDays": 43.1
  },
  {
    "yearFilter": "2023",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 3096,
    "medianWaitDays": 13.2,
    "averageWaitDays": 33.7
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 2895,
    "medianWaitDays": 14,
    "averageWaitDays": 28.3
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 327,
    "medianWaitDays": 11.3,
    "averageWaitDays": 29.5
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 676,
    "medianWaitDays": 15,
    "averageWaitDays": 30.2
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 1892,
    "medianWaitDays": 14.1,
    "averageWaitDays": 27.4
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 316,
    "medianWaitDays": 4.2,
    "averageWaitDays": 26.6
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 79,
    "medianWaitDays": 4.3,
    "averageWaitDays": 25.7
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 73,
    "medianWaitDays": 8.1,
    "averageWaitDays": 35.3
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 164,
    "medianWaitDays": 3.9,
    "averageWaitDays": 23.1
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 1309,
    "medianWaitDays": 19.1,
    "averageWaitDays": 50.8
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 240,
    "medianWaitDays": 12.8,
    "averageWaitDays": 45
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 308,
    "medianWaitDays": 29,
    "averageWaitDays": 58
  },
  {
    "yearFilter": "2023",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 761,
    "medianWaitDays": 17.2,
    "averageWaitDays": 49.7
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Adult",
    "intakeFilter": "All intake types",
    "dogStays": 609,
    "medianWaitDays": 12.8,
    "averageWaitDays": 39.3
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Adult",
    "intakeFilter": "Other",
    "dogStays": 140,
    "medianWaitDays": 8.6,
    "averageWaitDays": 25.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Adult",
    "intakeFilter": "Owner surrender",
    "dogStays": 162,
    "medianWaitDays": 20.7,
    "averageWaitDays": 53.8
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Adult",
    "intakeFilter": "Stray",
    "dogStays": 307,
    "medianWaitDays": 12,
    "averageWaitDays": 38.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "All dogs",
    "intakeFilter": "All intake types",
    "dogStays": 5063,
    "medianWaitDays": 10.8,
    "averageWaitDays": 30.1
  },
  {
    "yearFilter": "2024",
    "ageFilter": "All dogs",
    "intakeFilter": "Other",
    "dogStays": 831,
    "medianWaitDays": 10.6,
    "averageWaitDays": 25.5
  },
  {
    "yearFilter": "2024",
    "ageFilter": "All dogs",
    "intakeFilter": "Owner surrender",
    "dogStays": 1147,
    "medianWaitDays": 11.2,
    "averageWaitDays": 33.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "All dogs",
    "intakeFilter": "Stray",
    "dogStays": 3085,
    "medianWaitDays": 10.7,
    "averageWaitDays": 30.3
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Puppy",
    "intakeFilter": "All intake types",
    "dogStays": 2858,
    "medianWaitDays": 10.2,
    "averageWaitDays": 25
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Puppy",
    "intakeFilter": "Other",
    "dogStays": 348,
    "medianWaitDays": 13.2,
    "averageWaitDays": 26.8
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Puppy",
    "intakeFilter": "Owner surrender",
    "dogStays": 626,
    "medianWaitDays": 8.2,
    "averageWaitDays": 23.1
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Puppy",
    "intakeFilter": "Stray",
    "dogStays": 1884,
    "medianWaitDays": 10.2,
    "averageWaitDays": 25.3
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Senior",
    "intakeFilter": "All intake types",
    "dogStays": 352,
    "medianWaitDays": 5.2,
    "averageWaitDays": 27.5
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Senior",
    "intakeFilter": "Other",
    "dogStays": 74,
    "medianWaitDays": 4.8,
    "averageWaitDays": 13.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Senior",
    "intakeFilter": "Owner surrender",
    "dogStays": 87,
    "medianWaitDays": 14.2,
    "averageWaitDays": 45.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Senior",
    "intakeFilter": "Stray",
    "dogStays": 191,
    "medianWaitDays": 5,
    "averageWaitDays": 24.9
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Young",
    "intakeFilter": "All intake types",
    "dogStays": 1244,
    "medianWaitDays": 13.9,
    "averageWaitDays": 38.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Young",
    "intakeFilter": "Other",
    "dogStays": 269,
    "medianWaitDays": 10.7,
    "averageWaitDays": 27.4
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Young",
    "intakeFilter": "Owner surrender",
    "dogStays": 272,
    "medianWaitDays": 19.2,
    "averageWaitDays": 40.2
  },
  {
    "yearFilter": "2024",
    "ageFilter": "Young",
    "intakeFilter": "Stray",
    "dogStays": 703,
    "medianWaitDays": 14.1,
    "averageWaitDays": 41.5
  }
];

