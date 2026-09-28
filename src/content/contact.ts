import { L } from "./text";
import { CONTACT } from "../site";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: L("კონტაქტი — Meridian Georgia", "Contact — Meridian Georgia", "Контакты — Meridian Georgia"),
    description: L(
      "ოფისების სია, 24/7 სადღეღამური ხაზები და ნომინაციის ფორმა პოთის, ბათუმისა და თბილისისთვის.",
      "Office directory, 24/7 duty lines and a nomination form for Poti, Batumi and Tbilisi.",
      "Справочник офисов, круглосуточные дежурные линии и форма номинации для Поти, Батуми и Тбилиси.",
    ),
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/aerial.jpg",
      crumbs: [
        { href: "index.html", label: L("მთავარი", "Home", "Главная") },
        { href: "contact.html", label: L("კონტაქტი", "Contact", "Контакты") },
      ],
      title: L(
        "ადამიანს ესაუბრეთ, არა რიგს",
        "Reach a person, not a queue",
        "Свяжитесь с человеком, а не с очередью",
      ),
      dek: L(
        "ორი ნომერი პასუხობს ნებისმიერ საათზე: ოპერაციული მაგიდა აქტიური ვიზიტებისთვის და სადღეღამური ხაზი — ღამისთვის.",
        "Two numbers answer at any hour: the operations desk for live calls and the duty line for everything after midnight.",
        "Два номера отвечают в любое время: операционный стол по активным заходам и дежурная линия на ночное время.",
      ),
    },
    {
      kind: "offices",
      kicker: L("ოფისები", "Offices", "Офисы"),
      title: L("სამი მაგიდა, ერთი მორიგეობა", "Three desks, one rota", "Три стола, одно расписание"),
      note: L(
        "მისამართები და ნომრები დემონსტრაციული საიტის ნიმუშია.",
        "Placeholder addresses and numbers for a demonstration site.",
        "Условные адреса и номера демонстрационного сайта.",
      ),
      ariaLabel: L("ოფისების კატალოგი", "Office directory", "Справочник офисов"),
      head: [
        L("ოფისი", "Office", "Офис"),
        L("დაფარვა", "Covers", "Покрывает"),
        L("მისამართი", "Address", "Адрес"),
        L("მორიგის ხაზი", "Duty line", "Дежурный номер"),
        L("საათები", "Hours", "Часы"),
      ],
      rows: [
        {
          office: L("პოთი — ოპერაციული ცენტრი", "Poti — operations HQ", "Поти — операционный офис"),
          covers: L(
            "პოთი, კულევი, სუფსის რეიდები",
            "Poti, Kulevi, Supsa roads",
            "Поти, Кулеви, рейды Супси",
          ),
          address: L("რუსთაველის გამზ. 12, პოთი", "12 Rustaveli Ave, Poti", "пр. Руставели 12, Поти"),
          phone: CONTACT.offices.poti,
          hours: L(
            "09:00–18:00 · მორიგე 24/7",
            "09:00–18:00 · duty 24/7",
            "09:00–18:00 · дежурный 24/7",
          ),
        },
        {
          office: L(
            "ბათუმი — ეკიპაჟის მაგიდა",
            "Batumi — crew desk",
            "Батуми — экипажный стол",
          ),
          covers: L("ბათუმი, ეკიპაჟის ცვლა", "Batumi, crew change", "Батуми, смена экипажей"),
          address: L("ლეღვაძე 8, ბათუმი", "8 Leghvadze St, Batumi", "ул. Лехвадзе 8, Батуми"),
          phone: CONTACT.offices.batumi,
          hours: L(
            "09:00–18:00 · ტრანსფერი აეროპორტამდე 02:00-მდე",
            "09:00–18:00 · airport runs to 02:00",
            "09:00–18:00 · трансферы в аэропорт до 02:00",
          ),
        },
        {
          office: L("თბილისი — დოკუმენტაცია", "Tbilisi — documents", "Тбилиси — документы"),
          covers: L(
            "საბაჟო, KYC, ხელშეკრულებები",
            "Customs, KYC, contracts",
            "Таможня, KYC, договоры",
          ),
          address: L(
            "ჭოლოკაშვილის გამზ. 4, თბილისი",
            "4 Kakutsa Cholokashvili St, Tbilisi",
            "ул. Какуцы Чолокашвили 4, Тбилиси",
          ),
          phone: CONTACT.offices.tbilisi,
          hours: L("10:00–19:00 ორშ–პარ", "10:00–19:00 Mon–Fri", "10:00–19:00 пн–пт"),
        },
      ],
      cards: [
        {
          title: L("აქტიური ვიზიტები", "Live calls", "Активные заходы"),
          link: {
            href: `mailto:${CONTACT.operationsEmail}`,
            label: L(CONTACT.operationsEmail, CONTACT.operationsEmail, CONTACT.operationsEmail),
          },
          note: L(
            "თითო გემზე — ერთი საფოსტო კორესპონდენცია, კოპიით დასახელებულ აგენტზე.",
            "One thread per vessel, copied to the named agent.",
            "Одна переписка на судно, с копией именованному агенту.",
          ),
        },
        {
          title: L("ანგარიშები და PDA", "Accounts & PDA", "Расчёты и PDA"),
          link: {
            href: `mailto:${CONTACT.accountsEmail}`,
            label: L(CONTACT.accountsEmail, CONTACT.accountsEmail, CONTACT.accountsEmail),
          },
          note: L(
            "proforma DA გამოსვლიდან 24 საათში, საბოლოო ROH — 5 სამუშაო დღეში.",
            "Proforma DA within 24 hours of sailing, final ROH in 5 working days.",
            "Проформа-ДА в течение 24 часов после выхода, итоговый расчёт за 5 рабочих дней.",
          ),
        },
      ],
    },
    {
      kind: "form",
      kicker: L("ნომინაცია", "Nomination", "Номинация"),
      title: L(
        "დაიწყეთ სერვისის მოთხოვნა",
        "Start a service request",
        "Начать запрос на обслуживание",
      ),
      dek: L(
        "შეავსეთ მინიმალური ველები და უკან საგეგმო ფაილს დაგიბრუნებთ სავარაუდო ღირებულებებით. რეგისტრაცია არ სჭირდებათ.",
        "Fill the minimum and we return a planning file with indicative costs. No account or login is required.",
        "Заполните минимум — вернём плановый файл с ориентировочными ценами. Аккаунт не нужен.",
      ),
      note: L(
        "ფორმა თქვენს საფოსტო პროგრამაში წერილს ამზადებს; სერვერზე არაფერი ინახება.",
        "This form composes an email in your own mail client; nothing is stored on a server.",
        "Форма формирует письмо в вашем почтовом клиенте; на сервере ничего не хранится.",
      ),
      to: CONTACT.operationsEmail,
      groups: [
        {
          cols: 2,
          fields: [
            {
              name: "subject",
              required: true,
              label: L("გემი და პორტი *", "Vessel & port *", "Судно и порт *"),
            },
            {
              name: "company",
              required: true,
              autocomplete: "organization",
              label: L("კომპანია *", "Company *", "Компания *"),
            },
          ],
        },
        {
          cols: 2,
          fields: [
            {
              name: "name",
              required: true,
              autocomplete: "name",
              label: L("თქვენი სახელი *", "Your name *", "Ваше имя *"),
            },
            {
              name: "email",
              kind: "email",
              required: true,
              autocomplete: "email",
              label: L("ელ. ფოსტა *", "Email *", "E-mail *"),
            },
          ],
        },
        {
          cols: 2,
          fields: [
            { name: "eta", kind: "datetime", label: L("ETA (ადგილობრივი)", "ETA (local)", "ETA (местное)") },
            {
              name: "service",
              kind: "select",
              label: L("სერვისი", "Service", "Услуга"),
              options: [
                L(
                  "საპორტო აგენტობა და ჰაზბანდინგი",
                  "Port agency & husbanding",
                  "Агентирование и хузинг",
                ),
                L("ტვირთის ოპერაციები", "Cargo operations", "Грузовые операции"),
                L(
                  "ეკიპაჟის ცვლა და მართვა",
                  "Crew change & management",
                  "Смена и управление экипажами",
                ),
                L(
                  "ტექნიკური მხარდაჭერა და ინსპექციები",
                  "Technical support & inspections",
                  "Техническая поддержка и осмотры",
                ),
                L("საბაჟო და დოკუმენტაცია", "Customs & documentation", "Таможня и документы"),
                L("ბუნკეროვა და მომარაგება", "Bunkering & provisioning", "Бункеровка и снабжение"),
              ],
            },
          ],
        },
        {
          cols: 1,
          fields: [
            {
              name: "cargo",
              label: L(
                "ტვირთის ტიპი და რაოდენობა",
                "Cargo type and quantity",
                "Груз и количество",
              ),
            },
            {
              name: "details",
              kind: "textarea",
              rows: 4,
              label: L(
                "დრაუფტი, სპეციალური მოთხოვნები, კონტაქტები ბორტზე",
                "Draft, special requirements, contacts on board",
                "Осадка, особые требования, контакты на борту",
              ),
            },
          ],
        },
      ],
      submit: L("მოამზადეთ წერილი", "Prepare the email", "Подготовить письмо"),
      copy: {
        missing: L(
          "არ არის შევსებული: ",
          "Required fields missing: ",
          "Не заполнено обязательное: ",
        ),
        badMail: L(
          "ელ. ფოსტის ფორმა არასწორია.",
          "Email address is not valid.",
          "Некорректный формат e-mail.",
        ),
        ok: L(
          "საფოსტო პროგრამა უნდა გაიხსნას შევსებული წერილით.",
          "Your mail client should open with the request filled in.",
          "Почтовая программа должна открыться с готовым письмом.",
        ),
      },
    },
    {
      kind: "ticks",
      kicker: L("სანამ დაწერთ", "Before you write", "Прежде чем писать"),
      title: L(
        "რა აჩქარებს ნომინაციას",
        "What makes a nomination fast",
        "Что ускоряет номинацию",
      ),
      items: [
        L(
          "ჩარტერი და ლეიტაიმის კლაუზულების მითითებები დაერთვით",
          "Charter party and laytime clause references attached",
          "Приложены чартер и ссылки на клаузулы о стадияжном времени",
        ),
        L(
          "ბოლო პორტი, შემდეგი პორტი და საწვავის გეგმა",
          "Last port, next port and bunker plan",
          "Последний и следующий порты, план бункеровки",
        ),
        L(
          "ეკიპაჟის სიის ნახაზი, თუ ცვლა იგეგმება",
          "Crew list draft if a change is planned",
          "Черновик экипажного списка, если планируется смена",
        ),
        L(
          "საშიში ტვირთი, gas-free ან ტანკების გაწმენდის მოთხოვნები",
          "Hazardous cargo, gas-free or tank-cleaning requirements",
          "Опасный груз, требования gas-free или мойки танков",
        ),
        L(
          "PDA-ს ჭერი, რომელიც proforma DA-ს გსურთ",
          "PDA ceiling you want for the proforma DA",
          "Потолок PDA для проформы-ДА",
        ),
        L(
          "სჭირდებათ თუ არა დამოუკიდებელი სერვეიერები",
          "Whether you need independent surveyors",
          "Нужны ли независимые сюрвейеры",
        ),
      ],
    },
  ],
};
