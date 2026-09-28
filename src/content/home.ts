import { CONTACT } from "../site";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: {
      ka: "Meridian Georgia — საზღვაო სააგენტო და ჰაზბანდინგი, შავი ზღვა",
      en: "Meridian Georgia — Marine agency & husbanding, Black Sea",
      ru: "Meridian Georgia — Морское агентство и хузинг, Чёрное море",
    },
    description: {
      ka: "საპორტო აგენტობა, ტვირთის ოპერაციები, ეკიპაჟის მართვა და საბაჟო დოკუმენტაცია პოთის, ბათუმის, კულევისა და სუფსის პორტებში.",
      en: "Port agency, cargo operations, crew management and customs documentation across Poti, Batumi, Kulevi and Supsa.",
      ru: "Портовое агентирование, грузовые операции, управление экипажами и таможенное оформление в Поти, Батуми, Кулеви и Супсе.",
    },
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/hero-video-first-frame.jpg",
      video: "assets/hero.mp4",
      kicker: {
        ka: "ფოთი · ბათუმი · ყულევი · სუფსა",
        en: "Poti · Batumi · Kulevi · Supsa",
        ru: "Поти · Батуми · Кулеви · Супса",
      },
      title: {
        ka: "ერთი ფანჯარა თქვენს გემსა და პორტს შორის",
        en: "One office between your vessel and the port",
        ru: "Одно агентство между вашим судном и портом",
      },
      dek: {
        ka: "ვმუშაობთ ტვირთის მფლობელების, გადამზიდავებისა და ოპერატორების სახელით საქართველოს პორტებში: გემის შემოსვლიდან გასვლამდე, ეკიპაჟიდან ცვლილებიდან საბაჟო გაფორმებამდე — მხოლოდ ერთი პასუხისმგებელი რომელიც კონტაქტზეა ნებისმიერ დროს",
        en: "We act for owners, charterers and operators in Georgian ports: berth to departure, crew to customs, and a single accountable contact on the duty line.",
        ru: "Мы представляем судовладельцев, чартереров и операторов в портах Грузии: от швартовки до выхода, от экипажа до таможни — с одним ответственным контактом на круглосуточной линии.",
      },
      actions: [
        {
          href: "contact.html",
          dialog: true,
          label: { ka: "დაგვიკავშირდით", en: "Get in touch", ru: "Связаться" },
        },
        {
          href: "services.html",
          label: { ka: "ყველა სერვისი", en: "All services", ru: "Все услуги" },
        },
      ],
    },
    {
      kind: "stats",
      tone: "sea",
      kicker: { ka: "სააგენტო ციფრებში", en: "The agency in numbers", ru: "Агентство в цифрах" },
      title: {
        ka: "2011 წლიდან საქართველოს სანაპიროზე",
        en: "Since 2011, on the Georgian coast",
        ru: "С 2011 года на грузинском побережье",
      },
      note: {
        ka: "ეს არის დემონსტრაციული საიტი — ციფრები ჩაანაცვლეთ თქვენი რეალური ოპერაციული მაჩვენებლებით.",
        en: "Sample figures for a demonstration site — replace with your own operating record.",
        ru: "Примерные показатели для демонстрационного сайта — замените на собственные данные.",
      },
      items: [
        {
          label: { ka: "ვიზიტი, 2025", en: "Vessel calls, 2025", ru: "Судозаходов, 2025" },
          value: "436",
        },
        {
          label: { ka: "დაფარული პორტი", en: "Ports covered", ru: "Портов в покрытии" },
          value: "4",
        },
        {
          label: {
            ka: "მორიგის პასუხი, მედიანა",
            en: "Duty response, median",
            ru: "Ответ дежурного, медиана",
          },
          value: "12",
          unit: { ka: "წთ", en: "min", ru: "мин" },
        },
        {
          label: {
            ka: "ანგარიშის დახურვა, მედიანა",
            en: "ROH closing, median",
            ru: "Закрытие счётов, медиана",
          },
          value: "4",
          unit: { ka: "დღე", en: "days", ru: "дня" },
        },
      ],
    },
    {
      kind: "cards",
      kicker: { ka: "რას ვაკეთებთ", en: "What we do", ru: "Что мы делаем" },
      title: {
        ka: "ექვსი მიმართულება, ერთი საოპერაციო ფაილი",
        en: "Six service lines, one operating file",
        ru: "Шесть направлений, один операционный файл",
      },
      more: {
        href: "services.html",
        label: { ka: "სერვისების სრული აღწერა →", en: "Full service detail →", ru: "Полное описание →" },
      },
      columns: 3,
      items: [
        {
          idx: { ka: "01 · საპორტო აგენტობა", en: "01 Port agency", ru: "01 Агентирование" },
          title: {
            ka: "აგენტობა და ჰაზბანდინგი",
            en: "Agency & husbanding",
            ru: "Агентирование и хузинг",
          },
          body: {
            ka: "ნომინაციიდან გასვლამდე: ბერთთან კომუნიკაცია, სამსახურებთან ურთიერთობა, ზედამხედველობა, დაზიანებისა და პრეტენზიის მხარდაჭერა, proforma DA და საბოლოო ROH.",
            en: "Nomination to departure: berth liaison, authorities, attendance, damage and claims support, proforma DA and final ROH.",
            ru: "От номинации до выхода: связь по швартовке, органы, присутствие, поддержка при повреждениях и претензиях, проформа-ДА и итоговый расчёт.",
          },
        },
        {
          idx: { ka: "02 · ტვირთი", en: "02 Cargo", ru: "02 Грузовые операции" },
          title: {
            ka: "ტვირთისა და ტერმინალის ოპერაციები",
            en: "Cargo & terminal operations",
            ru: "Грузовые и терминальные операции",
          },
          body: {
            ka: "ტვირთვისა და გადატვირთვის დაგეგმვა, სტიდორებთან კოორდინაცია, დრაუფტ-სერვეი, ტალიის შემოწმება და გადახრების დოკუმენტირება.",
            en: "Load and discharge planning, stevedore coordination, draft survey, tally checks and documented exceptions.",
            ru: "Планирование погрузки и выгрузки, координация со стивидорами, драфт-сервей, контроль таллией и документирование отклонений.",
          },
        },
        {
          idx: { ka: "03 · ეკიპაჟი", en: "03 Crew", ru: "03 Экипажи" },
          title: {
            ka: "ეკიპაჟის ცვლა და მართვა",
            en: "Crew change & management",
            ru: "Смена и управление экипажами",
          },
          body: {
            ka: "sign-on/off, ვიზები და ნებართვები, ტრანსფერები, სამედიცინო შემთხვევები, რეპატრიაცია და კურსანტების დასაქმება.",
            en: "Sign on/off, visas and permits, transfers, medical cases, repatriation and cadet placement.",
            ru: "Sign on/off, визы и разрешения, трансферы, медицинские случаи, репатриация и практика курсантов.",
          },
        },
        {
          idx: { ka: "04 · ტექნიკური", en: "04 Technical", ru: "04 Техническое" },
          title: {
            ka: "ტექნიკური მხარდაჭერა და ინსპექციები",
            en: "Technical support & inspections",
            ru: "Техническая поддержка и осмотры",
          },
          body: {
            ka: "სუპერინტენდანტთან კომუნიკაცია, კლასისა და PSC-ის ზედამხედველობა, სურვეიერები, რემონტისა და ვერფის კოორდინაცია.",
            en: "Superintendency liaison, class and PSC attendance, surveyors, repair and yard coordination.",
            ru: "Связь с суперинтендантами, освидетельствования класса и PSC, сюрвейеры, координация ремонтов и верфей.",
          },
        },
        {
          idx: { ka: "05 · დოკუმენტაცია", en: "05 Compliance", ru: "05 Документы" },
          title: {
            ka: "საბაჟო, დოკუმენტაცია და კომპლაისი",
            en: "Customs, documents & compliance",
            ru: "Таможня, документы и комплаенс",
          },
          body: {
            ka: "გემისა და ეკიპაჟის გაფორმება, e-FAL, სანიტარიული კონტროლი, ნაგვისა და ბალასტის დეკლარაციები, გავლის ნებართვა.",
            en: "Ship and crew clearance, e-FAL, sanitary control, waste and ballast declarations, sailing permits.",
            ru: "Оформление судна и экипажа, e-FAL, санитарный контроль, декларации отходов и балласта, пропуска на выход.",
          },
        },
        {
          idx: { ka: "06 · მომარაგება", en: "06 Supplies", ru: "06 Снабжение" },
          title: {
            ka: "ბუნკეროვა, მომარაგება და ნაგვის გატანა",
            en: "Bunkering, provisioning & waste",
            ru: "Бункеровка, снабжение и отходы",
          },
          body: {
            ka: "ბარჟებთან კოორდინაცია BDN-ის მიხედვით, ზეთები, ტკბილი წყალი, პროვიზია, სათადარიგო ნაწილების მიტანა და შლამის გატანა.",
            en: "Barge coordination against BDNs, lubricants, fresh water, provisions, spares runs and sludge removal.",
            ru: "Координация барж по BDN, масла, пресная вода, провизия, доставка запчастей и вывоз шлама.",
          },
        },
      ],
    },
    {
      kind: "split",
      tone: "paper2",
      img: "assets/ports.jpg",
      alt: "კონტეინერული დანადგარები ტერმინალის ნავმისადგომზე დილით",
      caption: {
        ka: "პოთის საკონტეინერო ტერმინალი, 07:20 ადგილობრივი დრო — მორიგეობის გადაცემა.",
        en: "Poti container terminal, 07:20 local — a handover between watches.",
        ru: "Контейнерный терминал Поти, 07:20 по местному — передача между сменами.",
      },
      kicker: { ka: "როგორ ვმუშაობთ", en: "How we work", ru: "Как мы работаем" },
      title: {
        ka: "წერილობითი გეგმა გემის მოსვლამდე",
        en: "A written plan before the vessel arrives",
        ru: "Письменный план до прихода судна",
      },
      dek: {
        ka: "ყოველი ვიზიტი იხსნება საგეგმო ფაილით: დგომის ფანჯარა, სისიღრმის შემოწმება, რესურსების დაჯავშნა, სავარაუდო ღირებულება და კონკრეტული აგენტი, რომელიც მას უძღვება. არაფერი გადაეცემა ზეპირად.",
        en: "Every call opens with a planning file: berth window, fairway depth check, resource booking, cost estimate and the named agent who owns it. Nothing is inherited verbally.",
        ru: "Каждый заход открывается плановым файлом: окно швартовки, проверка глубин, бронирование ресурсов, смета и именованный агент, который его ведёт. Ничего не передаётся на словах.",
      },
      ticks: [
        {
          ka: "საგეგმო ფაილი ნომინაციიდან 4 საათში",
          en: "Planning file issued within 4 hours of nomination",
          ru: "Плановый файл — в течение 4 часов после номинации",
        },
        {
          ka: "სტატუსის განახლება ყოველ 4 საათში, UTC დროის მითხრებით",
          en: "Status update every 4 hours with UTC timestamps",
          ru: "Обновление статуса каждые 4 часа с метками UTC",
        },
        {
          ka: "ყოველი ხარჯი დამადასტურებელი დოკუმენტით",
          en: "Every cost backed by a supporting document",
          ru: "Каждая строка расходов подтверждена документом",
        },
        {
          ka: "სადღეღამური ნომრის უკან ორი დასახელებული მორიგე",
          en: "Two named watchkeepers behind the duty number",
          ru: "Два именованных дежурных за круглосуточным номером",
        },
      ],
    },
    {
      kind: "split",
      tone: "sea",
      tight: true,
      textFirst: true,
      img: "assets/office.jpg",
      alt: "ოთხი თანამშრომელი ოპერაციულ გეგმას უყურებს ოფისში",
      caption: {
        ka: "პოთის ოპერაციული მაგიდა — 24/7 მორიგეობა ოთხი ცვლით.",
        en: "Poti operations desk, 24/7 rota across four shifts.",
        ru: "Операционный стол в Поти, круглосуточная ротация из четырёх смен.",
      },
      title: {
        ka: "გამოგზავნეთ შემდეგი ვიზიტის დეტალები",
        en: "Send us the next call",
        ru: "Пришлите нам следующий заход",
      },
      dek: {
        ka: "საკმარისია გემი, პორტი, ETA და ტვირთი — მიიღებთ სავარაუდო ღირებულებასა და კონკრეტულ აგენტს.",
        en: "Vessel, port, ETA and cargo is enough to start. You will get an indicative cost and a named agent.",
        ru: "Достаточно указать судно, порт, ETA и груз — вы получите ориентировочную стоимость и именованного агента.",
      },
      actions: [
        {
          href: "contact.html",
          dialog: true,
          label: { ka: "საკონტაქტო ფორმა", en: "Contact form", ru: "Форма связи" },
        },
        {
          href: CONTACT.dutyPhoneHref,
          ghost: true,
          dir: "ltr",
          label: { ka: CONTACT.dutyPhoneDisplay, en: CONTACT.dutyPhoneDisplay, ru: CONTACT.dutyPhoneDisplay },
        },
      ],
    },
  ],
};
