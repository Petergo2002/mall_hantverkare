export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: string;
};

export type Area = {
  name: string;
  slug: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TrustIndicatorIcon = "shield" | "users" | "check" | "wrench";

export type TrustIndicator = {
  icon: TrustIndicatorIcon;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "SDS Bygg & Snickeri AB",
  brandName: "SDS Bygg",
  description:
    "SDS Bygg & Snickeri AB är ett etablerat byggbolag i Stockholm som varit aktiva sedan 2018. Vi är stolta över vår pålitlighet och vårt engagemang för kvalitet. Vårt team av erfarna hantverkare strävar efter att överträffa kundernas förväntningar genom att leverera högkvalitativa resultat inom varje projekt vi åtar oss.",
  shortDescription: "Bygg & snickeriarbeten med kvalitet i varje detalj",
  defaultTitleSuffix: "Bygg & Snickeri i Stockholm",
  foundedYear: 2018,
  primaryServiceArea: "Storstockholm",
  url: "https://www.sdsbygg.se",
  legal: {
    orgNumber: "XXXXXX-XXXX",
  },
  contact: {
    phone: "08-123 45 67",
    email: "info@sdsbygg.se",
    address: "Saltsjö-Boo, Stockholm",
    businessHours: "Öppet vardagar 07:00 - 16:00",
  },
  schema: {
    streetAddress: "",
    addressLocality: "Stockholm",
    postalCode: "",
    addressCountry: "SE",
    geo: {
      latitude: 59.3456,
      longitude: 18.2567,
    },
  },
  services: [
    {
      title: "Köksrenovering",
      slug: "koksrenovering",
      description: "Förverkliga ditt drömkök med våra erfarna hantverkare.",
      icon: "kitchen",
    },
    {
      title: "Inredningsrenovering",
      slug: "inredningsrenovering",
      description: "Vi förvandlar dina rum med precision och stil.",
      icon: "interior",
    },
  ] as Service[],
  areas: [
    {
      name: "Saltsjö-Boo",
      slug: "saltsjo-boo",
    },
    {
      name: "Nacka",
      slug: "nacka",
    },
  ] as Area[],
  features: [
    "Etablerat sedan 2018",
    "Erfarna hantverkare",
    "Hög kvalitet i varje projekt",
    "Nöjda kunder i Stockholm",
  ],
  hero: {
    badge: "Etablerat sedan 2018",
    headingPrefix: "Bygg & snickeriarbeten med kvalitet i",
    headingAccent: "varje detalj",
    description:
      "Vi är stolta över vår pålitlighet och vårt engagemang för kvalitet. Vårt team av erfarna hantverkare överträffar förväntningarna i varje projekt.",
    primaryCta: "Ring oss",
    secondaryCta: "Begär offert",
  },
  home: {
    services: {
      title: "Våra tjänster",
      description:
        "Vi erbjuder ett brett utbud av bygg- och snickeritjänster av högsta kvalitet för att förverkliga ditt drömprojekt.",
      ctaText: "Visa alla tjänster",
    },
    areas: {
      title: "Här arbetar vi",
      description:
        "Vi är huvudsakligen verksamma i följande områden. Klicka på ett område för att läsa mer.",
    },
    aboutPreview: {
      title: "Kvalitet sedan 2018",
      description:
        "SDS Bygg & Snickeri AB är ett etablerat byggbolag i Stockholm som varit aktiva sedan 2018. Vårt team av erfarna hantverkare strävar efter att överträffa kundernas förväntningar genom att leverera högkvalitativa resultat inom varje projekt vi åtar oss.",
      ctaText: "Läs mer om oss",
      visualLabel: "SDS Bygg & Snickeri AB",
    },
    faq: {
      title: "Vanliga frågor",
      description:
        "Här har vi samlat svar på de vanligaste frågorna vi får från våra kunder.",
      items: [
        {
          question: "Hur lång tid tar en badrumsrenovering?",
          answer:
            "En standard badrumsrenovering tar normalt mellan 3-5 veckor beroende på omfattning, materialval och nuvarande skick.",
        },
        {
          question: "Erbjuder ni totalentreprenad?",
          answer:
            "Ja, vi erbjuder totalentreprenad vilket betyder att vi sköter all samordning med rörmokare, elektriker och andra yrkesgrupper så du bara har en kontaktperson.",
        },
        {
          question: "Gäller ROT-avdraget för era tjänster?",
          answer:
            "Självklart. Vi hjälper dig att dra av 30% av arbetskostnaden direkt på fakturan (förutsatt att du uppfyller Skatteverkets krav).",
        },
      ] as FAQItem[],
    },
    cta: {
      title: "Redo att starta ditt projekt?",
      description:
        "Kontakta oss idag för en kostnadsfri konsultation och offert. Vi lyssnar på dina behov och skräddarsyr en lösning som passar just dig och din fastighet.",
      directCallLabel: "Ring direkt",
    },
  },
  pages: {
    about: {
      metaDescription:
        "Läs mer om SDS Bygg & Snickeri AB och hur vi arbetar med kvalitet, transparens och trygg leverans.",
      badge: "Vilka vi är",
      titlePrefix: "Ett passionerat team av",
      titleHighlight: "hantverkare",
      paragraphs: [
        "SDS Bygg & Snickeri AB är ett etablerat byggbolag i Stockholm som varit aktiva sedan 2018. Vi är stolta över vår pålitlighet och vårt engagemang för kvalitet.",
        "Sedan starten 2018 har vi växt organiskt genom rekommendationer från nöjda kunder. Detta är vårt kvitto på att vår arbetsmodell fungerar: att alltid sätta kunden först, arbeta transparent, och aldrig gena i hörnen.",
        "Vårt expertområde spänner över allt från platsbyggda snickerier till storskaliga totalrenoveringar. Genom att ha ett nätverk av handplockade underentreprenörer kan vi ta fullt ansvar för hela processen - så du slipper agera projektledare för din egen renovering.",
      ],
    },
    services: {
      metaDescription:
        "Upptäck vårt breda utbud av bygg- och snickeritjänster i Stockholm.",
      badge: "Vårt utbud",
      title: "Tjänster för alla behov",
      intro:
        "Vi erbjuder ett komplett utbud av bygg- och snickeritjänster. Våra hantverkare är experter inom sina respektive områden och arbetar alltid med högsta precision och noggrannhet.",
    },
    areas: {
      metaDescription:
        "Se alla områden där SDS Bygg & Snickeri AB är verksamma i Stockholm.",
      badge: "Var vi arbetar",
      titlePrefix: "Aktiva i hela",
      titleHighlight: "Storstockholm",
      intro:
        "Även om vår bas är i Nacka och Saltsjö-Boo utför vi projekt över hela Storstockholm. Här nedanför ser du några av våra primära arbetsområden.",
      popularServicesPrefix: "Populära tjänster i",
    },
    contact: {
      metaDescription:
        "Kontakta SDS Bygg & Snickeri AB för ditt nästa byggprojekt i Stockholm.",
      badge: "Hör av dig",
      titlePrefix: "Vi bygger din",
      titleHighlight: "vision",
      intro:
        "Oavsett om du har en färdig plan eller bara en dröm, hjälper vi dig vidare. Fyll i formuläret så återkommer vi med en kostnadsfri offert.",
      phoneTitle: "Ring oss",
      emailTitle: "E-post",
      locationTitle: "Plats",
    },
  },
  trustIndicators: {
    title: "Varför välja SDS Bygg?",
    description:
      "Vi bygger långsiktiga relationer genom genuint hantverk och total transparens från start till mål.",
    items: [
      {
        icon: "shield",
        title: "Kvalitet sedan 2018",
        description:
          "Din pålitliga partner för bygg och snickeri i hela Storstockholm.",
      },
      {
        icon: "users",
        title: "Erfarna hantverkare",
        description:
          "Vårt handplockade team har decennier av samlad branscherfarenhet.",
      },
      {
        icon: "check",
        title: "Kompromisslös kvalitet",
        description:
          "Vi lämnar ingenting åt slumpen. Varje detalj synas noggrant.",
      },
      {
        icon: "wrench",
        title: "100% Nöjd kund-garanti",
        description:
          "Vårt absolut största fokus är att överträffa dina förväntningar.",
      },
    ] as TrustIndicator[],
  },
  testimonials: {
    title: "Vad våra kunder säger",
    description: "Vi låter resultatet och våra nöjda kunder tala för sig själva.",
    reviews: [
      {
        name: "Anna S.",
        location: "Saltsjö-Boo",
        text: "Vi är fantastiskt nöjda med vår köksrenovering! Teamet var professionella från första mötet till sista touchen.",
        rating: 5,
      },
      {
        name: "Lars o Maria",
        location: "Nacka",
        text: "Otroligt bra resultat på inredningsrenoveringen av vår villa. De höll tidplanen och budgeten perfekt.",
        rating: 5,
      },
      {
        name: "Johan T.",
        location: "Stockholm",
        text: "Högsta kvalitet och väldigt trevliga hantverkare. Rekommenderar starkt SDS Bygg för alla typer av snickeriarbeten.",
        rating: 5,
      },
    ] as Testimonial[],
  },
  forms: {
    areaFallbackOption: "Annat i Stockholm",
  },
  programmatic: {
    landing: {
      localCoverageText: "Nej, vi är aktiva över hela {primaryArea}.",
      perks: [
        "Kvalitetsgaranti på utfört arbete",
        "Lokal expertis",
        "ROT-avdrag smidigt på fakturan",
      ],
    },
    servicePage: {
      processTitle: "Så fungerar det",
      processDescription:
        "Från idé till färdigt projekt - vår process är utformad för att ge dig trygghet genom hela renoveringen.",
      processSteps: [
        {
          title: "Kontakt",
          description:
            "Vi bokar ett första förutsättningslöst möte där vi lyssnar på dina idéer och behov.",
        },
        {
          title: "Planering",
          description:
            "Tillsammans tar vi fram en detaljerad plan, ritningar (vid behov) och en transparent offert.",
        },
        {
          title: "Genomförande",
          description:
            "Våra skickliga hantverkare påbörjar arbetet med fokus på precision, kvalitet och städning.",
        },
        {
          title: "Färdigt projekt",
          description:
            "Noggrann slutbesiktning tillsammans med dig innan vi lämnar över ditt förverkligade drömprojekt.",
        },
      ] as ProcessStep[],
      whyChooseTitle: "Varför välja oss?",
      areasTitlePrefix: "Vi utför",
    },
  },
};

export type SiteConfig = typeof siteConfig;
