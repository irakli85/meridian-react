import { L } from "./text";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: L(
      "მდგრადობა — Meridian Georgia",
      "Sustainability — Meridian Georgia",
      "Устойчивость — Meridian Georgia",
    ),
    description: L(
      "ოთხი სვეტი: გარემო, უსაფრთხოება, ადამიანები და მართვა — ციფრებითა და პოლიტიკებით.",
      "Four pillars: environment, safety, people and governance — with figures and policies.",
      "Четыре опоры: экология, безопасность, люди и управление — показатели и политики.",
    ),
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/green.jpg",
      crumbs: [
        { href: "index.html", label: L("მთავარი", "Home", "Главная") },
        { href: "sustainability.html", label: L("მდგრადობა", "Sustainability", "Устойчивость") },
      ],
      title: L(
        "სააგენტოს კვალი ძირითადად პროცედურებია",
        "An agency's footprint is mostly procedural",
        "След агентства — это прежде всего процедуры",
      ),
      dek: L(
        "ჩვენ საწვავს არ ვწვავთ, მაგრამ ჩვენზეა დამოკიდებული, გულწრფელია თუ არა მასზე მომუშავე დოკუმენტები.",
        "We do not burn the fuel, but we decide whether the paperwork that governs it is honest.",
        "Мы не сжигаем топливо, но от нас зависит, честны ли документы, которые им управляют.",
      ),
    },
    {
      kind: "cards",
      kicker: L("ოთხი სვეტი", "Four pillars", "Четыре опоры"),
      title: L("რას ვვალდებულოვთ წელიწადში", "What we commit to, per year", "На что мы обязуемся ежегодно"),
      note: L(
        "ქვემოთ მოცემული ციფრები დემონსტრაციული საიტის მაგალითია.",
        "All figures below are demonstration data for a sample agency.",
        "Все приведённые показатели — данные демонстрационного примера.",
      ),
      columns: 2,
      items: [
        {
          idx: L("01 · გარემო", "01 Environment", "01 Экология"),
          title: L(
            "ემისიების მონაცემები და ნარჩენები — როგორც უნდა",
            "Emissions data and waste handled properly",
            "Данные по выбросам и отходы — как следует",
          ),
          body: L(
            "საწვავისა და ტვირთის მონაცემებს EU MRV და IMO DCS ანგარიშგებისთვის ვაგროვებთ. დოკუმენტის გარეშე ნარჩენების მიღება არ ხდება. ბუნკერული ანგარიში BDN-თან სრულად ემთხვევა.",
            "We collect fuel and cargo data for EU MRV and IMO DCS reporting. A waste delivery without documents is never accepted. Bunker receipts are reconciled against BDNs line by line.",
            "Собираем данные по топливу и грузу для отчётности EU MRV и IMO DCS. Приём отходов без документов не допускается. Бункеровочные квитанции сверяются с BDN построчно.",
          ),
          ticks: [
            L(
              "436 ვიზიტი დოკუმენტირებული ნაგვის გატანით",
              "436 calls with documented waste removal",
              "436 заходов с документированным вывозом отходов",
            ),
            L(
              "0 დაუფიქსირებელი ჩაშვება",
              "0 undocumented discharges recorded",
              "0 недокументированных сбросов",
            ),
          ],
        },
        {
          idx: L("02 · უსაფრთხოება", "02 Safety", "02 Безопасность"),
          title: L(
            "ISM-ის წესები ნავმისადგომზე, არა მხოლოდ ქაღალდზე",
            "ISM habits on the quay, not only on paper",
            "Привычки ISM на причале, а не на бумаге",
          ),
          body: L(
            "ყოველი აგენტი სამუშაო ნებართვის ჩექ-ლისტით მუშაობს. დახურული სივრცისა და საბითრე სამუშაოს რისკები პირველ ცვლამდე განიხილება, ხოლო near miss იმავე კვირაში იწერება.",
            "Every agent works with a permit-to-work checklist. Enclosed space and mooring risks are briefed before the first shift, and near misses are logged in the same week.",
            "Каждый агент работает по чек-листу наряда-допуска. Риски закрытых пространств и швартовки разбираются до первой смены, near miss фиксируется на той же неделе.",
          ),
          ticks: [
            L(
              "2 ტრავმა სამუშაო დროის კარგვით 436 ვიზიტზე (2025)",
              "2 lost-time injuries across 436 calls (2025)",
              "2 травмы с потерей времени на 436 заходах (2025)",
            ),
            L(
              "58 ჩაფიქსირებული ბრიფინგი",
              "58 toolbox briefings logged",
              "58 зарегистрированных toolbox-брифингов",
            ),
          ],
        },
        {
          idx: L("03 · ადამიანები", "03 People", "03 Люди"),
          title: L(
            "განათლება, ღირსეული შრომა და გზა პროფესიაში",
            "Training, decent work and a route in",
            "Обучение, достойный труд и путь в профессию",
          ),
          body: L(
            "ეკიპაჟთან მუშაობა MLC-ს ემორჩილება. შეურაცხყოფის საწინააღმდეგო პოლიტიკა თანამშრომლებსაც და ქვეკონტრაქტორებსაც ეხება. პოთის საზღვაო სკოლასთან ანაზღაურებადი კურსანტული პროგრამა მუშაობს.",
            "Crew handling follows MLC. The anti-harassment policy covers staff and contractors alike. A paid cadet programme runs with the maritime school in Poti.",
            "Работа с экипажами следует MLC. Политика против домогательств одинакова для штата и подрядчиков. Оплачиваемая программа курсантов идёт с морским училищем в Поти.",
          ),
          ticks: [
            L(
              "40 კურსანტული ადგილი 2022 წლიდან",
              "40 cadet placements since 2022",
              "40 мест практики курсантов с 2022",
            ),
            L(
              "1 900 სასწავლო საათი 2025 წელს",
              "1 900 training hours in 2025",
              "1 900 учебных часов в 2025",
            ),
          ],
        },
        {
          idx: L("04 · მართვა", "04 Governance", "04 Управление"),
          title: L(
            "დამატებითი გადახდები ქრთამის სახით — არასდროს",
            "No facilitation payments, ever",
            "Никаких выплат за содействие, никогда",
          ),
          body: L(
            "ანტიკორუფციული პუნქტი აგენტებსა და ქვეკონტრაქტორებსაც ეხება. ხარჯის ყოველ სტრიქონს გარე დოკუმენტი სჭირდება, წინააღმდეგ შემთხვევაში ანგარიშიდან იშლება.",
            "A written anti-corruption clause applies to agents and subcontractors. Every expense line needs an external document, or it is removed from the account.",
            "Письменный антикоррупционный пункт действует для агентов и субподрядчиков. Каждая строка расходов требует внешнего документа, иначе исключается.",
          ),
          ticks: [
            L(
              "ხარჯის სტრიქონების 100% გარე დოკუმენტით არის დადასტურებული",
              "100% of cost lines externally documented",
              "100% статей расходов подтверждены внешними документами",
            ),
            L(
              "წელიწადში 2 დამოუკიდებელი აუდიტი",
              "2 independent account audits per year",
              "2 независимых аудита расчётов в год",
            ),
          ],
        },
      ],
    },
    {
      kind: "split",
      tone: "paper2",
      img: "assets/aerial.jpg",
      alt: "პორტის შესასვლელი ზემოდან, გემი და ბუქსირი",
      caption: L(
        "მოლის შერჩევა ზამთრის ანკორეზე დგომის გეგმისთვის, იანვარი 2026.",
        "Breakwater survey for the winter anchorage plan, January 2026.",
        "Обследование молы для зимнего плана якорной стоянки, январь 2026.",
      ),
      kicker: L("გაზომილი და არა ნათქვამი", "Measured, not claimed", "Измерено, а не заявлено"),
      title: L(
        "სამი მაჩვენებელი, რომელსაც ყოველ კვარტალს ვაქვეყნებთ",
        "Three numbers we publish every quarter",
        "Три показателя, которые мы публикуем ежеквартально",
      ),
      table: {
        ariaLabel: L("კვარტალური მაჩვენებლები", "Quarterly figures", "Квартальные показатели"),
        head: [
          L("მაჩვენებელი", "Indicator", "Показатель"),
          L("2026 II კვ.", "2026 Q2", "2026 Q2"),
          L("2026 I კვ.", "2026 Q1", "2026 Q1"),
        ],
        numCols: [1, 2],
        rows: [
          [
            L(
              "უქმი დრო ბერთთან, ერთ ვიზიტზე",
              "Berth idle time per call",
              "Простой у причала на заход",
            ),
            L("3.1 h", "3.1 h", "3.1 h"),
            L("3.6 h", "3.6 h", "3.6 h"),
          ],
          [
            L(
              "კატერის რეისები «მწვანე» სანაპირო ენერგიით",
              "Launch trips on contracted green shore power",
              "Рейсы катеров на «зелёном» береговом питании",
            ),
            L("62 %", "62 %", "62 %"),
            L("48 %", "48 %", "48 %"),
          ],
          [
            L(
              "ეკიპაჟის ცვლა 8 საათში დასრულდა",
              "Crew change completed within 8 hours",
              "Смена экипажа завершена за 8 часов",
            ),
            L("89 %", "89 %", "89 %"),
            L("81 %", "81 %", "81 %"),
          ],
        ],
        note: L(
          "ოფისის ელექტროენერგია ჰიდროსადგურიდან მოდის; სანაპირო ელექტრომომარაგების რეისები ჟურნალით ითვლება.",
          "Office electricity comes from a hydro-heavy supplier; launch shore-power use is tracked by trip log.",
          "Электроэнергия офиса поставляется по контракту с гидрогенерацией; shore power катеров учитывается журналом рейсов.",
        ),
      },
    },
    {
      kind: "ticks",
      kicker: L("პოლიტიკები", "Policies", "Политики"),
      title: L(
        "მოთხოვნის შემთხვევაში ხელმისაწვდომი",
        "Available on request",
        "Доступны по запросу",
      ),
      narrow: true,
      items: [
        L(
          "ქრთამისა და დამატებითი გადახდების საწინააღმდეგო პოლიტიკა (2024)",
          "Anti-bribery and facilitation-payment policy (2024)",
          "Политика против взяточничества и выплат за содействие (2024)",
        ),
        L(
          "საზღვაო ნარჩენების მართვის პროცედურა: პოთი და კულევი",
          "Marine waste handling procedure, Poti and Kulevi",
          "Процедура обращения с судовыми отходами, Поти и Кулеви",
        ),
        L(
          "ეკიპაჟის კეთილდღეობა და საჩივრის არხი",
          "Crew welfare, anti-harassment and reporting channel",
          "Благополучие экипажей, против домогательств и канал сообщений",
        ),
        L(
          "MRV და DCS წარდგენებისთვის მონაცემთა დამუშავება",
          "Data handling for MRV and DCS submissions",
          "Обработка данных для EU MRV и IMO DCS",
        ),
        L(
          "მომწოდებლებისა და ქვეკონტრაქტორების კოდექსი",
          "Supplier and subcontractor code",
          "Кодекс поставщиков и субподрядчиков",
        ),
      ],
      actions: [
        {
          href: "contact.html",
          label: L("მოითხოვეთ პოლიტიკა", "Request a policy", "Запросить политику"),
        },
        {
          href: "news.html",
          ghost: true,
          label: L(
            "მდგრადობის სიახლეები",
            "Sustainability news",
            "Новости по устойчивости",
          ),
        },
      ],
    },
  ],
};
