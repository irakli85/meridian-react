import { L } from "./text";
import type { PageContent } from "./types";

export const page: PageContent = {
  meta: {
    title: L("სერვისები — Meridian Georgia", "Services — Meridian Georgia", "Услуги — Meridian Georgia"),
    description: L(
      "აგენტობა, ტვირთის ოპერაციები, ეკიპაჟის მართვა, ტექნიკური მხარდაჭერა, საბაჟო და მომარაგება — რა შედის თითოეულში.",
      "Agency, cargo operations, crew management, technical support, customs and supplies — what each includes.",
      "Агентирование, грузовые операции, экипажи, техническая поддержка, таможня и снабжение — что входит в каждое.",
    ),
  },
  blocks: [
    {
      kind: "hero",
      img: "assets/ports.jpg",
      crumbs: [
        { href: "index.html", label: L("მთავარი", "Home", "Главная") },
        { href: "services.html", label: L("სერვისები", "Services", "Услуги") },
      ],
      title: L("სერვისები, პუნქტ-პუნქტად", "Services, item by item", "Услуги, по пунктам"),
      dek: L(
        "რა შედის ციკლში, რა ფასდება ცალკე და ვინ აწერს ხელს ქაღალდებს. ფასები მიიღება სერვისის შეთანხმებითა თითოეული ნომინაციისთვის.",
        "What is included, what is quoted separately, and who signs the paperwork. Prices come as a service agreement with each nomination.",
        "Что входит, что тарифицируется отдельно и кто подписывает документы. Цены выдаются с сервис-соглашением на каждую номинацию.",
      ),
    },
    {
      kind: "numbered",
      kicker: L("ძირითადი მიმართულებები", "Core lines", "Основные направления"),
      title: L(
        "ექვსი მიმართულება — ცალ-ცალკე ან ერთ პაკეტად",
        "Six lines you can buy separately or as one file",
        "Шесть направлений: по отдельности или одним пакетом",
      ),
      items: [
        {
          title: L(
            "საპორტო აგენტობა და ჰაზბანდინგი",
            "Port agency & husbanding",
            "Портовое агентирование и хузинг",
          ),
          body: L(
            "cover notification და NOR, ბერთის ფანჯრის მოლაპარაკება, ლოცმანის/ბუქსირის/მუშტარების შეკვეთა, სამსახურებთან ზედამხედველობა, დაზიანება და პრეტენზია, proforma DA გამოსვლიდან 24 საათში და საბოლოო ROH ხუთ სამუშაო დღეში.",
            "Cover notification and NOR, berth window negotiation, pilot/tug/mooring orders, authority attendance, damage and claims support, proforma DA within 24 hours of departure and final ROH within five working days.",
            "Cover notification и NOR, согласование окна швартовки, заказы лоцмана/буксиров/швартовки, присутствие органов, поддержка при повреждениях и претензиях, проформа-ДА в течение 24 часов после выхода и итоговый расчёт за пять рабочих дней.",
          ),
          meta: L(
            "შემავალი: 24/7 ზედამხედველობა, statement of facts, ფოტოარქივი.",
            "Included: 24/7 attendance, statement of facts, photo archive.",
            "Включено: присутствие 24/7, statement of facts, фотоархив.",
          ),
        },
        {
          title: L(
            "ტვირთისა და ტერმინალის ოპერაციები",
            "Cargo & terminal operations",
            "Грузовые и терминальные операции",
          ),
          body: L(
            "ტერმინალთან ერთად სტოუეჯისა და თანმიმდევრობის გეგმა, სტიდორების ცვლები, დრაუფტ-სერვეი მოსვლამდე და შემდეგ, ტალის ფურცლების შემოწმება, protest წერილები, ამოტვირთვისა და ნაკლებობის ანგარიშები.",
            "Stowage and sequence planning with the terminal, stevedore shifts, draft survey before and after, tally sheet verification, letters of protest, outturn and shortage reports.",
            "Планирование укладки и очерёдности с терминалом, смены стивидоров, драфт-сервей до и после, сверка таллиев, letters of protest, отчёты по выгрузке и недостаче.",
          ),
          meta: L(
            "დამოუკიდებელი სერვეიერები მოთხოვნის შემთხვევაში (SGS, Intertek, Bureau Veritas).",
            "Independent surveyors mobilised on request (SGS, Intertek, Bureau Veritas).",
            "Независимые сюрвейеры по запросу (SGS, Intertek, Bureau Veritas).",
          ),
        },
        {
          title: L(
            "ეკიპაჟის ცვლა და მართვა",
            "Crew change & management",
            "Смена экипажей и управление",
          ),
          body: L(
            "sign-on/off ციკლები, ვიზები და ნებართვები, კატერი რეიდზე, სასტუმრო და სანაპირო დასვენება, სამედიცინო შემთხვევები და ჰოსპიტალს თანხლება, რეპატრიაცია, ხელფასის მხარდაჭერა და manning-დოკუმენტები.",
            "Sign on/off cycles, visas and work permits, launch to anchorage, hotel and shore leave, medical cases and hospital escort, repatriation, payroll support and Manning documents.",
            "Циклы sign on/off, визы и разрешения, катер на рейд, гостиница и береговой отпуск, медицинские случаи и сопровождение в больницу, репатриация, поддержка по зарплатам и документы по маннингу.",
          ),
          meta: L(
            "საშუალო დრო აეროპორტიდან ბორტამდე: 6 საათი სტანდარტული პროტოკოლით.",
            "Median airport-to-shell time: 6 hours on the standard protocol.",
            "Медиана «аэропорт — борт»: 6 часов по стандартному протоколу.",
          ),
        },
        {
          title: L(
            "ტექნიკური მხარდაჭერა და ინსპექციები",
            "Technical support & inspections",
            "Техническая поддержка и осмотры",
          ),
          body: L(
            "სუპერინტენდანტთან კომუნიკაცია, კლასის ოსვიდებებზე ზედამხედველობა, PSC-ის მომზადება, რემონტისა და ვერფის კოორდინაცია, სათადარიგო ნაწილების ლოგისტიკა, ულტრაბგერითი და სისქის გაზომვები პარტნიორი სურვეიერებით.",
            "Superintendency liaison, class attendance, port state control preparation, repair and yard coordination, spare parts logistics, ultrasound and thickness measurements with partner surveyors.",
            "Связь с суперинтендантами, присутствие на освидетельствованиях класса, подготовка к PSC, координация ремонтов и верфей, логистика запчастей, ультразвук и замер толщин с партнёрами.",
          ),
          meta: L(
            "ანგარიშდება: ხარვეზების სია ფოტოებითა და პრიორიტეტიანი მოქმედების ფურცლით.",
            "Reporting: defect list with photographs and a prioritised action sheet.",
            "Отчётность: перечень дефектов с фото и приоритизированный лист действий.",
          ),
        },
        {
          title: L(
            "საბაჟო, დოკუმენტაცია და კომპლაისი",
            "Customs, documents & compliance",
            "Таможня, документы и комплаенс",
          ),
          body: L(
            "გემის, ეკიპაჟისა და stores-ის გაფორმება, IMO FAL ელექტრონული წარდგენა, სანიტარიული და ფიტოსანიტარიული კონტროლი, ნაგვისა და ბალასტის დეკლარაციები, ზედმეტი საათების ნებართვები, MRV/DCS მონაცემთა შეგროვების მხარდაჭერა.",
            "Clearance of ship, crew and stores, IMO FAL e-submission, sanitary and phytosanitary control, garbage and ballast declarations, overtime permits, MRV/DCS data collection support.",
            "Оформление судна, экипажа и снабжения, подача e-FAL, санитарный и фитосанитарный контроль, декларации мусора и балласта, разрешения на сверхурочные, поддержка сбора данных MRV/DCS.",
          ),
          meta: L(
            "KYC და სანქციების შემოწმება ნომინაციის მიღებამდე სრულდება.",
            "KYC and sanctions screening is run before any nomination is accepted.",
            "KYC и санкционная проверка выполняются до принятия номинации.",
          ),
        },
        {
          title: L(
            "ბუნკეროვა, მომარაგება და ნაგვის გატანა",
            "Bunkering, provisioning & waste",
            "Бункеровка, снабжение и отходы",
          ),
          body: L(
            "ბარჟების განაგდება და BDN-ის შედარება, საზეთი, ტკბილი წყალი, პროვიზია და chandlery, ბონდური stores, სათადარიგო ნაწილების ექსპრეს-მიტანა, შლამის, ნაგვისა და საკანალიზაციო ნარჩენების გატანა.",
            "Barge scheduling and BDN reconciliation, lubricants, fresh water, provisions and chandlery, bonded stores, spare part express runs, sludge, garbage and sewage removal.",
            "Планирование барж и сверка BDN, масла, пресная вода, провизия и чандлерия, бондовый запас, экспресс-доставка запчастей, вывоз шлама, мусора и сточных вод.",
          ),
          meta: L(
            "რაოდენობისა და ხარისხის ნიმუშების აღება დამოუკიდებელი სერვეიერებით ხორციელდება.",
            "Quantity and quality sampling arranged with independent surveyors.",
            "Отбор проб по количеству и качеству организуется с независимыми сюрвейерами.",
          ),
        },
      ],
    },
    {
      kind: "cards",
      tone: "paper2",
      kicker: L("ვიზიტის თანმიმდევრობა", "Call sequence", "Последовательность захода"),
      title: L(
        "ნომინაციიდან დახურულ ქაღალდამდე",
        "From nomination to closing file",
        "От номинации до закрытого файла",
      ),
      columns: 4,
      items: [
        {
          title: L("ნომინაცია", "Nomination", "Номинация"),
          body: L(
            "KYC-შემოწმება, სერვის-შეთანხმება, საგეგმო ქაღალდი და სავარაუდო ღირებულება 4 საათში.",
            "KYC screening, service agreement, planning file and indicative cost within 4 hours.",
            "Проверка KYC, сервис-соглашение, плановый файл и ориентировочная стоимость за 4 часа.",
          ),
        },
        {
          title: L("მოსვლამდე", "Pre-arrival", "До прихода"),
          body: L(
            "ბერთის ფანჯარა დადასტურებული, რესურსები დამაგრებული, ნახაზები წარდგენილი, ეკიპაჟისა და საბაჟო ქაღალდები წინასწარ გაფორმებული.",
            "Berth window confirmed, resources booked, drafts filed, crew and customs paperwork pre-cleared.",
            "Подтверждено окно, забронированы ресурсы, поданы черновики, документы экипажа и таможни преоформлены.",
          ),
        },
        {
          title: L("ვიზიტი", "The call", "Заход"),
          body: L(
            "აგენტი ბორტზე, ოპერატორი სანაპიროზე, განახლება ყოველ 4 საათში SOF-ითა და ფოტოებით.",
            "Agent on board, operator ashore, four-hour updates with SOF and photographs.",
            "Агент на борту, оператор на берегу, обновления каждые 4 часа с SOF и фотографиями.",
          ),
        },
        {
          title: L("დახურვა", "Closing", "Закрытие"),
          body: L(
            "time sheet-ის აუდიტი, საბოლოო ROH 5 სამუშაო დღეში, სხვაობის დაბრუნება.",
            "Time sheet audit, final ROH in 5 working days, refund of the balance.",
            "Аудит тайм-шита, итоговый расчёт за 5 рабочих дней, возврат остатка.",
          ),
        },
      ],
    },
    {
      kind: "table",
      kicker: L(
        "გემის ტიპები, რასაც ვემსახურებით",
        "Vessel types handled",
        "Типы обслуживаемых судов",
      ),
      title: L(
        "ყოველი კორპუსი ყოველ დგომაზე არ ჯდება",
        "Not every hull fits every berth",
        "Не каждый корпус подходит под каждый причал",
      ),
      table: {
        ariaLabel: L("გემების ტიპები", "Vessel types", "Типы судов"),
        head: [
          L("გემის ტიპი", "Vessel type", "Тип судна"),
          L("უკეთესი დგომა", "Best fit", "Оптимальный порт"),
          L("ჩვეული დრაუფტი (მ)", "Usual draft (m)", "Обычная осадка (м)"),
          L("გათვალისწინება", "Watch-outs", "Особенности"),
        ],
        numCols: [2],
        rows: [
          [
            L(
              "ჰენდსაიზი / სუპრამაქსი ბალკერები",
              "Handysize / Supramax bulk",
              "Handysize / Supramax балкеры",
            ),
            L("პოტი, ბათუმი", "Poti, Batumi", "Поти, Батуми"),
            L("9.0 – 12.5", "9.0 – 12.5", "9.0 – 12.5"),
            L(
              "მარცვლეული ტვირთისთვის საჭიროა ტრიუმ გაწმენდის სერტიფიკატი.",
              "Grain hold cleaning certificate needed before loading.",
              "Требуется сертификат мойки трюмов до загрузки зерном.",
            ),
          ],
          [
            L("კონტეინერული ფიდერები", "Container feeders", "Контейнерные фидеры"),
            L("პოტი", "Poti", "Поти"),
            L("8.5 – 11.0", "8.5 – 11.0", "8.5 – 11.0"),
            L(
              "reefer-ის ბუდები შეზღუდულია — ადრე გამოაცხადეთ.",
              "Reefer plugs are limited; declare early.",
              "Ограничено количество риферных розеток — заявляйте заранее.",
            ),
          ],
          [
            L(
              "პროდუქტების / ქიმიური ტანკერები",
              "Product / chemical tankers",
              "Нефтепродуктовые и химические танкеры",
            ),
            L("კულევი", "Kulevi", "Кулеви"),
            L("10.0 – 13.0", "10.0 – 13.0", "10.0 – 13.0"),
            L(
              "ISGOTT-ის პროცედურები, gas-free სერტიფიკატი, ღამის დგომის შეზღუდვები.",
              "ISGOTT procedures, gas-free certificate, night berthing limits.",
              "Процедуры ISGOTT, gas-free сертификат, ночные ограничения швартовки.",
            ),
          ],
          [
            L(
              "ზოგადი და პროექტული ტვირთი",
              "General and project cargo",
              "Генеральные и проектные грузы",
            ),
            L("ბათუმი, პოტი", "Batumi, Poti", "Батуми, Поти"),
            L("7.5 – 10.5", "7.5 – 10.5", "7.5 – 10.5"),
            L(
              "ტვირთისამწევი დანადგარები და მარშრუტის დათვალიერება ტერმინალთან გულისხმობს.",
              "Lifting gear and route survey arranged with the terminal.",
              "Грузоподъёмные средства и трассовый обзор согласуются с терминалом.",
            ),
          ],
          [
            L("რო-რო და ბაგირა", "Ro-ro and ferry", "Ro-ro и паромы"),
            L("ბათუმი", "Batumi", "Батуми"),
            L("6.5 – 8.0", "6.5 – 8.0", "6.5 – 8.0"),
            L(
              "საბაჟო ზოლებს ესაჭიროება ეკიპაჟის სია 12 საათით ადრე.",
              "Custom lanes need crew lists 12 hours before.",
              "Таможенные полосы требуют списки экипажа за 12 часов.",
            ),
          ],
          [
            L("ნავთობი ბუიდან", "Crude at buoy", "Нефть с буя"),
            L("სუფსა", "Supsa", "Супса"),
            L("11.0 – 12.0", "11.0 – 12.0", "11.0 – 12.0"),
            L(
              "ამინდის ფანჯარაა გადამწყვეტი — ელოდეთ რეიდზე ყოფნას.",
              "Weather window governs; expect waiting at roads.",
              "Окно погоды решает; ожидайте ожидания на рейде.",
            ),
          ],
        ],
      },
    },
    {
      kind: "cta",
      title: L(
        "გამოგზავნეთ ნომინაცია და ნახეთ საგეგმო ქაღალდი",
        "Send a nomination and see the planning file",
        "Пришлите номинацию — увидите плановый файл",
      ),
      dek: L(
        "ოთხი საათი არის ჩვენი პასუხის სტანდარტი სრული საგეგმო ქაღალდითა და სავარაუდო ფასებით.",
        "Four hours is our reply standard for a complete planning file with indicative costs.",
        "Четыре часа — наш стандарт ответа с полным плановым файлом и ориентировочными ценами.",
      ),
      actions: [
        {
          href: "contact.html",
          label: L("დაიწყეთ ნომინაცია", "Start a nomination", "Начать номинацию"),
        },
        {
          href: "sustainability.html",
          ghost: true,
          label: L(
            "როგორ ვმუშაობთ პასუხისმგებლიანად",
            "How we operate responsibly",
            "Как мы работаем ответственно",
          ),
        },
      ],
    },
  ],
};
