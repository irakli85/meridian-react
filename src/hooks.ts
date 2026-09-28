import { createContext, useContext, useEffect } from "react";

/** Runs `onEscape` when the user presses Escape. Used for dismissible UI. */
export function useEscapeKey(active: boolean, onEscape: () => void): void {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, onEscape]);
}

/** Provided by Layout; opens the nomination form dialog and remembers what triggered it. */
export const ContactDialogContext = createContext<(trigger?: HTMLElement | null) => void>(
  () => {},
);

export function useContactDialog(): (trigger?: HTMLElement | null) => void {
  return useContext(ContactDialogContext);
}
