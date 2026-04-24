import { DAY, MONTH, startOfDay } from '../utils/dates';

type Props = {
  year: number;
  dates: Date[];
  now: Date;
  next: Date;
};

const STATUSES_PAST = [
  'Already passed through. The calendar kept us.',
  'Already behind us. Whatever happened, happened.',
];
const STATUSES_NEXT = ['The one we are waiting on. The countdown above.'];
const STATUSES_FUTURE = [
  "Farther on. We'll get there.",
  'Waiting in the calendar, patient.',
];

function summary(count: number) {
  switch (count) {
    case 1:
      return '— one friday falls upon the thirteenth —';
    case 2:
      return '— two fridays fall upon the thirteenth —';
    case 3:
      return '— three fridays fall upon the thirteenth (a difficult year) —';
    default:
      return '— no fridays fall upon the thirteenth —';
  }
}

export function Almanac({ year, dates, now, next }: Props) {
  const count = dates.length;
  const cols = count === 0 ? 1 : count === 3 ? 3 : count >= 4 ? 2 : count;
  const today = startOfDay(now);
  const nextKey = next.getTime();

  return (
    <section className="almanac">
      <div className="section-head">
        <div className="line" />
        <div className="title">
          The Register of {year}
          <small>{summary(count)}</small>
        </div>
        <div className="line" />
      </div>

      <div
        className="dates-grid"
        style={{ ['--cols' as string]: String(cols) }}
      >
        {count === 0 ? (
          <article
            className="date-card empty"
            style={{ gridColumn: '1 / -1' }}
          >
            <div className="empty-msg">
              <strong>None this year.</strong> A lucky year — we'll hold our
              breath.
            </div>
          </article>
        ) : (
          dates.map((d, i) => {
            const past = d < today;
            const isNext = d.getTime() === nextKey;
            const cls = past ? 'past' : isNext ? 'next' : 'future';
            const status = past
              ? STATUSES_PAST[i % STATUSES_PAST.length]!
              : isNext
              ? STATUSES_NEXT[0]!
              : STATUSES_FUTURE[i % STATUSES_FUTURE.length]!;
            const label = past ? 'passed' : isNext ? 'next' : 'upcoming';
            return (
              <article className={`date-card ${cls}`} key={d.getTime()}>
                <div className="big-num">
                  <span className="slash">/</span>13
                </div>
                <div className="dc-meta">
                  <div className="month">{MONTH[d.getMonth()]}</div>
                  <div className="year">
                    {DAY[d.getDay()]} · {d.getFullYear()}
                  </div>
                  <div className="status">
                    <b>{label}</b> — {status}
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}
