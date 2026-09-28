import { useState, type ReactNode } from "react";
import { LANGS, useLang, type Lang, type Text } from "./i18n";
import { useEscapeKey } from "./hooks";
import { CONTACT } from "./site";
import type { Link } from "./content/types";

export type PageKey =
  | "index"
  | "about"
  | "services"
  | "contact";

const NAV: { key: PageKey; href: string; label: Text }[] = [
  { key: "index", href: "index.html", label: { ka: "მთავარი", en: "Home", ru: "Главная" } },
  { key: "about", href: "about.html", label: { ka: "ჩვენ შესახებ", en: "About", ru: "О нас" } },
  { key: "services", href: "services.html", label: { ka: "სერვისები", en: "Services", ru: "Услуги" } },
  { key: "contact", href: "contact.html", label: { ka: "კონტაქტი", en: "Contact", ru: "Контакты" } },
];

const SKIP: Text = { ka: "გადასვლა შიგთავსზე", en: "Skip to content", ru: "К содержимому" };
const MENU: Text = { ka: "მენიუ", en: "Menu", ru: "Меню" };
const CLOSE_MENU: Text = { ka: "მენიუს დახურვა", en: "Close menu", ru: "Закрыть меню" };
const MAIN_NAV: Text = { ka: "მთავარი ნავიგაცია", en: "Main navigation", ru: "Основная навигация" };
const LANG_GROUP: Text = { ka: "ენის არჩევა", en: "Language", ru: "Язык" };
const GET_IN_TOUCH: Text = { ka: "დაგვიკავშირდით", en: "Get in touch", ru: "Связаться" };
const LOGO_TITLE = "Meridian Georgia";

const LANG_LABEL: Record<Lang, string> = { ka: "GE", en: "EN", ru: "RU" };
const LANG_NAME: Record<Lang, Text> = {
  ka: { ka: "ქართული", en: "Georgian", ru: "Грузинский" },
  en: { ka: "ინგლისური", en: "English", ru: "Английский" },
  ru: { ka: "რუსული", en: "Russian", ru: "Русский" },
};

const FOOTER: {
  note: Text;
  groups: { title: Text; links: (Link & { id: string })[] }[];
  legal: Text[];
} = {
  note: {
    ka: "დემონსტრაციული საიტი: სახელი, მისამართები, ნომრები და სტატისტიკა ნიმუშია — ჩაანაცვლეთ თქვენით.",
    en: "Demonstration site: name, addresses, numbers and statistics are placeholders for your own data.",
    ru: "Демонстрационный сайт: название, адреса, номера и статистика — образец для ваших данных.",
  },
  groups: [
    {
      title: { ka: "კომპანია", en: "Company", ru: "Компания" },
      links: [
        { id: "about", href: "about.html", label: { ka: "ჩვენ შესახებ", en: "About", ru: "О нас" } },
      ],
    },
    {
      title: { ka: "სერვისები", en: "Services", ru: "Услуги" },
      links: [
        { id: "agency", href: "services.html#agency", label: { ka: "საპორტო აგენტობა", en: "Port agency & husbanding", ru: "Агентирование и хузинг" } },
        { id: "cargo", href: "services.html#cargo", label: { ka: "ტვირთის ოპერაციები", en: "Cargo operations", ru: "Грузовые операции" } },
        { id: "crew", href: "services.html#crew", label: { ka: "ეკიპაჟის მართვა", en: "Crew management", ru: "Управление экипажами" } },
        { id: "customs", href: "services.html#customs", label: { ka: "საბაჟო და დოკუმენტაცია", en: "Customs & documents", ru: "Таможня и документы" } },
      ],
    },
    {
      title: { ka: "კონტაქტი", en: "Contact", ru: "Контакты" },
      links: [
        { id: "email", href: `mailto:${CONTACT.operationsEmail}`, label: { ka: CONTACT.operationsEmail, en: CONTACT.operationsEmail, ru: CONTACT.operationsEmail } },
        { id: "phone", href: CONTACT.dutyPhoneHref, label: { ka: `${CONTACT.dutyPhoneDisplay} · მორიგე 24/7`, en: `${CONTACT.dutyPhoneDisplay} · duty 24/7`, ru: `${CONTACT.dutyPhoneDisplay} · дежурный 24/7` } },
        { id: "offices", href: "contact.html", label: { ka: "ოფისები: პოთი, ბათუმი, თბილისი", en: "Offices in Poti, Batumi, Tbilisi", ru: "Офисы: Поти, Батуми, Тбилиси" } },
      ],
    },
  ],
  legal: [
    { ka: "© 2026 Meridian Georgia შპს", en: "© 2026 Meridian Georgia LLC", ru: "© 2026 Meridian Georgia ООО" },
    { ka: "ISPS კონფიდენციალურობის პოლიტიკა", en: "ISPS confidentiality policy", ru: "Политика конфиденциальности ISPS" },
    { ka: "ISO 9001:2015 სფეროს დეკლარაცია", en: "ISO 9001:2015 scope statement", ru: "Заявление о сфере ISO 9001:2015" },
  ],
};

export function Layout({ current, children }: { current: PageKey; children: ReactNode }) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  useEscapeKey(open, () => setOpen(false));

  return (
    <>
      <a className="skip" href="#main">
        {t(SKIP)}
      </a>

      <header className="masthead">
        <div className="wrap masthead-inner">
          <a className="logo" href="index.html" aria-label="Meridian Georgia — home">
            <img className="logo-mark" src="/assets/icon-light.svg" alt="" />
            <span className="logo-copy" aria-hidden="true">
              <span className="logo-title">
                {Array.from(LOGO_TITLE, (letter, index) => (
                  <span key={`${letter}-${index}`} style={{ animationDelay: `${index * 45}ms` }}>
                    {letter === " " ? "\u00a0" : letter}
                  </span>
                ))}
              </span>
              <span className="logo-tagline">Marine Agency</span>
            </span>
          </a>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="mainnav"
            aria-label={t(open ? CLOSE_MENU : MENU)}
            onClick={() => setOpen((v) => !v)}
          >
            <i aria-hidden="true" />
            <span aria-hidden="true">{t(MENU)}</span>
          </button>
          <nav className={"primary" + (open ? " open" : "")} id="mainnav" aria-label={t(MAIN_NAV)}>
            {NAV.map((item) => (
              <a
                key={item.key}
                href={item.href}
                aria-current={item.key === current ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="contact.html">
            <span className="header-cta-text">{t(GET_IN_TOUCH)}</span>
            <span className="header-cta-hover" aria-hidden="true" />
          </a>
          <div className="lang-switch" role="group" aria-label={t(LANG_GROUP)}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={code === lang}
                aria-label={t(LANG_NAME[code])}
                title={t(LANG_NAME[code])}
                onClick={() => setLang(code)}
              >
                {LANG_LABEL[code]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <img className="foot-logo" src="/assets/logo-dark.svg" alt="Meridian Georgia" />
              <p className="foot-note">{t(FOOTER.note)}</p>
            </div>
            {FOOTER.groups.map((group) => (
              <nav key={t(group.title)} aria-label={t(group.title)}>
                <h4>{t(group.title)}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.href}>{t(link.label)}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="foot-bottom">
            {FOOTER.legal.map((line) => (
              <p key={t(line)}>{t(line)}</p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
