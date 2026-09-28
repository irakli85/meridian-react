import { L } from "./text";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: L(
      "ჩვენ შესახებ — Meridian Georgia",
      "About us — Meridian Georgia",
      "О нас — Meridian Georgia",
    ),
    description: L(
      "როგორ მუშაობს Meridian Georgia: ისტორია, გუნდი, მენეჯმენტი და სანდოობის დოკუმენტები.",
      "How Meridian Georgia works: history, leadership, team and assurance documents.",
      "Как работает Meridian Georgia: история, руководство, команда и документы обеспечения.",
    ),
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/aerial.jpg",
      crumbs: [
        { href: "index.html", label: L("მთავარი", "Home", "Главная") },
        { href: "about.html", label: L("ჩვენ შესახებ", "About", "О нас") },
      ],
      title: L(
        "ოფისი სანაპიროზე და არა კოლცენტრი",
        "A coast-side office, not a call centre",
        "Офис на побережье, а не колл-центр",
      ),
      dek: L(
        "2011 წელს ორი აგენტით და ერთი გაქირავებული კატერით დავიწყეთ. დღეს 31 თანამშრომელი ემსახურება საქართველოს ოთხ პორტს — მორიგეობა არასდროს ჩერდება.",
        "We started in 2011 with two agents and a launch hire. Today 31 people cover four Georgian ports on a rota that never closes.",
        "Мы начали в 2011 году с двух агентов и арендованного катера. Сегодня 31 человек покрывает четыре порта Грузии по расписанию, которое не закрывается.",
      ),
    },
    {
      kind: "split",
      img: "assets/office.jpg",
      alt: "ოპერაციული გუნდი მაგისტრალურ გეგმაზე მუშაობს",
      caption: L(
        "ოპერაციული მაგიდა, პოტი — აქტიური ყოველი ვიზიტის ქაღალდი ამ ეკრანზე რჩება.",
        "Operations desk, Poti — the file for every live call stays on this screen.",
        "Операционный стол, Поти — файл каждого активного захода остаётся на этом экране.",
      ),
      kicker: L("ჩვენი პოზიცია", "Our position", "Наша позиция"),
      title: L(
        "ტერმინალს, სამსახურებსა და გემს შორის",
        "Between the terminal, the authorities and the ship",
        "Между терминалом, властями и судном",
      ),
      dek: L(
        "სააგენტო მხოლოდ მაშინ არის სასარგებლო, თუ 03:40-საღამოს მის დარეკვას შეძლებ და 06:00-ისთვის რაიმეს შეცვლას. მთელი მუშაობა სწორედ ესაა: ყოფნა, ქაღალდები და რიგის წინ გადაწევა.",
        "An agency is only useful if it can be reached at 03:40 and can change something by 06:00. That is the whole job: presence, paperwork and the ability to move the queue.",
        "Агентство полезно, если до него можно добраться в 03:40 и что-то изменить к 06:00. В этом вся работа: присутствие, документы и возможность сдвинуть очередь.",
      ),
      quote: L(
        "„ჩვენ დგომას არ ვყიდულობთ. ჩვენ ვაკეთებთ, რომ გეგმა ღამეს გადაურჩეს“ — ირმა ლ., ოპერაციების დირექტორი",
        "“We do not sell berths. We make the plan survive the night.” — Irina L., operations director",
        "«Мы не продаём швартовку. Мы делаем так, чтобы план пережил ночь» — Ирина Л., директор по операциям",
      ),
    },
    {
      kind: "numbered",
      tone: "paper2",
      kicker: L("ეტაპები", "Milestones", "Вехи"),
      title: L("როგორ გაიზარდა დაფარვა", "How the coverage grew", "Как росло покрытие"),
      items: [
        {
          title: L("პოტის ოფისი იხსნება", "Poti office opens", "Открыт офис в Поти"),
          body: L(
            "ორი აგენტი, სარფიქსო და ზოგადი ტვირთის ვიზიტები, ერთი გაქირავებული კატერი რეიდის სამუშაოებისთვის.",
            "Two agents, bulk and general cargo calls, one hired launch for anchorage work.",
            "Два агента, балкерные и генгрузовые заходы, один арендованный катер для работы на рейде.",
          ),
          meta: L("2011", "2011", "2011"),
        },
        {
          title: L(
            "ბათუმის ხაზი და ეკიპაჟის სერვისი",
            "Batumi desk and crew service",
            "Батумская линия и сервис экипажей",
          ),
          body: L(
            "დაემატა ეკიპაჟის ცვლის ხაზი ლიცენზირებული მიგრაციის პარტნიორითა და აეროპორტის ტრანსფერებით.",
            "Crew change desk added with a licensed immigration partner and airport transfers.",
            "Добавлена смена экипажей с лицензированным иммиграционным партнёром и трансферами в аэропорт.",
          ),
          meta: L("2015", "2015", "2015"),
        },
        {
          title: L("კულევისა და სუფსის რეიდი", "Kulevi and Supsa roads", "Рейды Кулеви и Супси"),
          body: L(
            "ნავთობის ვიზიტები, ISGOTT-განათლებული აგენტები, ტანკების გაწმენდისა და დეკანტაციის ზედამხედველობა.",
            "Oil and product calls, ISGOTT-trained agents, tank cleaning and decantation attendance.",
            "Нефтяные заходы, агенты с подготовкой ISGOTT, присутствие при мойке танков и декантации.",
          ),
          meta: L("2019", "2019", "2019"),
        },
        {
          title: L(
            "დამოწმებული პროცედურები",
            "Certified procedures",
            "Сертифицированные процедуры",
          ),
          body: L(
            "ISO 9001 მოქმედების არე აგენტობასა და ჰაზბანდინგზე; გადაშენდა ROH-აუდიტის წესები და მორიგეობა.",
            "ISO 9001 scope over agency and husbanding; ROH audit rules and duty rota rebuilt.",
            "Область ISO 9001 на агентирование и хузинг; перестроены правила аудита расчётов и дежурств.",
          ),
          meta: L("2022", "2022", "2022"),
        },
        {
          title: L("436 ვიზიტი წელიწადში", "436 calls a year", "436 заходов в год"),
          body: L(
            "ოთხი პორტი, 24/7 მორიგეობა და საკუთარი კურსანტული პროგრამა პოტის საზღვაო სკოლასთან.",
            "Four ports, 24/7 rota, own cadet programme with a maritime school in Poti.",
            "Четыре порта, круглосуточная ротация, собственная программа практики с морским училищем в Поти.",
          ),
          meta: L("2025", "2025", "2025"),
        },
      ],
    },
    {
      kind: "cards",
      kicker: L("ხელმძღვანელობა", "Leadership", "Руководство"),
      title: L(
        "ადამიანები, ვისთანაც რეალურად მუშაობთ",
        "The people you actually deal with",
        "Люди, с которыми вы реально работаете",
      ),
      note: L(
        "ჩვენ შესახებ გვერდის ბიოგრაფიები დემონსტრაციულია.",
        "Sample biographies for a demonstration site.",
        "Условные биографии для демонстрационного сайта.",
      ),
      columns: 4,
      items: [
        {
          title: L("ირმა ლომიძე", "Irina Lomidze", "Ирина Ломидзе"),
          body: L(
            "ოპერაციების დირექტორი. 24 წელი აგენტობაში, ადრე — ტერმინალის დაგეგმვა.",
            "Operations director. 24 years in agency work, previously terminal planning.",
            "Директор по операциям. 24 года в агентировании, ранее — планирование терминала.",
          ),
        },
        {
          title: L("სანდრო ქავრიშვილი", "Sandro Kavrishvili", "Сандро Кавришвили"),
          body: L(
            "ტექნიკური სუპერინტენდანტი, კაპიტანი; კლასი, PSC და რემონტების კოორდინაცია.",
            "Technical superintendent, master mariner; class, PSC and repair coordination.",
            "Технический суперинтендант, мастер флота; класс, PSC и координация ремонтов.",
          ),
        },
        {
          title: L("თამარ ჯაფარიძე", "Tamar Jafaridze", "Тамар Джафаридзе"),
          body: L(
            "ეკიპაჟისა და მიგრაციის ხელმძღვანელი; უძღვება კურსანტულ პროგრამას.",
            "Crew and immigration lead; runs the cadet placement programme.",
            "Руководитель экипажей и иммиграции; ведёт программу практики курсантов.",
          ),
        },
        {
          title: L("დავით აბაშიძე", "Daviti Abashidze", "Давити Абашидзе"),
          body: L(
            "კომპლაისი და ფინანსები; პასუხისმგებელია ROH-აუდიტსა და PDA-გადახვევაზე.",
            "Compliance and finance; owns the ROH audit and PDA review.",
            "Комплаенс и финансы; отвечает за аудит расчётов и проформа-ДА.",
          ),
        },
      ],
    },
    {
      kind: "cards",
      tone: "sea",
      tight: true,
      kicker: L("დამოწმება", "Assurance", "Гарантии"),
      title: L(
        "დოკუმენტები, რასაც კლიენტები ითხოვენ",
        "Documents clients ask for",
        "Документы, которые запрашивают клиенты",
      ),
      columns: 4,
      items: [
        {
          title: L("ISO 9001:2015", "ISO 9001:2015", "ISO 9001:2015"),
          body: L(
            "დამოწმებული მოქმედების არე: საპორტო აგენტობა და ჰაზბანდინგი.",
            "Certified scope: port agency and husbanding services.",
            "Сертифицированная область: агентирование и судовое обслуживание.",
          ),
        },
        {
          title: L(
            "დამტკიცებული P&I აგენტი",
            "P&I approved agent",
            "Одобренный агент P&I",
          ),
          body: L(
            "მიღებულია შავ ზღვაზე მომუშავე კლუბების მიერ.",
            "Accepted by clubs operating in the Black Sea.",
            "Принят клубами, работающими в Чёрном море.",
          ),
        },
        {
          title: L("ISPS", "ISPS", "ISPS"),
          body: L(
            "პორტული დაცვის პროცედურები და სწრაფი რეაგირების სია.",
            "Port facility security procedures and rapid response list.",
            "Процедуры охраны объекта и список быстрого реагирования.",
          ),
        },
        {
          title: L(
            "KYC და სანქციების შემოწმება",
            "KYC & sanctions screening",
            "KYC и санкционные проверки",
          ),
          body: L(
            "ყოველი ნომინაცია მიღებამდე იშლება.",
            "Every nomination screened before acceptance.",
            "Каждая номинация проверяется до принятия.",
          ),
        },
      ],
    },
  ],
};

