# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->
als je op de pagina terecht komt zie je aan de linker kan van de pagina een searchbar met tekst dat de gebruiker aanleid om te zoeken naar cadeautjes.
aan de rechterkant is er een container waardoor gescrolled kan worden, de rest van de pagina blijft scrolled niet mee.
als er op een cadeau geklikt wordt dan kom je op de details pagina terecht.
elk cadeau in deze container heeft een bookmark icon. als hierop gekjlikt wordt dan wordt het toegevoegd aan jou lijst.

op elke pagina is er in de header een button om naar jou bookmark lijst te gaan. als je hierop klikt kom je eerst op een overzicht pagina waar je al jou lijsten kan zien. als je op een van de lijsten klikt zie je alle bookmarked cadeautjes in die lijst. als je weer op het bnookmark icon klikt dan gaat het cadeau uit je lijst.
en als je op de titel klikt beland je op de details pagina

Op de details pagina staat een beschrijving van het cadeau. een paar plekken waar het cadeau gekocht kan worden.
en daar onder meer cadeau recomendaties.

de live site op render, het kan evben duren voor de website om in te laden.
[Milledoni.nl](https://the-web-is-for-everyone-interactive-7ked.onrender.com)

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
De website is bedoelt voor iemand die naar een cadeau zoekt maar niet weet wat hij als cadeeau kan geven. op de milledoni website kan hij door cadeazutjes scrollen beschrijving lezen. en als hij het wilt opslaan voor later dan kan hij het in zijn bookmark lijst plaatsen.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->
### Responsive


### CSS
### Styleguide
De huisstijl is gebaseerd op dit [figma design](https://www.figma.com/design/4NBbUuyXIrZ7VFHaDAHJLs/milledoni-design?node-id=6-23251&t=GgUuJZRB3GWeNTFB-1)

De font sizes voor titels zijn responsive gemaakt met clamp, zodat ze niet te groot lijken op kleine schermen
voorbeeld van fontsizes met clamp:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/milledoni.css#L32-L37

Naamgeving van custom properties: Het eerste woord (en soms ook het tweede) geeft aan waarvoor de custom property bedoeld is, en het laatste woord geeft aan wat er wordt veranderd.

Bijvoorbeeld, 'background-primary': het eerste woord geeft aan dat het voor de achtergrond bedoeld is, en het tweede woord geeft aan dat het de primaire kleur is.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/milledoni.css#L13

In dit voorbeeld gebruik ik twee woorden om aan te geven voor welk element de custom property bedoeld is, en daarna wat het veranderd.
voorbeeld
--font-weight-regular
font-weight geeft aan dat het met de fonts te maken heeft, en regular geeft aan dat het de standaard font weight is.
voor de font weight benaming heb ik aangehouden hoe het in de font .ttf file heeft
hier zijn de font-weight cuistom properties in css stylesheet
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/milledoni.css#L39-L44

### Styles.css
in de liquid files, apart van de partials, hebben allemaal hun eigen main. deze wordt genoemd index-main, details-main enz.
in CSS worden alle styles genest per pagina
<img src="URL_VAN_DE_AFBEELDING" alt="css-main-nest" style="width: 50%;">

verder zijn alle html blokken in css ook genest. bijvoorbeeld een article met meerdere elementen ndaarin.
In HTml geef ik het een class, in css worden alle elementen daarin genest, met de zelfde volgorde.
voorbeeld article:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/views/details.liquid#L40-L46
bijbehorende CSS:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/style.css#L405-L433


### HTML
in HTML zijn hebben de blok elementen een lege regel erboven en eronder, zoals articles
inline elementen zijn op 1 regel, zoals svg, anchor-tags.
er zijn soms uitzonderingen zoals een achortag met een svg en tekst, de svg en de tekst krijgen beide hun eigen regel, zodat we alle elementen binnen de anchor tag kunnen zien.

### Liquid partials
De stukken HTML-code die vaker herhaald worden op de website, zijn in een eigen Liquid file geplaatst. Dit is gedaan zodat ze met Liquid op de juiste plek ingeladen kunnen worden.
Als er een aanpassing in de HTML nodig is, hoeft dit maar op één plek te gebeuren.

#### Cadeau
deze article voor de cadeautjes wordt gebruikt op de index pagina, de detaisl pagina en op de bookmark lijst pagina.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/views/partials/article-gift.liquid#L1-L15
Cadeau index pagina:
<img src="URL_VAN_DE_AFBEELDING" alt="dry-article-1" style="width: 50%;">
Cadeau details pagina:
<img src="URL_VAN_DE_AFBEELDING" alt="dry-article-2" style="width: 50%;">
Cadeau bookmarks pagina:
<img src="URL_VAN_DE_AFBEELDING" alt="dry-article-3" style="width: 50%;">

#### Cadeau container
De container onderaan op de details pagina is hetzelfde als op de index pagina, met een paar kleine verschillen. De code voor de container is in css op een plek geplaats waar het op beide paginas zal werken. voor kleine aanpassingen per pagina, zoals margins, zijn genest zodat ze elkaar niet beinvloeden
dit is de css voor de contrainer:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/style.css#L593-L655

Hier wordt op de details pagina andere margins aangegeven
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/style.css#L481-L487

container index pagina:
<img src="URL_VAN_DE_AFBEELDING" alt="dry-container-1" style="width: 50%;">
container details pagina:
<img src="URL_VAN_DE_AFBEELDING" alt="dry-article-2" style="width: 50%;">


### JavaScript

### Routes

### UI states


## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
- Download de nieuwste versie van Node.js (https://nodejs.org/en) op je laptop of computer.
- Fork deze repository en clone deze naar je laptop.
- Open de repository in GitHub.
- Open de terminal in VS Code en voer het volgende command uit:
    - 'npm install'
- Zodra de installatie klaar is, voer je het volgende commando uit om de website op localhost te starten:
    - 'npm start'
- Als alles goed is gegaan, krijg je in de terminal een link naar de juiste localhost. Klik hierop om de website in de browser te openen.
- Om de website te stoppen, voer je in de VS Code terminal het volgende command uit:
    - 'Ctrl + C'

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
