import { useEffect, useRef, type MouseEvent } from "react";
import { useLang, type Text } from "../i18n";
import { page as contactPage } from "../content/contact";
import type { Block } from "../content/types";
import { NominationForm } from "./NominationForm";

const CLOSE: Text = { ka: "ფანჯრის დახურვა", en: "Close dialog", ru: "Закрыть окно" };

type FormBlock = Extract<Block, { kind: "form" }>;

function findFormBlock(): FormBlock | undefined {
  return contactPage.blocks.find((block): block is FormBlock => block.kind === "form");
}

export function ContactDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const { t } = useLang();
  const block = findFormBlock();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.showModal();
    el.focus();
  }, []);

  if (!block) return null;

  const onBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={ref}
      className="modal"
      tabIndex={-1}
      aria-labelledby="contact-modal-title"
      onClose={onClose}
      onClick={onBackdrop}
    >
      <div className="modal-inner">
        <button className="modal-close" type="button" onClick={onClose} aria-label={t(CLOSE)}>
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-head">
          <p className="kicker">{t(block.kicker)}</p>
          <h2 id="contact-modal-title">{t(block.title)}</h2>
          <p className="dek">{t(block.dek)}</p>
          <p className="note">{t(block.note)}</p>
        </div>
        <NominationForm
          groups={block.groups}
          to={block.to}
          submit={block.submit}
          copy={block.copy}
        />
      </div>
    </dialog>
  );
}
