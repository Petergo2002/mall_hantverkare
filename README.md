# Programmatic SEO Service Business Template

Detta är en Next.js (App Router) och Tailwind CSS-mall designad för tjänsteföretag (ex. Bygg, Städ, VVS) med extremt fokus på **Hög Konvertering**, **Lokal SEO**, och **Programmatic SEO Skalbarhet**.

Designen är premium, minimalistisk (Apple-style), med mycket whitespace, stark typografi och tydliga Call-to-Actions.

---

## 🚀 Strategin: Programmatic SEO

Det primära syftet med denna mall är att låta dig snabbt lansera en konverteringsoptimerad landningssida för en ny kund, och sedan **programmatiskt** och automatiskt generera hundratals lokala landningssidor för att driva in "long-tail" sökordstrafik.

Mallen kombinerar varje Tjänst (ex. `Kök`, `Badrum`) med alla Områden (ex. `Stockholm`, `Solna`) och genererar unika sidor (`/tjanster/kok/stockholm`, `/tjanster/kok/solna`, etc.).

Systemet injicerar automatiskt:
- Målanpassade H1, titlar och metabeskrivningar för varje unik kombination av tjänst och område.
- Lokalanpassade FAQ-frågor för starkare kontext i området.
- `LocalBusiness`, `Service` och `FAQPage` Schema.org JSON-LD-markup på alla relevanta sidor.
- Dynamiska länkar till sitemap.xml.

---

## 🛠 Setup & Konfigurering (För en ny kund)

När du använder denna mall för en ny kund behöver du i princip bara modifiera **en** enda fil: `src/config/siteConfig.ts`.

För snabb onboarding av en ny kund, använd guiden i `docs/NY-KUND.md`.

### 1. Uppdatera Företagsinformation
Öppna `src/config/siteConfig.ts` och ändra företagets namn, kontaktuppgifter, beskrivning och logik för sitens generella utseende.

```typescript
export const siteConfig = {
  name: "Kundens Företagsnamn AB",
  description: "Professionella tjänster...",
  contact: {
    phone: "070-123 45 67",
    email: "info@kund.se",
    address: "Stockholm, Sverige",
  },
  // ...
};
```

### 2. Definiera Tjänster
I `services`-arrayen i samma fil, lägger du till alla de olika tjänster kunden utför:

```typescript
{
  title: "Köksrenovering",
  slug: "koksrenovering",
  description: "Förverkliga ditt drömkök med våra erfarna hantverkare.",
  icon: "kitchen"
}
```

### 3. Definiera Arbetsområden
I `areas`-arrayen radar du därefter upp de specifika orter, städer eller kommuner kunden accepterar jobb inom:

```typescript
{
  name: "Nacka",
  slug: "nacka"
}
```

### 4. Bygg (SSG - Static Site Generation)
När du publicerar (eller kör `npm run build`), kommer Next.js att loopa genom **alla tjänster** *gånger* **alla områden** och förgenerera statiska, blixtsnabba och indexerbara HTML-sidor. 

För varje nytt område du lägger till i konfigurationen, skapas automatiskt nya målsidor för varje tjänst i arrayen. 

```bash
npm install
npm run build
npm start
```

---

## 🎨 Design-systemet

Mallen är konfigurerad i `tailwind.config.ts` med globala CSS-variabler i `globals.css`. 

Byggd på de senaste standarderna med färgkonsekvens från `hsl()` värden. Vill du tona designen för en specifik kund uppdaterar du bara primary och secondary färgvariablerna i `globals.css`. Layout-filerna är redan optimerade för mobil-stöd med "sticky" call-to-action-knappar på telefonen.

### Innehållsstruktur (Komponenter inkluderade)
- Hero (Startsida)
- Trust Indicators (Förtroendebyggare som omdömen & etableringsår)
- Service Cards
- FAQ (Accordion format)
- Contact Form
- Testimonials
- Programmatic Layout (dynamisk textstruktur för lokala områdessidor)

Mycket nöje med mallen! Det här är grunden till ett oerhört kraftfullt SEO-maskineri.
