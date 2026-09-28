import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { failed: boolean };

const COPY: Record<string, string> = {
  ka: "გვერდის ნაწილი ვერ ჩაიტვირთა. გთხოვთ განაახლოთ გვერდი.",
  en: "Part of this page failed to load. Please refresh.",
  ru: "Часть страницы не загрузилась. Пожалуйста, обновите её.",
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown): void {
    // Keep the console signal for diagnostics; UI stays localized and calm.
    console.error("[meridian] render failed", error);
  }

  render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    const lang = document.documentElement.lang.startsWith("ru")
      ? "ru"
      : document.documentElement.lang.startsWith("en")
        ? "en"
        : "ka";
    return (
      <div className="wrap" role="alert" style={{ paddingBlock: "4rem" }}>
        <h1>Meridian Georgia</h1>
        <p className="dek" style={{ marginTop: "1rem" }}>
          {COPY[lang]}
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <button className="btn" type="button" onClick={() => window.location.reload()}>
            Refresh / განახლება / Обновить
          </button>
        </p>
      </div>
    );
  }
}
