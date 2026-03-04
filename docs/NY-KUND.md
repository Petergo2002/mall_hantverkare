# Ny Kund - Byt Endast Befintligt Content

Använd denna guide när du vill byta kundinnehåll utan att ändra struktur.

## Viktig regel

Denna guide är endast för content-replacement.

- Byt texter, metadata, kontaktinfo och SEO-fält.
- Behåll samma struktur/keys i `siteConfig`.
- Lägg inte till nya sektioner, nya keys, fler tjänster eller fler områden här.

Om du vill lägga till nya tjänster/områden: använd `docs/UTOKA-TJANSTER-OMRADEN.md`.

## Snabbflöde

1. Klona repot.
2. Fyll i briefen nedan.
3. Ge briefen till AI och be den uppdatera `src/config/siteConfig.ts`.
4. Kör:

```bash
npm install
npm run lint
npm run build
npm start
```

## Kundbrief (endast ersätt befintligt innehåll)

- Företagsnamn:
- Kort varumärkesnamn (logo i navbar):
- Bransch:
- Primär region:
- Telefon:
- E-post:
- Adress:
- Öppettider:
- Organisationsnummer:
- Webbplats-URL:
- Startår:

- 1-2 meningar om företaget:
- Kort slogan:
- Trust points (ersätt befintliga):
- Kundomdömen (ersätt befintliga):
- FAQ för startsidan (ersätt befintliga):

## SEO-brief (måste fyllas i)

- Default title suffix:
- Meta description för:
- Startsida
- Om oss
- Tjänster
- Områden
- Kontakt
- Primär lokal nyckelfras:
- Slugs (behåll antal, men uppdatera värden vid behov)
- Schema-data:
- `addressLocality`
- `streetAddress`
- `postalCode`
- `addressCountry`
- `geo.latitude`
- `geo.longitude`

## AI-prompt (kopiera/klistra in)

```text
Uppdatera endast filen src/config/siteConfig.ts utifrån kundbriefen nedan.

Krav:
1) Behåll samma struktur/keys i siteConfig.
2) Uppdatera endast befintligt innehåll (copy/metadata/SEO/kontakt/schema).
3) Behåll samma antal tjänster och områden (ingen add/remove av listobjekt).
4) Skapa SEO-vänliga slugs (små bokstäver, bindestreck, utan å/ä/ö).
5) Lägg inte till nya keys, sektioner eller komponenter.
6) Svara med ändrad kod (ingen extra förklaring).
7) Ändra inga andra filer.

Kundbrief:
[KLISTRA IN DIN IFYLLDA BRIEF HÄR]
```

## Pre-deploy checklista

- `siteConfig.url` är kundens riktiga domän.
- `defaultTitleSuffix` är uppdaterad.
- Alla `pages.*.metaDescription` är uppdaterade.
- Schema (`address`, `geo`, telefon) matchar kundens riktiga data.
- Inga placeholders kvar (`XXXXXX`, tom adress, tom geo).
