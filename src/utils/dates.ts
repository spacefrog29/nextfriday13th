export const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export function fridaysThe13th(year: number): Date[] {
  const out: Date[] = [];
  for (let m = 0; m < 12; m++) {
    const d = new Date(year, m, 13);
    if (d.getDay() === 5) out.push(d);
  }
  return out;
}

export function ord(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return String(n) + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
}

export function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function moonPhase(date: Date): string {
  const phases = [
    'New',
    'Waxing Crescent',
    'First Quarter',
    'Waxing Gibbous',
    'Full',
    'Waning Gibbous',
    'Last Quarter',
    'Waning Crescent',
  ];
  const epoch = new Date(2000, 0, 6).getTime();
  const c = Math.floor((date.getTime() - epoch) / 86_400_000);
  const p = (c % 29.53) / 29.53;
  return phases[Math.floor(p * 8) % 8]!;
}

export function formatTopBarDate(d: Date): string {
  const dow = DAY[d.getDay()]!.slice(0, 3);
  const dd = String(d.getDate()).padStart(2, '0');
  const mon = MONTH[d.getMonth()]!.slice(0, 3);
  return `${dow} ${dd} ${mon} ${d.getFullYear()}`.toUpperCase();
}
