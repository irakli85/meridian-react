import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ka" | "en" | "ru";
export type Text = Record<Lang, string>;

export const LANGS: Lang[] = ["ka", "en", "ru"];
const STORAGE_KEY = "mg-lang";
const PARAM_KEY = "lang";

export const tx = (t: Text, lang: Lang) => t[lang] ?? t.en ?? t.ka;

type Meta = { title: Text; description: Text };

type LangApi = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (t: Text) => string;
};

const LangContext = createContext<LangApi | null>(null);

function isLang(value: string | null): value is Lang {
  return value === "ka" || value === "en" || value === "ru";
}

function langFromUrl(): Lang | null {
  try {
    const param = new URLSearchParams(window.location.search).get(PARAM_KEY);
    return isLang(param) ? param : null;
  } catch {
    return null;
  }
}

function detect(): Lang {
  const fromUrl = typeof window !== "undefined" ? langFromUrl() : null;
  if (fromUrl) return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* storage unavailable — fall through to browser language */
  }
  const nav = (navigator.language || "ka").slice(0, 2);
  return (LANGS as string[]).includes(nav) ? (nav as Lang) : "ka";
}

function syncUrl(lang: Lang): void {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set(PARAM_KEY, lang);
    window.history.replaceState(null, "", url.toString());
  } catch {
    /* non-browser or opaque origin — ignore */
  }
}

const OG_LOCALE: Record<Lang, string> = { ka: "ka_GE", en: "en_US", ru: "ru_RU" };

function upsertMeta(selector: string, create: () => HTMLMetaElement): HTMLMetaElement {
  const existing = document.querySelector(selector);
  if (existing instanceof HTMLMetaElement) return existing;
  const el = create();
  document.head.appendChild(el);
  return el;
}

export function LangProvider({ meta, children }: { meta: Meta; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detect);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    syncUrl(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = meta.title[lang];

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description[lang]);

    const ogTitle = upsertMeta('meta[property="og:title"]', () => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:title");
      return el;
    });
    ogTitle.setAttribute("content", meta.title[lang]);

    const ogDesc = upsertMeta('meta[property="og:description"]', () => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:description");
      return el;
    });
    ogDesc.setAttribute("content", meta.description[lang]);

    const ogLocale = upsertMeta('meta[property="og:locale"]', () => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:locale");
      return el;
    });
    ogLocale.setAttribute("content", OG_LOCALE[lang]);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, meta]);

  const t = useCallback((value: Text) => tx(value, lang), [lang]);
  const api = useMemo<LangApi>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LangContext.Provider value={api}>{children}</LangContext.Provider>;
}

export function useLang(): LangApi {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
