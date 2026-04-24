export type TickerFact = { tag: string; text: string };

export const tickerFacts: TickerFact[] = [
  {
    tag: 'Superstition',
    text: "Never set sail on a Friday — an old mariners' rule, older than Friday itself.",
  },
  {
    tag: 'Etymology',
    text: "Paraskevidekatriaphobia: the fear of Friday the 13th, from the Greek for 'Friday' and 'thirteen'.",
  },
  {
    tag: 'Arithmetic',
    text: 'Across the 400-year Gregorian cycle, the 13th lands on Friday 688 times — more than any other day.',
  },
  {
    tag: 'Architecture',
    text: 'Many hotels omit a 13th floor. The 14th sits directly above the 12th.',
  },
  {
    tag: 'Aviation',
    text: 'Air France, Continental, and others have skipped a row 13 on aircraft seat maps.',
  },
  {
    tag: 'Folklore',
    text: 'Thirteen guests at a supper is considered an omen — one will die within the year, says the oldest version of the tale.',
  },
  {
    tag: 'History',
    text: 'On Friday 13 October 1307, King Philip IV of France ordered the mass arrest of the Knights Templar.',
  },
  {
    tag: 'Italy',
    text: 'In Italy, 17 is the unlucky number — not 13. A Friday the 17th is the day to watch.',
  },
  {
    tag: 'Astronomy',
    text: 'Asteroid 99942 Apophis will pass closer than our geostationary satellites on Friday, April 13, 2029.',
  },
  {
    tag: 'Finance',
    text: "Markets statistically trade slightly higher on Friday the 13th than other Fridays — the 'Friday the 13th effect'.",
  },
  {
    tag: 'Language',
    text: 'In Spanish-speaking countries, Tuesday the 13th (martes trece) is the day of ill omen.',
  },
  {
    tag: 'Patterns',
    text: 'Any month that begins on a Sunday will contain a Friday the 13th. Always.',
  },
  {
    tag: 'Frequency',
    text: 'On average, a Friday the 13th occurs every 212.35 days — about 1.72 times per year.',
  },
  {
    tag: 'Phobia',
    text: 'An estimated 17 to 21 million people in the United States are affected by fear of this date.',
  },
];

export type LoreItem = { num: string; title: string; body: string };

export const loreItems: LoreItem[] = [
  {
    num: '№ 01',
    title: 'Every month with a 13th that is Friday began on a Sunday.',
    body: "A small piece of arithmetic you can verify without a calendar. It has never been otherwise.",
  },
  {
    num: '№ 02',
    title: 'The 13th is more likely to fall on a Friday than any other day.',
    body: 'Across the 400-year Gregorian cycle, Fridays edge out the others by the slimmest of margins.',
  },
  {
    num: '№ 03',
    title: 'A year contains at least one, at most three.',
    body: 'Three is rare and uncomfortable. Two is the quieter arrangement.',
  },
  {
    num: '№ 04',
    title: 'Hotels, ships, and hospitals have been known to skip it entirely.',
    body: 'A thirteenth floor or cabin can exist on paper without existing in space.',
  },
];
