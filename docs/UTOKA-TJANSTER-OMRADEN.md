# Utoka Tjanster Och Omraden

Anvand denna guide nar du vill utoka mallen med fler tjanster och/eller fler omraden.

Detta ar ett separat flode fran `NY-KUND.md`.

## Nar ska du anvanda denna?

- Nar kunden erbjuder fler tjanster an de som redan finns.
- Nar kunden jobbar i fler orter/omraden an de som redan finns.

## Regler

- Andra endast `src/config/siteConfig.ts`.
- Behall befintlig struktur/keys.
- Du far lagga till nya objekt i `services` och `areas`.
- Hall slugs SEO-vanliga: sma bokstaver, bindestreck, inga a/ao/o med prickar.
- Undvik dubletter i slugs.

## Rekommenderade ikonvarden

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
Uppdatera endast filen src/config/siteConfig.ts enligt instruktionen nedan.

Mal:
- Lagg till nya tjanster och/eller omraden i arraysen services och areas.
- Behall befintliga keys och struktur i hela siteConfig.

Krav:
1) Lagga till (inte ersatta) nya objekt i services/areas.
2) Nya slugs ska vara unika och SEO-vanliga (små bokstäver, bindestreck, utan å/ä/ö).
3) Uppdatera relevanta SEO-texter om det behovs (t.ex. defaultTitleSuffix och pages.*.metaDescription).
4) Andra inga andra filer.
5) Svara med enbart uppdaterad kod.

Data att lagga till:
- Nya tjanster:
[LISTA]
- Nya omraden:
[LISTA]
```

## Kontroll innan deploy

- Alla nya slugs ar unika.
- Stavning i titles och ortnamn ar korrekt.
- `npm run lint` passerar.
- `npm run build` passerar.
