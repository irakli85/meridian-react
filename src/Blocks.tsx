import { Fragment } from "react";
import { useLang } from "./i18n";
import { NominationForm } from "./components/NominationForm";
import { Actions, CardBody, DataTable, assertNever, parseDate } from "./blocks/parts";
import type { Block } from "./content/types";

export function Blocks({ blocks }: { blocks: Block[] }) {
  const { t } = useLang();

  return (
    <>
      {blocks.map((block, i) => {
        const key = `${block.kind}-${i}`;
        switch (block.kind) {
          case "hero":
            return (
              <section className="page-hero" key={key}>
                <img
                  src={block.img}
                  alt={block.alt ?? ""}
                  width="1920"
                  height="1080"
                  fetchPriority="high"
                  decoding="async"
                />
                {block.video ? (
                  <video
                    className="hero-clip"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={block.img}
                    aria-hidden="true"
                    tabIndex={-1}
                    disablePictureInPicture
                  >
                    <source src={block.video} type="video/mp4" media="(min-width: 861px)" />
                  </video>
                ) : null}
                <div className="wrap">
                  {block.crumbs ? (
                    <nav aria-label="Breadcrumb">
                      <p className="crumbs">
                        {block.crumbs.map((crumb, c) => (
                          <Fragment key={`${crumb.href}::${crumb.label.en}`}>
                            {c > 0 ? <span aria-hidden="true">/</span> : null}
                            <a href={crumb.href}>{t(crumb.label)}</a>
                          </Fragment>
                        ))}
                      </p>
                    </nav>
                  ) : null}
                  {block.kicker ? <p className="kicker">{t(block.kicker)}</p> : null}
                  <h1>{t(block.title)}</h1>
                  <p className="dek">{t(block.dek)}</p>
                  {block.actions ? <Actions actions={block.actions} /> : null}
                </div>
              </section>
            );

          case "stats":
            return (
              <section className={"block" + (block.tone === "sea" ? " sea" : "")} key={key}>
                <div className="wrap">
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                    <p className="dek">{t(block.note)}</p>
                  </div>
                  <dl className="stats grid g4">
                    {block.items.map((stat, s) => (
                      <div key={`stat-${s}`}>
                        <dt>{t(stat.label)}</dt>
                        <dd>
                          {stat.value}
                          {stat.unit ? <span className="u"> {t(stat.unit)}</span> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            );

          case "cards":
            return (
              <section className={"block" + (block.tight ? " tight" : "") + (block.tone ? " " + block.tone : "")} key={key}>
                <div className="wrap">
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                    {block.more ? (
                      <a className="more" href={block.more.href}>
                        {t(block.more.label)}
                      </a>
                    ) : block.note ? (
                      <p className="dek">{t(block.note)}</p>
                    ) : null}
                  </div>
                  <div className={"grid g" + (block.columns ?? 3)}>
                    {block.items.map((card, c) => (
                      <CardBody key={`card-${c}`} card={card} index={c} columns={block.columns ?? 3} />
                    ))}
                  </div>
                </div>
              </section>
            );

          case "split": {
            const figure = (
              <figure className="plain">
                <img src={block.img} alt={block.alt} loading="lazy" decoding="async" width="1280" height="1024" />
                <figcaption>{t(block.caption)}</figcaption>
              </figure>
            );
            const body = (
              <div>
                {block.kicker ? <p className="kicker">{t(block.kicker)}</p> : null}
                <h2>{t(block.title)}</h2>
                {block.dek ? <p className="dek">{t(block.dek)}</p> : null}
                {block.table ? <DataTable data={block.table} style={{ marginTop: "1.6rem" }} /> : null}
                {block.quote ? <blockquote className="pull">{t(block.quote)}</blockquote> : null}
                {block.ticks ? (
                  <ul className="ticks" style={{ marginTop: "1.4rem" }}>
                    {block.ticks.map((tick, c) => (
                      <li key={`tick-${c}`}>{t(tick)}</li>
                    ))}
                  </ul>
                ) : null}
                {block.actions ? <Actions actions={block.actions} /> : null}
              </div>
            );
            return (
              <section className={"block" + (block.tight ? " tight" : "") + (block.tone ? " " + block.tone : "")} key={key}>
                <div className="wrap split">
                  {block.textFirst ? (
                    <>
                      {body}
                      {figure}
                    </>
                  ) : (
                    <>
                      {figure}
                      {body}
                    </>
                  )}
                </div>
              </section>
            );
          }

          case "numbered":
            return (
              <section className={"block" + (block.tight ? " tight" : "") + (block.tone ? " " + block.tone : "")} key={key}>
                <div className="wrap">
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                    {block.note ? <p className="dek">{t(block.note)}</p> : null}
                  </div>
                  <ol className="numbered">
                    {block.items.map((card, c) => (
                      <li key={`num-${c}`}>
                        <h3>{t(card.title)}</h3>
                        {card.body ? <p>{t(card.body)}</p> : null}
                        {card.meta ? <p className="meta">{t(card.meta)}</p> : null}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            );

          case "ticks":
            return (
              <section className="block tight" key={key}>
                <div className={"wrap" + (block.narrow ? " narrow" : "")}>
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                    {block.note ? <p className="dek">{t(block.note)}</p> : null}
                  </div>
                  <ul className={"ticks grid g" + (block.columns ?? 2)}>
                    {block.items.map((item, c) => (
                      <li key={`ticks-${c}`}>{t(item)}</li>
                    ))}
                  </ul>
                  {block.actions ? <Actions actions={block.actions} /> : null}
                </div>
              </section>
            );

          case "table":
            return (
              <section className={"block" + (block.tone ? " " + block.tone : "")} key={key}>
                <div className="wrap">
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                  </div>
                  <DataTable data={block.table} />
                  {block.cards ? (
                    <div className="grid g3" style={{ marginTop: "2.4rem" }}>
                      {block.cards.map((card, c) => (
                        <CardBody key={`tcard-${c}`} card={card} index={c} columns={3} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>
            );

          case "posts":
            return (
              <section className="block" key={key}>
                <div className="wrap">
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                    {block.more ? (
                      <a className="more" href={block.more.href}>
                        {t(block.more.label)}
                      </a>
                    ) : null}
                  </div>
                  <div className="grid g3">
                    {block.items.map((post, c) => {
                      const iso = parseDate(post.date);
                      return (
                        <article className="card img" key={`post-${c}`}>
                          <img src={post.img} alt={post.alt} width="1280" height="819" loading="lazy" decoding="async" />
                          <div className="body">
                            <p className="idx">{iso ? <time dateTime={iso}>{post.date}</time> : post.date}</p>
                            <h3>{t(post.title)}</h3>
                            <p>{t(post.body)}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            );

          case "articles":
            return (
              <section className="block" key={key}>
                <div className="wrap" style={{ maxWidth: 980 }}>
                  {block.kicker && block.title ? (
                    <div className="head-row">
                      <div>
                        <p className="kicker">{t(block.kicker)}</p>
                        <h2>{t(block.title)}</h2>
                      </div>
                    </div>
                  ) : null}
                  {block.items.map((post, c) => {
                    const iso = parseDate(post.date);
                    return (
                      <article className="post" key={`article-${c}`}>
                        <div>
                          <img src={post.img} alt={post.alt} width="1280" height="819" loading="lazy" decoding="async" />
                          <p className="date" style={{ marginTop: ".8rem" }}>
                            {iso ? <time dateTime={iso}>{post.date}</time> : post.date}
                          </p>
                        </div>
                        <div>
                          <p className="tag">{t(post.tag)}</p>
                          <h3>{t(post.title)}</h3>
                          <p>{t(post.body)}</p>
                        </div>
                      </article>
                    );
                  })}
                  {block.note ? (
                    <p className="note" style={{ marginTop: "2rem" }}>
                      {t(block.note)}
                    </p>
                  ) : null}
                </div>
              </section>
            );

          case "offices":
            return (
              <section className="block" key={key}>
                <div className="wrap">
                  <div className="head-row">
                    <div>
                      <p className="kicker">{t(block.kicker)}</p>
                      <h2>{t(block.title)}</h2>
                    </div>
                    <p className="dek">{t(block.note)}</p>
                  </div>
                  <div className="scroll-x" role="region" tabIndex={0} aria-label={t(block.ariaLabel)}>
                    <table className="data">
                      <thead>
                        <tr>
                          {block.head.map((cell, c) => (
                            <th scope="col" key={`oh-${c}`}>
                              {t(cell)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr key={`orow-${r}`}>
                            <th scope="row">{t(row.office)}</th>
                            <td>{t(row.covers)}</td>
                            <td>{t(row.address)}</td>
                            <td className="num">
                              <a href={"tel:" + row.phone.replace(/[^+\d]/g, "")} dir="ltr">
                                {row.phone}
                              </a>
                            </td>
                            <td>{t(row.hours)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="grid g3" style={{ marginTop: "2.4rem" }}>
                    {block.cards.map((card, c) => (
                      <CardBody key={`ocard-${c}`} card={card} index={c} columns={3} />
                    ))}
                  </div>
                </div>
              </section>
            );

          case "columns":
            return (
              <section
                className={"block" + (block.tight ? " tight" : "") + (block.tone ? " " + block.tone : "")}
                key={key}
              >
                <div className="wrap split">
                  {block.items.map((col, c) => (
                    <div key={`col-${c}`}>
                      <p className="kicker">{t(col.kicker)}</p>
                      <h2>{t(col.title)}</h2>
                      {col.dek ? <p className="dek">{t(col.dek)}</p> : null}
                      {col.ticks ? (
                        <ul className="ticks" style={{ marginTop: "1.4rem" }}>
                          {col.ticks.map((tick, k) => (
                            <li key={`ct-${k}`}>{t(tick)}</li>
                          ))}
                        </ul>
                      ) : null}
                      {col.note ? (
                        <p className="meta" style={{ marginTop: "1.2rem" }}>
                          {t(col.note)}
                        </p>
                      ) : null}
                      {col.actions ? <Actions actions={col.actions} /> : null}
                    </div>
                  ))}
                </div>
              </section>
            );

          case "form":
            return (
              <section className="block paper2" key={key}>
                <div className="wrap split">
                  <div>
                    <p className="kicker">{t(block.kicker)}</p>
                    <h2>{t(block.title)}</h2>
                    <p className="dek">{t(block.dek)}</p>
                    <p className="note" style={{ marginTop: "1rem" }}>
                      {t(block.note)}
                    </p>
                  </div>
                  <NominationForm
                    groups={block.groups}
                    to={block.to}
                    submit={block.submit}
                    copy={block.copy}
                  />
                </div>
              </section>
            );

          case "cta":
            return (
              <section className="block tight sea" key={key}>
                <div className="wrap">
                  <h2>{t(block.title)}</h2>
                  <p className="dek">{t(block.dek)}</p>
                  <Actions actions={block.actions} />
                </div>
              </section>
            );

          default:
            return assertNever(block);
        }
      })}
    </>
  );
}
