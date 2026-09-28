import { L } from "./text";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: L("კარიერა — Meridian Georgia", "Careers — Meridian Georgia", "Карьера — Meridian Georgia"),
    description: L(
      "ვაკანსიები პოთში, ბათუმსა და თბილისში, კურსანტული პროგრამა და პირობები.",
      "Vacancies in Poti, Batumi and Tbilisi, the cadet programme and conditions.",
      "Вакансии в Поти, Батуми и Тбилиси, программа практики и условия.",
    ),
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/office.jpg",
      crumbs: [
        { href: "index.html", label: L("მთავარი", "Home", "Главная") },
        { href: "careers.html", label: L("კარიერა", "Careers", "Карьера") },
      ],
      title: L(
        "სადაც ცხრილს ამინდი განსაზღვრავს",
        "Work where the timetable is the weather",
        "Работа, где расписание — это погода",
      ),
      dek: L(
        "ოთხი ცვლა, ოთხი პორტი და სადღგწოლო ხაზი, რომელიც არ იძინებს. თუ გასაგები ქაღალდები და სწრაფი გადაწყვეტილებები გიყვართ — წაიკითხეთ.",
        "Four shifts, four ports and a duty line that does not sleep. If you like clear paperwork and fast decisions, read on.",
        "Четыре смены, четыре порта и круглосуточная линия, которая не спит. Если любите понятные документы и быстрые решения — читайте дальше.",
      ),
    },
    {
      kind: "numbered",
      kicker: L("ღია პოზიციები", "Open roles", "Открытые позиции"),
      title: L("ოთხი ვაკანსია, ყველა პირობებით", "Four vacancies, all listed with conditions", "Четыре вакансии, все с условиями"),
      note: L(
        "ვაკანსიები დემონსტრაციული საიტის მაგალითებია.",
        "Sample postings for a demonstration site.",
        "Примеры объявлений для демонстрационного сайта.",
      ),
      items: [
        {
          title: L(
            "უფროსი საპორტო აგენტი — პოტი",
            "Senior Port Agent — Poti",
            "Старший портовый агент — Поти",
          ),
          body: L(
            "თავიდან ბოლომდე აწარმოეთ ვიზიტები: ბერთი, სამსახურები, time sheet და დახურვის ანგარიშები. თქვენს მორიგეობაზე ორი აგენტი იქნება და ერთში-შემოღამე სადღგწოლო ტელეფონიც.",
            "Own calls end to end: berth liaison, authorities, time sheets and closing accounts. You will supervise two agents on your watch and carry the duty phone on alternate weekends.",
            "Ведёте заходы от начала до конца: швартовка, органы, тайм-шиты и итоговые расчёты. Под руководством — два агента вашей смены, дежурный телефон через выходные.",
          ),
          meta: L(
            "სრული განაკვეთი · აგენტობის გამოცდილება 5+ წელი · ქართული და ინგლისური სავალდებულო, რუსული მისასალმებელი · განაცხადი 2026 წლის 31 ოქტომბრამდე",
            "Full time · 5+ years agency experience · Georgian and English required, Russian welcome · apply by 31 Oct 2026",
            "Полная занятость · опыт в агентировании от 5 лет · грузинский и английский обязательны, русский приветствуется · до 31 окт 2026",
          ),
        },
        {
          title: L(
            "ეკიპაჟის კოორდინატორი — ბათუმი",
            "Crew Coordinator — Batumi",
            "Координатор экипажей — Батуми",
          ),
          body: L(
            "sign-on/off ქაღალდები, ვიზები, ტრანსფერები, სასტუმრო და სამედიცინო თანხლებები. თქვენ ეკუთვნით აეროპორტის ფანჯარა და მიგრაციის პარტნიორს მასში იჭერთ.",
            "Sign on/off files, visas, transfers, hotels and medical escorts. You own the airport window and keep the immigration partner to it.",
            "Файлы sign on/off, визы, трансферы, гостиницы и медицинское сопровождение. Отвечаете за окно в аэропорту и держите в нём иммиграционного партнёра.",
          ),
          meta: L(
            "სრული განაკვეთი, ცხრილში ღამის მორიგეობაც შედის · ეკიპაჟის მაგიდაზე 2+ წელი · თურქული ან რუსული უპირატესობა · განაცხადი 2026 წლის 15 ნოემბრამდე",
            "Full time, shifts include nights on rota · 2+ years crew desk · Turkish or Russian an advantage · apply by 15 Nov 2026",
            "Полная занятость, ночные дежурства по графику · от 2 лет на экипажном столе · турецкий или русский плюс · до 15 нояб 2026",
          ),
        },
        {
          title: L(
            "საზღვაო ოპერატორი, მორიგის მაგიდა — პოტი",
            "Marine Operator, duty desk — Poti",
            "Судовой оператор, дежурный стол — Поти",
          ),
          body: L(
            "განახლება ყოველ 4 საათში, კატერის დაჯავშნები, ამინდის გადაწყვეტილებები და მორიგეობის გადაცემის წიგნი. ვინც ახლო მითხრებით ან მთავარი მექანიკოსი იარა და სანაპირო ტემპს ეძებს.",
            "Four-hour updates, launch bookings, weather calls and the handover book. Ideal if you have sailed as mate or chief engineer and want shore work with rhythm.",
            "Обновления каждые 4 часа, заказы катеров, погодные решения и книга приёмки смены. Подходит тем, кто ходил помощником или стармехом и хочет береговой работы с ритмом.",
          ),
          meta: L(
            "ცვლის გრაფიკი 4/4 · მეხრის ან მთავარი მექანიკოსის სერტიფიკატი · განაცხადი 2026 წლის 30 ნოემბრამდე",
            "Shift pattern 4 on / 4 off · CoC or engineer certificate · apply by 30 Nov 2026",
            "График 4 через 4 · сертификат помощника или механика · до 30 нояб 2026",
          ),
        },
        {
          title: L(
            "კომპლაისისა და დოკუმენტაციის ოფიცერი — თბილისი",
            "Compliance & Documentation Officer — Tbilisi",
            "Офицер комплаенса и документов — Тбилиси",
          ),
          body: L(
            "KYC და სანქციების შემოწმება, ხელშეკრულებების რეესტრი, MRV/DCS მონაცემთა შედარება და ყოველი საბოლოო ანგარიშის უკან დამოუკიდებელი აუდიტის ქაღალდი.",
            "KYC and sanctions screening, contract register, MRV/DCS data checks and the audit file behind every final account.",
            "KYC и санкционные проверки, реестр договоров, сверка данных MRV/DCS и аудиторский файл за каждым итоговым расчётом.",
          ),
          meta: L(
            "თბილისის ოფისი, პოტში იშვიათი ვიზიტები · სამართლის, ფინანსების ან საზღვაო ფონი · განაცხადი 2026 წლის 20 დეკემბრამდე",
            "Office based, occasional Poti travel · law, finance or maritime background · apply by 20 Dec 2026",
            "Офис в Тбилиси, редкие поездки в Поти · юридический, финансовый или морской бэкграунд · до 20 дек 2026",
          ),
        },
      ],
    },
    {
      kind: "columns",
      tone: "paper2",
      items: [
        {
          kicker: L("პირობები", "Conditions", "Условия"),
          title: L(
            "რა გვაქვს სანაპირო მუშაობაში",
            "What we offer on shore",
            "Что мы предлагаем на берегу",
          ),
          ticks: [
            L(
              "ცვლისა და მორიგეობის თანაფასი ხელფასს ემატება და ყოველთვიურად იხდის",
              "Shift pay and duty allowance on top of salary, paid monthly",
              "Оплата смен и дежурных надбавок к окладу, выплачивается ежемесячно",
            ),
            L(
              "სააგენტოს გადახდილი სწავლება: ISGOTT, სამედიცინო თანხლება, საშიში ტვირთები",
              "Training paid by the agency: ISGOTT, medical escort, dangerous goods",
              "Обучение за счёт агентства: ISGOTT, медсопровождение, опасные грузы",
            ),
            L(
              "მედიცინური დაზღვევა და ცვლის თანამშრომლების ყოველწლიური შვებულების ეკვივალენტი",
              "Medical insurance and annual sea-leave equivalence for shift staff",
              "Медицинская страховка и ежегодный эквивалент отпуска для сменного персонала",
            ),
            L(
              "ინგლისური და რუსული ენის გაკვეთილები, კვირაში ორჯერ",
              "English and Russian language lessons, twice a week",
              "Уроки английского и русского, дважды в неделю",
            ),
            L(
              "დამატებითი ქრთამის ზეწოლა არ არსებობს: უარი წერილობითი პოლიტიკაა",
              "No facilitation-payment pressure: refusal is a written policy",
              "Давления на выплаты за содействие нет: отказ зафиксирован политикой",
            ),
          ],
        },
        {
          kicker: L("კურსანტული პროგრამა", "Cadet programme", "Программа курсантов"),
          title: L(
            "ანაზღაურებადი გზა საზღვაო სკოლიდან",
            "A paid way in from the maritime school",
            "Оплачиваемый путь из морского училища",
          ),
          dek: L(
            "ორჯერ წელიწადში პოთის საზღვაო სკოლის სტუდენტებს ვიღებთ ნავმისადგომთან პრაქტიკის სეზონზე: ერთი სტაჟიორი ერთ ცვლაზე, კონკრეტული ხელმძღვანელი და წერილობითი ჟურნალი. თერთმეტი კურსდამთავრებული დაგვრჩა.",
            "Twice a year we take students from the Poti maritime school for a season of berths-side practice: one intern per shift, a named supervisor and a written log. Eleven graduates joined us permanently.",
            "Дважды в год берём студентов Поти-ского морского училища на сезон практики у борта: один стажёр на смену, именованный наставник и письменный журнал. Одиннадцать выпускников остались с нами.",
          ),
          note: L(
            "შემდეგი მიღება: ზაფხული 2027 · განაცხადები სკოლის ოფისში.",
            "Next intake: summer 2027 · applications through the school office.",
            "Следующий набор: лето 2027 · заявки через офис училища.",
          ),
          actions: [
            {
              href: "mailto:careers@meridian-georgia.example",
              label: L("გაგზავნეთ განაცხადი", "Send an application", "Отправить заявку"),
            },
            {
              href: "contact.html",
              ghost: true,
              label: L("დასვით კითხვა", "Ask a question", "Задать вопрос"),
            },
          ],
        },
      ],
    },
  ],
};
