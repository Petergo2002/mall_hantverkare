# Ny Kund - Enkel Arbetsmall

Använd denna när du klonar mallen för en ny kund.

## Snabbflöde

1. Klona repot.
2. Fyll i kundbriefen nedan.
3. Ge briefen till AI och be den uppdatera `src/config/siteConfig.ts`.
4. Kör:

```bash
npm install
npm run build
npm start
```

## Kundbrief (fyll i)

- Företagsnamn:
- Kort varumärkesnamn (logo i navbar):
- Bransch (ex. elektriker, VVS, städ):
- Primär region (ex. Göteborg, Stor-Göteborg):
- Telefon:
- E-post:
- Adress:
- Öppettider:
- Organisationsnummer:
- Webbplats-URL:
- Startår:

- 1-2 meningar om företaget:
- Kort slogan:

- Tjänster (titel, slug, beskrivning, ikon):
- Områden (name + slug):

- 3-4 trust points:
- 3 kundomdömen:
- 3 FAQs för startsidan:

## Rekommenderade ikonvärden för tjänster

Ange `icon` på varje tjänst med något av dessa:

- `kitchen`
- `interior`
- `electric`
- `electrical`
- `plumbing`
- `bathroom`
- `painting`
- `installation`
- `repair`

## AI-prompt (kopiera/klistra in)

```text
Uppdatera endast filen src/config/siteConfig.ts utifrån kundbriefen nedan.

Krav:
1) Behåll samma struktur/keys i siteConfig.
2) Uppdatera all kundspecifik text (hem, om oss, kontakt, områden, testimonials, trust, schema, tjänster, områden).
3) Skapa SEO-vänliga slugs (små bokstäver, bindestreck, utan å/ä/ö).
4) Svara med ändrad kod (ingen extra förklaring).
5) Ändra inga andra filer.

Kundbrief:
[KLISTRA IN DIN IFYLLDA BRIEF HÄR]
```

## Viktigt

- Mallen är byggd för att normalt kunna byta kund via `siteConfig`.
- Om du vill ha annan layout/design för en specifik kund, gör det i separata PR:er efter att kunddata är uppdaterad.
