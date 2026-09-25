# Website Stichting Matumaini

Statische website van Stichting Matumaini kwa Turkana (www.matumaini.nl), gehost via GitHub Pages.
Geen build-stap, geen frameworks: alleen HTML, CSS en een klein beetje JavaScript voor het mobiele menu.

## Structuur

```
index.html                  Home
projecten/index.html        Projectoverzicht (incl. studenten, Kranen voor Kenianen, activiteiten NL)
projecten/project-naaimachine/
projecten/project-maiszaad/
projecten/outreach-kenia/   Outreach 2022 + vervolg 2024
over-ons/  anbi/  doneren/  contact/
404.html                    Foutpagina (GitHub Pages gebruikt deze automatisch)
css/stijl.css               Alle opmaak; kleuren staan bovenin als variabelen
js/menu.js                  Mobiel menu + jaartal in de voettekst
images/                     Foto's en logo's
documenten/                 Jaarverslagen (PDF)
sitemap.xml, robots.txt     Voor zoekmachines
.nojekyll                   Zegt GitHub Pages dat er niets gebouwd hoeft te worden
```

De mappen `home/`, `projecten/overzicht/` en `projecten/outreach-kenia-2022/` bevatten alleen een
doorstuurpagina, zodat oude links van de Google Sites-versie blijven werken.

## Publiceren op GitHub Pages (eenmalig)

1. Maak op github.com een nieuwe repository, bijvoorbeeld `matumaini-website` (publiek).
2. Zet de inhoud van deze map in de repository en push naar de branch `main`:

   ```bash
   git init
   git add .
   git commit -m "Nieuwe website Stichting Matumaini"
   git branch -M main
   git remote add origin https://github.com/<gebruikersnaam>/matumaini-website.git
   git push -u origin main
   ```

3. Ga in de repository naar **Settings → Pages**. Kies bij *Build and deployment* voor
   *Source: Deploy from a branch*, branch `main`, map `/ (root)`. Sla op.
4. Na een minuut staat de site op `https://<gebruikersnaam>.github.io/matumaini-website/`.

## Eigen domein matumaini.nl koppelen

1. Maak in de hoofdmap een bestand `CNAME` met als enige inhoud `www.matumaini.nl` en push dat.
   (Of vul het domein in bij Settings → Pages → Custom domain; GitHub maakt het bestand dan zelf.)
2. Pas bij de beheerder van het domein (waar matumaini.nl geregistreerd is) de DNS aan:
   - `www` → CNAME-record naar `<gebruikersnaam>.github.io`
   - `@` (kale domein) → vier A-records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Verwijder de oude records die naar Google Sites wijzen (`ghs.googlehosted.com`).
3. Wacht tot de DNS is doorgevoerd (meestal binnen een uur, soms een dag) en vink dan bij
   Settings → Pages **Enforce HTTPS** aan.
4. Zet daarna in Google Sites de koppeling met het domein uit.

## Onderhoud

- **Tekst wijzigen**: open de betreffende `index.html`, pas de tekst aan, commit en push. GitHub Pages
  publiceert binnen een minuut.
- **Nieuw jaarverslag**: zet de PDF in `documenten/` en voeg een regel toe in de lijst op `anbi/index.html`.
- **Foto toevoegen**: zet het bestand in `images/` (bij voorkeur maximaal ca. 1600 px breed) en verwijs ernaar
  met een relatief pad, zoals de bestaande pagina's doen (`../images/...` of `../../images/...`).
- **Nieuw project**: kopieer een projectmap, bijvoorbeeld `projecten/project-maiszaad/`, pas de inhoud aan
  en voeg een kaart toe op `projecten/index.html` en eventueel op `index.html`.
- **Betaal-QR**: `images/betaal-qr.svg` is een standaard EPC/SEPA-QR met IBAN en tenaamstelling
  en zonder bedrag. Alleen opnieuw maken als het rekeningnummer verandert.

De site plaatst geen cookies en gebruikt geen tracking. Alleen het lettertype (Nunito) komt van Google Fonts;
wilt u ook dat niet, verwijder dan de twee `fonts.googleapis.com`-regels uit de `<head>` van elke pagina.
