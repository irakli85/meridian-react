import type { CSSProperties } from "react";
import { useLang } from "../i18n";
import { useContactDialog } from "../hooks";
import type { Card, Link, TableData } from "../content/types";

export function Actions({ actions }: { actions: Link[] }) {
  const { t } = useLang();
  const openContact = useContactDialog();
  return (
    <div className="btn-row">
      {actions.map((action) => (
        <a
          key={`${action.href}::${action.label.en}`}
          className={"btn" + (action.ghost ? " ghost" : "")}
          href={action.href}
          dir={action.dir}
          aria-haspopup={action.dialog ? "dialog" : undefined}
          onClick={
            action.dialog
              ? (event) => {
                  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
                  event.preventDefault();
                  openContact(event.currentTarget);
                }
              : undefined
          }
        >
          {t(action.label)}
        </a>
      ))}
    </div>
  );
}

export function DataTable({ data, style }: { data: TableData; style?: CSSProperties }) {
  const { t } = useLang();
  return (
    <>
      <div className="scroll-x" role="region" tabIndex={0} aria-label={t(data.ariaLabel)} style={style}>
        <table className="data">
          <thead>
            <tr>
              {data.head.map((cell, c) => (
                <th scope="col" key={`h-${c}`}>
                  {t(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, r) => (
              <tr key={`r-${r}`}>
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th scope="row" key={`c-${c}`}>
                      {t(cell)}
                    </th>
                  ) : (
                    <td key={`c-${c}`} className={data.numCols?.includes(c) ? "num" : undefined}>
                      {t(cell)}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.note ? <p className="note" style={{ marginTop: "1rem" }}>{t(data.note)}</p> : null}
    </>
  );
}

export function CardBody({ card, index, columns }: { card: Card; index: number; columns: 2 | 3 | 4 }) {
  const { t } = useLang();
  return (
    <article className={columns === 4 ? "card card-line" : "card"}>
      {card.idx ? <p className="idx">{t(card.idx)}</p> : null}
      <h3>{t(card.title)}</h3>
      {card.body ? <p>{t(card.body)}</p> : null}
      {card.link ? (
        <p>
          <a href={card.link.href}>{t(card.link.label)}</a>
        </p>
      ) : null}
      {card.note ? <p className="note">{t(card.note)}</p> : null}
      {card.meta ? <p className="meta">{t(card.meta)}</p> : null}
      {card.ticks ? (
        <ul className="ticks">
          {card.ticks.map((tick, i) => (
            <li key={`${index}-${i}`}>{t(tick)}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function parseDate(date: string): string | undefined {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return undefined;
  return new Date(parsed).toISOString().slice(0, 10);
}

export function assertNever(value: never): never {
  throw new Error(`Unhandled block kind: ${JSON.stringify(value)}`);
}
