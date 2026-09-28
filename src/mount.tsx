import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./site.css";
import { LangProvider } from "./i18n";
import { Layout, type PageKey } from "./Layout";
import { Blocks } from "./Blocks";
import { ErrorBoundary } from "./components/ErrorBoundary";
import type { PageContent } from "./content/types";

export function mount(page: PageKey, content: PageContent): void {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <LangProvider meta={content.meta}>
          <Layout current={page}>
            <Blocks blocks={content.blocks} />
          </Layout>
        </LangProvider>
      </ErrorBoundary>
    </StrictMode>,
  );
}
