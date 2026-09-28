import { L } from "./text";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: L("სიახლეები — Meridian Georgia", "News — Meridian Georgia", "Новости — Meridian Georgia"),
    description: L(
      "სააგენტოს სიახლეები: პორტული ოპერაციები, ეკიპაჟის პროტოკოლები და გარემოს დაცვის პროექტები.",
      "Agency news: port operations, crew protocols and environmental projects.",
      "Новости агентства: портовые операции, протоколы по экипажам и экологические проекты.",
    ),
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/crew.jpg",
      crumbs: [
        { href: "index.html", label: L("მთავარი", "Home", "Главная") },
        { href: "news.html", label: L("სიახლეები", "News", "Новости") },
      ],
      title: L("სააგენტოს სიახლეები", "Latest from the agency", "Свежее из агентства"),
      dek: L(
        "საოპერაციო ჩანაწერები, პროტოკოლების ცვლილება და საცდელი პროექტები — ჩარტერერებისთვის და კაპიტნებისთვის და არა პრესისთვის.",
        "Operational notes, protocol changes and pilot projects — written for charterers and masters, not for press.",
        "Операционные заметки, изменения протоколов и пилотные проекты — для чартереров и капитанов, не для прессы.",
      ),
    },
    {
      kind: "articles",
      note: L(
        "ეს სიახლეები დემონსტრაციული საიტის მაგალითია — რეალური მოვლენები აღწერილი არ არის.",
        "Sample newsroom content for a demonstration site — no real events are described.",
        "Пример новостной ленты демонстрационного сайта — реальные события не описаны.",
      ),
      items: [
        {
          img: "assets/green.jpg",
          alt: "გემი დაერთებულია სანაპირო ელექტრომომარაგებას",
          date: "12 · 09 · 2026",
          tag: L("გარემო", "Environment", "Экология"),
          title: L(
            "პოთში დაიწყო სანაპირო ელექტრომომარაგების გაზომვის პროგრამა",
            "Shore-power measurement programme starts at Poti",
            "В Поти началась программа измерений shore power",
          ),
          body: L(
            "სამმა ტერმინალმა ერთიანი გაზომვის გეგმა შეითანხმა. პირველი საცდელი ვიზიტი ზამთრის ფანჯარაშია, როცა დამხმარე ძრავები ყველაზე დიდხანს მუშაობენ. თუ ციფრები დადასტურდება, აღჭურვილ გემებს უპირატესობით დგომის ფანჯარა ენიშნებათ.",
            "Three terminals agreed a shared measurement plan for berthed vessels. The first trial call is set for the winter window, when auxiliary engines run longest. If the numbers hold, fitted tonnage gets a preferential berth slot.",
            "Три терминала согласовали общий план измерений для судов у причала. Первый пробный заход намечен на зимнее окно, когда вспомогательные двигатели работают дольше всего. Если цифры подтвердятся, оборудованные суда получат льготное окно швартовки.",
          ),
        },
        {
          img: "assets/crew.jpg",
          alt: "გუნდი სიმულატორის პულტთან",
          date: "28 · 08 · 2026",
          tag: L("ეკიპაჟი", "Crew", "Экипажи"),
          title: L(
            "ცვლის ახალმა პროტოკოლმა ეკიპაჟის ცვლა ექვს საათამდე შეამცირა",
            "New transit protocol cuts crew change to six hours",
            "Новый протокол транзита сократил смену экипажа до шести часов",
          ),
          body: L(
            "დოკუმენტების წინასწარი გაფორმება აეროპორტის მაგიდასთან და ტრანსფერის ერთმა ფანჯარამ ჯაჭვიდან ორი გადაცემა მოაშორა. ჩვეულებრივ ამინდში ლოდინი ბორტზე ასვლიდან რეგისტრაციამდე ახლა ოთხ საათზე ნაკლებია. იგივე ფაილი სამედიცინო თანხლებასაც ფარავს.",
            "Document pre-clearance at the airport desk and one transfer window removed two handovers from the chain. In normal weather the wait between gangway and check-in is now under four hours. The same file covers medical escorts.",
            "Предварительное оформление документов на стойке аэропорта и одно трансферное окно убрали два этапа из цепочки. В обычную погоду ожидание между сходнями и регистрацией теперь меньше четырёх часов. Тот же файл покрывает медицинское сопровождение.",
          ),
        },
        {
          img: "assets/aerial.jpg",
          alt: "პორტის შესასვლელი ზემოდან",
          date: "05 · 08 · 2026",
          tag: L("ოპერაციები", "Operations", "Операции"),
          title: L(
            "გამოიცა ზამთრის დრაუფტის რჩევა პოთის რეიდისთვის",
            "Winter draft advisory issued for Poti roads",
            "Опубликовано зимнее предупреждение по осадке на рейде Поти",
          ),
          body: L(
            "ქარიშხლის სეზონი ზღუდავს კატერების მუშაობას და ცვლის იმ დგომების სიას, რომლებიც ღამით ღია რჩება. დაგეგმეთ მაქსიმუმზე ნახევარი მეტრით ნაკლები ჩაღრმავება და ელოდეთ ბუქსირის ლოდინს სამ საათამდე — ნოემბრიდან თებერვლამდე.",
            "Squall season limits small-craft runs and changes which berths stay open overnight. Plan half a metre under the published maximum and expect a tug wait of up to three hours from November to February.",
            "Штормовой сезон ограничивает работу катеров и меняет перечень причалов, открытых на ночь. Планируйте на полметра меньше опубликованного максимума и ожидайте ожидания буксира до трёх часов с ноября по февраль.",
          ),
        },
        {
          img: "assets/ports.jpg",
          alt: "ტერმინალის დანადგარები დილით",
          date: "17 · 07 · 2026",
          tag: L("ტერმინალები", "Terminals", "Терминалы"),
          title: L(
            "კულევის ღამის ფანჯრის სცდამ გამტარუნარიანობა გაზარდა",
            "Kulevi night-window trial lifts berth productivity",
            "Ночное окно в Кулеви повысило производительность швартовки",
          ),
          body: L(
            "ორმა დამატებითმა ღამის ბრიგადამ საშუალო ლოდინი 21-დან 14 საათამდე შეამცირა საცდელი კვარტლისთვის. ეს შედეგი მეორე საბითრე ჯგუფზეა დამოკიდებული, რომელიც ახლა მორიგეობის ცხრილში შედის.",
            "Two extra night gangs on product berths cut average waiting from 21 to 14 hours over the trial quarter. The arrangement depends on a second mooring crew, which we now keep on the duty rota.",
            "Две дополнительные ночные бригады на нефтяных причалах сократили среднее ожидание с 21 до 14 часов за пробный квартал. Решение держится на второй швартовной команде, которую мы включили в дежурное расписание.",
          ),
        },
        {
          img: "assets/office.jpg",
          alt: "ოპერაციული მაგიდა მონიტორებით",
          date: "30 · 06 · 2026",
          tag: L("ადამიანები", "People", "Люди"),
          title: L(
            "კურსანტული პროგრამა ორმოც ადგილზე გაიზარდა",
            "Cadet programme reaches forty placements",
            "Программа курсантов достигла сорока мест",
          ),
          body: L(
            "2022 წლიდან პოთის საზღვაო სკოლის ორმოცმა სტუდენტმა ანაზღაურებადი პრაქტიკა გაიარა; თერთმეტი სააგენტოში დარჩა. შემდეგი მიღება ზაფხულის სეზონისთვის იხსნება.",
            "Since 2022, forty students from the Poti maritime school have completed paid berths-side internships; eleven joined the agency permanently. The next intake opens for the summer season.",
            "С 2022 года сорок студентов морского училища Поти прошли оплачиваемую практику у борта; одиннадцать остались в агентстве. Следующий набор откроется к летнему сезону.",
          ),
        },
        {
          img: "assets/hero.jpg",
          alt: "ბალკერი ღია ზღვაში",
          date: "11 · 05 · 2026",
          tag: L("კომპლაისი", "Compliance", "Комплаенс"),
          title: L(
            "EU MRV-ის მონაცემები უკვე დაგეგმვის ეტაპზე იკრიფება",
            "EU MRV data now collected at the planning stage",
            "Данные EU MRV собираются уже на этапе планирования",
          ),
          body: L(
            "ემისიების ანგარიშგების ველები ნომინაციის ფაილში გადავიდა, ამიტომ საწვავის დოკუმენტები აღარ მოდის გასვლის შემდეგ. ჩარტერერები იმავე ფორმას ხედავენ, რასაც საბოლოო ანგარიშში ვიყენებთ.",
            "Emission-reporting fields moved into the nomination file, so fuel documents no longer arrive after departure. Charterers see the same form we use for the final account.",
            "Поля отчёта по выбросам перенесены в файл номинации, поэтому документация по топливу больше не приходит после выхода. Чартереры видят ту же форму, что и в итоговом расчёте.",
          ),
        },
      ],
    },
    {
      kind: "cta",
      title: L(
        "გადაგვრჩით კითხვა სიახლეში ნახსენებ ვიზიტზე",
        "Ask about a call mentioned in the news",
        "Спросите о заходе из новостей",
      ),
      dek: L(
        "თუ პროტოკოლის ცვლილება თქვენს შემდეგ ვიზიტს ეხება, ჩვენ ამის შესახებ ლეიტაიმის დაწყებამდე გეტყვით.",
        "If a protocol change affects your next port call, we tell you before it affects your laytime.",
        "Если изменение протокола влияет на ваш следующий заход, мы сообщаем до того, как это затронет простой.",
      ),
      actions: [
        {
          href: "contact.html",
          label: L("დაგვიკავშირდით", "Contact the desk", "Связаться со столом"),
        },
        { href: "services.html", ghost: true, label: L("სერვისები", "Services", "Услуги") },
      ],
    },
  ],
};
