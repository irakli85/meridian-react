import { useId, useRef, useState, type FormEvent } from "react";
import { useLang, type Text } from "../i18n";
import type { Field, FieldGroup } from "../content/types";

type Copy = { missing: Text; badMail: Text; ok: Text };

const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_MAILTO = 1800;

function stripRequired(label: string): string {
  return label.replace(/\s*\*\s*$/, "").trim();
}

function Control({
  field,
  label,
  error,
  describedBy,
}: {
  field: Field;
  label: string;
  error?: string;
  describedBy?: string;
}) {
  const { t } = useLang();
  const labelOfOption = (option: Text) => t(option);
  const rawId = useId();
  const id = `f-${field.name}-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const invalid = Boolean(error);
  const common = {
    id,
    name: field.name,
    required: field.required,
    "aria-invalid": invalid ? (true as const) : undefined,
    "aria-describedby": describedBy,
  };

  return (
    <div className="f">
      <label htmlFor={id}>
        {label}
        {field.required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {field.kind === "textarea" ? (
        <textarea rows={field.rows ?? 4} maxLength={4000} {...common} />
      ) : field.kind === "select" ? (
        <select defaultValue="" {...common}>
          <option value="" disabled>
            —
          </option>
          {field.options?.map((option) => (
            <option key={option.en} value={option.en}>
              {labelOfOption(option)}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...common}
          type={field.kind === "datetime" ? "datetime-local" : (field.kind ?? "text")}
          autoComplete={field.autocomplete}
          inputMode={field.kind === "email" ? "email" : field.kind === "tel" ? "tel" : undefined}
          maxLength={240}
        />
      )}
      {error ? (
        <p className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function NominationForm({
  groups,
  to,
  submit,
  copy,
}: {
  groups: FieldGroup[];
  to: string;
  submit: Text;
  copy: Copy;
}) {
  const { lang, t } = useLang();
  const ref = useRef<HTMLFormElement>(null);
  const summaryId = useId();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "missing" | "badMail" | "ok">("idle");
  const [missingNames, setMissingNames] = useState<string[]>([]);

  const labelOf = new Map(
    groups
      .flatMap((group) => group.fields)
      .map((field) => [field.name, stripRequired(t(field.label))]),
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) ?? "").trim();

    const required = groups.flatMap((group) => group.fields).filter((f) => f.required);
    const missing = required.filter((f) => !get(f.name)).map((f) => f.name);
    const errors: Record<string, string> = {};
    for (const name of missing) {
      errors[name] = copy.missing[lang];
    }

    const email = get("email");
    if (!missing.includes("email") && email && !MAIL_RE.test(email)) {
      errors.email = copy.badMail[lang];
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setMissingNames(missing);
      setStatus(errors.email && !missing.length ? "badMail" : "missing");
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setFieldErrors({});
    setMissingNames([]);
    setStatus("ok");

    const lines: string[] = [];
    for (const group of groups)
      for (const field of group.fields) {
        const value = get(field.name);
        if (value) lines.push(`${labelOf.get(field.name) ?? field.name}: ${value}`);
      }
    const subject = get("subject") || labelOf.get("subject") || "Nomination";
    const body = `${lines.join("\n\n")}\n\n— ${get("name")}`;
    const mailto =
      `mailto:${to}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    if (mailto.length > MAX_MAILTO) {
      try {
        void navigator.clipboard?.writeText(`${subject}\n\n${body}`);
      } catch {
        /* clipboard unavailable — mail client still opens */
      }
    }
    window.location.href = mailto;
    ref.current?.reset();
  }

  const message =
    status === "missing"
      ? `${copy.missing[lang]}${missingNames.map((n) => labelOf.get(n) ?? n).join(", ")}`
      : status === "badMail"
        ? copy.badMail[lang]
        : status === "ok"
          ? copy.ok[lang]
          : "";

  // <select> values stay in English so the outgoing email is machine-readable;
  // the visible text follows the active UI language.
  return (
    <form className="req" ref={ref} noValidate onSubmit={onSubmit} aria-describedby={message ? summaryId : undefined}>
      {/* Honeypot against basic bots; hidden from AT and keyboard users. */}
      <div aria-hidden="true" tabIndex={-1} style={{ position: "absolute", left: "-9999px" }}>
        <label>
          Company website
          <input type="text" name="website" autoComplete="off" tabIndex={-1} />
        </label>
      </div>
      {groups.map((group, g) => (
        <div className={group.cols === 2 ? "f-row" : undefined} key={`g-${g}`}>
          {group.fields.map((field) => (
            <Control
              key={field.name}
              field={field}
              label={t(field.label)}
              error={fieldErrors[field.name]}
              describedBy={message ? summaryId : undefined}
            />
          ))}
        </div>
      ))}
      <p className="msg" role="status" aria-live="polite" id={summaryId}>
        {message}
      </p>
      <button className="btn" type="submit">
        {t(submit)}
      </button>
    </form>
  );
}
