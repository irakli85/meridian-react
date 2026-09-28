import type { Text } from "../i18n";

export type Link = { href: string; label: Text; ghost?: boolean; dir?: string };

export type Card = {
  idx?: Text;
  title: Text;
  body?: Text;
  meta?: Text;
  note?: Text;
  link?: Link;
  ticks?: Text[];
};

export type Stat = { label: Text; value: string; unit?: Text };

export type Field = {
  name: string;
  label: Text;
  kind?: "text" | "email" | "tel" | "datetime" | "select" | "textarea";
  required?: boolean;
  autocomplete?: string;
  options?: Text[];
  rows?: number;
};

export type FieldGroup = { cols: 1 | 2; fields: Field[] };

export type TableData = {
  ariaLabel: Text;
  head: Text[];
  rows: Text[][];
  numCols?: number[];
  note?: Text;
};

export type Block =
  | {
      kind: "hero";
      img: string;
      video?: string;
      alt?: string;
      crumbs?: Link[];
      kicker?: Text;
      title: Text;
      dek: Text;
      actions?: Link[];
    }
  | { kind: "stats"; tone?: "sea"; kicker: Text; title: Text; note: Text; items: Stat[] }
  | {
      kind: "cards";
      tone?: "sea" | "paper2";
      tight?: boolean;
      kicker: Text;
      title: Text;
      note?: Text;
      more?: Link;
      columns?: 2 | 3 | 4;
      items: Card[];
    }
  | {
      kind: "split";
      tone?: "sea" | "paper2";
      tight?: boolean;
      img: string;
      alt: string;
      caption: Text;
      kicker?: Text;
      title: Text;
      dek?: Text;
      table?: TableData;
      ticks?: Text[];
      quote?: Text;
      textFirst?: boolean;
      actions?: Link[];
    }
  | {
      kind: "numbered";
      tone?: "sea" | "paper2";
      tight?: boolean;
      kicker: Text;
      title: Text;
      note?: Text;
      items: Card[];
    }
  | {
      kind: "ticks";
      kicker: Text;
      title: Text;
      note?: Text;
      items: Text[];
      columns?: 2 | 3;
      narrow?: boolean;
      actions?: Link[];
    }
  | {
      kind: "table";
      kicker: Text;
      title: Text;
      tone?: "sea" | "paper2";
      cards?: Card[];
      table: TableData;
    }
  | {
      kind: "posts";
      kicker: Text;
      title: Text;
      more?: Link;
      items: { img: string; alt: string; date: string; title: Text; body: Text }[];
    }
  | {
      kind: "articles";
      kicker?: Text;
      title?: Text;
      note?: Text;
      items: {
        img: string;
        alt: string;
        tag: Text;
        date: string;
        title: Text;
        body: Text;
      }[];
    }
  | {
      kind: "columns";
      tone?: "sea" | "paper2";
      tight?: boolean;
      items: {
        kicker: Text;
        title: Text;
        dek?: Text;
        note?: Text;
        ticks?: Text[];
        actions?: Link[];
      }[];
    }
  | { kind: "cta"; title: Text; dek: Text; actions: Link[] }
  | {
      kind: "offices";
      kicker: Text;
      title: Text;
      note: Text;
      ariaLabel: Text;
      head: Text[];
      rows: { office: Text; covers: Text; address: Text; phone: string; hours: Text }[];
      cards: Card[];
    }
  | {
      kind: "form";
      kicker: Text;
      title: Text;
      dek: Text;
      note: Text;
      to: string;
      groups: FieldGroup[];
      submit: Text;
      copy: { missing: Text; badMail: Text; ok: Text };
    };

export type PageContent = {
  meta: { title: Text; description: Text };
  blocks: Block[];
};
