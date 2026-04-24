import { useMemo, type ReactNode } from 'react';
import { Almanac } from './components/Almanac';
import { Hero } from './components/Hero';
import { Lore } from './components/Lore';
import { Masthead } from './components/Masthead';
import { PageFooter } from './components/PageFooter';
import { Ticker } from './components/Ticker';
import { TopBar } from './components/TopBar';
import { useNow } from './hooks/useNow';
import { fridaysThe13th, startOfDay } from './utils/dates';

const WORDS = ['none', 'one', 'two', 'three'] as const;
const ORD_WORD = ['', 'first', 'second', 'third', 'fourth'] as const;

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildFootnote(
  year: number,
  thisYear: Date[],
  next: Date,
  today: Date,
): ReactNode {
  const count = thisYear.length;
  const passed = thisYear.filter((d) => d < today).length;
  const remaining = count - passed;

  if (count === 3) {
    if (remaining === 3) {
      return (
        <>
          <b>Three</b> fall in <b>{year}</b> — the rare and difficult
          arrangement. None have passed yet.
        </>
      );
    }
    if (remaining === 0) {
      return (
        <>
          All <b>three</b> of <b>{year}</b>'s thirteenths are behind us. The
          next arrives in <b>{next.getFullYear()}</b>.
        </>
      );
    }
    return (
      <>
        <b>Three</b> fall in <b>{year}</b> — the rare and difficult arrangement.{' '}
        {capitalize(WORDS[passed]!)} behind us; the{' '}
        <b>{ORD_WORD[passed + 1]}</b> approaches.
      </>
    );
  }

  if (count === 2) {
    if (remaining === 2) {
      return (
        <>
          <b>Two</b> fall in <b>{year}</b>. The <b>first</b> approaches — count
          it down above.
        </>
      );
    }
    if (remaining === 1) {
      return (
        <>
          <b>Two</b> fall in <b>{year}</b>. One is behind us. The{' '}
          <b>second</b> approaches — count it down above, if you dare.
        </>
      );
    }
    return (
      <>
        Both of <b>{year}</b>'s thirteenths are behind us. The next arrives in{' '}
        <b>{next.getFullYear()}</b>.
      </>
    );
  }

  if (count === 1) {
    if (remaining === 1) {
      return (
        <>
          Only <b>one</b> lands in <b>{year}</b>. A mercy, by calendar
          standards. Mark your door anyway.
        </>
      );
    }
    return (
      <>
        The sole thirteenth of <b>{year}</b> has passed. The next arrives in{' '}
        <b>{next.getFullYear()}</b>.
      </>
    );
  }

  // count === 0 fallback
  return (
    <>
      No <b>thirteenth</b> lands upon a Friday in <b>{year}</b>. Enjoy the
      reprieve — the next arrives in <b>{next.getFullYear()}</b>.
    </>
  );
}

export default function App() {
  const now = useNow(1000);
  const year = now.getFullYear();
  const today = startOfDay(now);

  // These only depend on the year, so recomputing once per day is plenty —
  // but the arrays are tiny, so memoising on the year is simpler.
  const thisYear = useMemo(() => fridaysThe13th(year), [year]);
  const nextYear = useMemo(() => fridaysThe13th(year + 1), [year]);

  const next = useMemo(() => {
    const upcoming = [...thisYear, ...nextYear].filter(
      (d) => d.getTime() >= today.getTime(),
    );
    return upcoming[0] ?? new Date(year + 2, 0, 13);
  }, [thisYear, nextYear, today, year]);

  const footnote = buildFootnote(year, thisYear, next, today);

  return (
    <>
      <TopBar now={now} />
      <Masthead />
      <Hero now={now} next={next} footnote={footnote} />
      <Ticker />
      <Almanac year={year} dates={thisYear} now={now} next={next} />
      <Lore />
      <PageFooter />
    </>
  );
}
