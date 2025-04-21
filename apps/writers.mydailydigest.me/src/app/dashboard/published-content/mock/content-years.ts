import { IPublishedContentYear } from '@cccsharonparish/mydailydigest';

export const CONTENT_YEARS_MOCK: IPublishedContentYear[] = Array.from(
  { length: 10 },
  (_, index) => ({ year: 2024 + index })
);
