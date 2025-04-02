# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)

  * [Gebruik](#gebruik)

  * [Kenmerken](#kenmerken)
      * [Responsive](#Responsive)<br/>
          * [index pagina](#index-pagina)<br/>
          * [details pagina](#details-pagina)<br/>
          * [bookmarks overzicht pagina](#bookmarks-overzicht-pagina)<br/>
          * [bookmarkslijst pagina](#bookmarkslijst-pagina)<br/>
      * [CSS](#CSS)<br/>
          * [Styleguide](#Styleguide)<br/>
          * [Styles.css](#Styles.css)<br/>
      * [HTML](#HTML)<br/>
          * [Liquid partials](#Liquid-partials)<br/>
              * [Cadeau](#Cadeau)<br/>
              * [Cadeau container](#Cadeau-container)<br/>
      * [JavaScript](#JavaScript)<br/>
          * [Loader](#Loader)<br/>
          * [back button](#back-button)<br/>
          * [client side fetch](#client-side-fetch)<br/>
      * [Routes](#Routes)<br/>
          * [cadeau opslaan in bookmarks list](#cadeau-opslaan-in-bookmarks-list)<br/>
          * [link naar de details pagina](#link-naar-de-details-pagina)<br/>
          * [bookmark list pagina](#bookmark-list-pagina)<br/>
          * [error 404](#error-404)<br/>
          * [mobile testing](#mobile-testing)<br/>
      * [UI states](#UI-states)<br/>
          * [success state](#success-state)<br/>
          * [empty state](#empty-state)<br/>
          * [loading state](#loading-state)<br/>

  * [Installatie](#installatie)

  * [Bronnen](#bronnen)

  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->
Wanneer je op de pagina komt, zie je aan de linkerkant een search bar met tekst die de gebruiker uitnodigd om cadeautjes te zoeken.
Aan de rechterkant bevindt zich een scrollbare container, de rest van de pagina beweegt niet mee.
Wanneer je op een cadeau klikt, word je doorgestuurd naar de detailpagina.
Elk cadeau heeft een bookmark icoon. Als je hierop klikt, wordt het toegevoegd aan jouw lijst.

Op elke pagina bevindt zich in de header een button om naar jouw bookmarklijst te gaan.
Wanneer je hierop klikt, kom je eerst op een overzichtspagina waar je al jouw lijsten kunt bekijken.
Als je op een van de lijsten klikt, zie je alle opgeslagen cadeautjes in die lijst.
Klik je opnieuw op het bookmark icoon, dan wordt het cadeau uit je lijst verwijderd.
Wanneer je op de titel klikt, word je naar de detailpagina geleid.

Op de detailpagina staat een beschrijving van het cadeau, samen met winkels waar het cadeau gekocht kan worden.
Daaronder vind je meer cadeau recommendaties.

De live site staat op Render. Het kan even duren voordat de website is geladen.
[Milledoni.nl](https://the-web-is-for-everyone-interactive-7ked.onrender.com)

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
De website is bedoeld voor iemand die een cadeau zoekt maar niet weet wat hij moet geven.
Op de Milledoni website kan hij door cadeautjes scrollen, beschrijvingen lezen en, als hij iets wil opslaan voor later, het in zijn bookmarklijst kan plaatsen.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->
### Responsive
#### index pagina
Voor het grootste deel van de responsiveheid op de indexpagina heb ik een grid gebruikt om automatisch een nieuwe kolom te maken zodra er voldoende ruimte is. Hiervoor heb ik in mijn grid-template-columns de functie repeat met auto-fit gebruikt om de kolommen te herhalen. Daarbij heb ik ook minmax toegepast om de minimale breedte te bepalen voordat er een nieuwe kolom wordt toegevoegd.
Dit heb ik gedaan om minder met mediaqueries te werken en om te veel witruimte op grote schermen te voorkomen, doordat er automatisch een nieuwe kolom wordt toegevoegd.

De index pagina is responsive vanaf 320 pixels.<br/>
<img src="/bewijslast/resp-index-320px.png" alt="resp-index-320px" style="width: 50%;"><br/>
Het eerste breakpoint is op 700px.<br/>
<img src="/bewijslast/resp-index-700px.png" alt="resp-index-700px" style="width: 50%;"><br/>
Bij 800px wordt er een extra kolom toegevoegd.<br/>
<img src="/bewijslast/resp-index-880px.png" alt="resp-index-880px" style="width: 50%;"><br/>
Bij 1100px begint de eerste laptop versie.<br/>
<img src="/bewijslast/resp-index-1100px.png" alt="resp-index-1100px" style="width: 50%;"><br/>
Voor schermen breder dan 1100px wordt er een extra kolom toegevoegd zodra er genoeg ruimte voor is.<br/>
<img src="/bewijslast/resp-index-normaal.png" alt="resp-index-normaal" style="width: 50%;"><br/>
 

#### details pagina
De details pagina is responsive vanaf 320 pixels.<br/>
<img src="/bewijslast/resp-details-320px.png" alt="resp-details-320px" style="width: 50%;"><br/>
Als het scherm breder is, neemt de tekst meer ruimte in beslag.<br/>
<img src="/bewijslast/resp-details-530px.png" alt="resp-details-530px" style="width: 50%;"><br/>
<img src="/bewijslast/resp-details-700px.png" alt="resp-details-700px" style="width: 50%;"><br/>
Dit is de tabletversie.<br/>
<img src="/bewijslast/resp-details-820px.png" alt="resp-details-820px" style="width: 50%;"><br/>
De laptopversie is nog niet af, dit is voorlopig de laptop versie.<br/>
<img src="/bewijslast/resp-details-normaal.png" alt="resp-details-normaal" style="width: 50%;"><br/>


#### bookmarks overzicht pagina
Deze pagina is nog niet responsive, dit is de één-kolomsversie.<br/>
<img src="/bewijslast/resp-bk-overzicht.png" alt="resp-bk-overzicht" style="width: 50%;">


#### bookmarkslijst pagina
De bookmarkslijst pagina is ook responsive vanaf 320 pixels.<br/>
<img src="/bewijslast/resp-bk-lijst-320px.png" alt="resp-bk-lijst-320px" style="width: 50%;"><br/>
Deze pagina gebruikt hetzelfde grid als de indexpagina. Zodra er genoeg ruimte is, wordt er een extra kolom toegevoegd.<br/>
<img src="/bewijslast/resp-bk-lijst-normaal.png" alt="resp-bk-lijst-normaal" style="width: 50%;"><br/>


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
In de Liquid-bestanden hebben de partials en elke pagina hun eigen CSS, die genest is. De main van de pagina's wordt genoemd naar de pagina naam, gevolgd door -main. Voor de partials gebruiken ze de class van de container.<br/>
<img src="/bewijslast/css-main-nest.png" alt="css-main-nest" style="width: 50%;"><br/>
<img src="/bewijslast/css-partials-nest.png" alt="css-partials-nest" style="width: 50%;">

Verder zijn alle HTML blokken in CSS ook genest. Bijvoorbeeld een article met meerdere elementen daarin.
In HTML geef ik het een class, en in CSS worden alle elementen binnen die class op dezelfde volgorde genest.
Voorbeeld van een article:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/views/details.liquid#L40-L46
Bijbehorende CSS:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/style.css#L405-L433


### HTML
In HTML hebben blok elementen, zoals article, een lege regel erboven en eronder.
Inline elementen, zoals svg en anchor tag, staan op één regel.

Er zijn soms uitzonderingen, zoals een anchor tag met een svg en tekst erin. In dat geval krijgen zowel de svg als de tekst hun eigen regel, zodat alle elementen binnen de anchor tag zichtbaar blijven.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/afb3224aaba5e9caf5f866d23883bb46761f9c2a/views/bk-overzicht.liquid#L26-L29


### Liquid partials
De herhalende stukken HTML code op de website zijn in een aparte Liquid file geplaatst.
Hierdoor kunnen ze met Liquid op de juiste plek worden ingeladen.
Als er een aanpassing in de HTML nodig is, hoeft dit maar op één plek te gebeuren.


#### Cadeau
Dit article voor de cadeautjes wordt gebruikt op de index pagina, de detail pagina en de bookmarklijst pagina.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/views/partials/article-gift.liquid#L1-L15
Cadeau index pagina:<br/>
<img src="/bewijslast/dry-article-1.png" alt="dry-article-1" style="width: 50%;"><br/>
Cadeau details pagina:<br/>
<img src="/bewijslast/dry-article-2.png" alt="dry-article-2" style="width: 50%;"><br/>
Cadeau bookmarks pagina:<br/>
<img src="/bewijslast/dry-article-3.png" alt="dry-article-3" style="width: 50%;">

#### Cadeau container
De container onderaan de detail pagina is hetzelfde als op de index pagina, met een paar kleine verschillen.
De code voor de container is in CSS op een centrale plek geplaatst, zodat deze op beide pagina's werkt. Voor kleine aanpassingen per pagina, zoals margins, zijn deze genest, zodat ze elkaar niet beïnvloeden.
Dit is de CSS voor de container:
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/style.css#L593-L655
Hier wordt op de details pagina andere margins aangegeven
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/6194b9008a6d94ef3d597c84fd3230f33fcee42a/public/styles/style.css#L481-L487
container index pagina:<br/>
<img src="/bewijslast/dry-container-1.png" alt="dry-container-1" style="width: 50%;"><br/>
container details pagina:<br/>
<img src="/bewijslast/dry-article-2.png" alt="dry-article-2" style="width: 50%;">


### JavaScript
#### Loader
Als er op een link wordt geklikt, verschijnt er een loading bar (cirkel) op het scherm.
Dit werkt door een event listener toe te voegen aan alle anchor-tags. Wanneer er op een link wordt geklikt, verschijnt de laadbalk.
Als de terugknop wordt ingedrukt, wordt de laadbalk weer verborgen door een event listener op pageshow te gebruiken.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/public/main.js#L1-L27

#### back button
Op de detailpagina is er een terugknop.
Omdat je zowel via de index pagina als via de bookmarklijst pagina naar de detail pagina kunt gaan, kon ik geen "href" gebruiken om naar de vorige pagina terug te gaan.
Daarom heb ik met JavaScript de functie window.history.back(); gebruikt, zodat je naar de vorige pagina wordt geleid wanneer er op de knop wordt geklikt.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/public/main.js#L30-L43

#### client side fetch


### Routes
#### cadeau opslaan in bookmarks list
Op de index pagina heeft elk cadeau een POST methode gekoppeld aan het bookmark icoon.
Wanneer dit icoon wordt geklikt, wordt het cadeau toegevoegd aan de bookmarklijst in de database.
Dit gebeurt door de ID van het cadeau mee te geven.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/views/partials/article-gift.liquid#L4
In server.js wordt de id opgehaald met request.params.id. Deze id gebruik ik vervolgens in een fetch URL.
De URL filtert specifiek naar dit cadeau in de bookmarklijst.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/server.js#L54-L60
Met een if statement wordt gecontroleerd of er iets staat in de JSON die door de URL wordt opgehaald.
Als data.length van de gefetchte JSON groter is dan 0, betekent dit dat het cadeau al in de bookmarklijst staat.
Het cadeau wordt dan met de DELETE methode uit de database verwijderd.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/server.js#L62-L73
Als de respons leeg is, betekent dit dat het cadeau nog niet in de bookmarklijst staat.
Nu kunnen we het toevoegen aan de bookmarklijst met een POST methode.
Dit doen we door de id van het cadeau op te slaan als milledoni_products_id en ook een user-id mee te geven, zodat het cadeau in de persoonlijke lijst van de gebruiker kan worden opgeslagen.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/server.js#L74-L91
Nadat dit is gedaan, wordt de gebruiker weer teruggebracht naar de indexpagina.


#### link naar de details pagina
Wanneer er op de titel van het cadeau wordt geklikt, kom je op de detailpagina van dat cadeau terecht.
Dit wordt gedaan door de slug mee te geven in de link.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/views/partials/article-gift.liquid#L13
In server.js wordt de slug opgehaald met request.params. Hiermee wordt een fetch URL gemaakt die filtert op het cadeau met deze slug.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/server.js#L97-L104
De data van het cadeau wordt daarna meegegeven naar de detail pagina.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/fcabff0ab49e02d71fb5e282755b43c2a3e9c503/server.js#L109
In de URL staat de slug van het cadeau, waardoor de gebruiker ook kan zien op welke pagina hij zich bevindt.


#### bookmark list pagina
Op de bookmarks overzichtpagina kun je een lijst openen. Dit wordt gedaan door de name van de lijst mee te geven.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/96d836ed5a0e91eb9bc55b7416a3b69aa07b008c/views/bk-overzicht.liquid#L10-L12
In server.js wordt de naam gebruikt om een fetch URL te maken die alle opgeslagen cadeautjes van die lijst ophaalt.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/96d836ed5a0e91eb9bc55b7416a3b69aa07b008c/server.js#L179-L182
Deze URL haalt alleen de id van het cadeau op, maar niet de rest van de data.
Omdat milledoni_products_id uit de vorige URL overeenkomt met de id in de JSON met alle cadeaugegevens, kunnen we een array maken met alle milledoni_products_id's
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/96d836ed5a0e91eb9bc55b7416a3b69aa07b008c/server.js#L184-L191
Nu kunnen we met deze id's een nieuwe fetch URL maken die de rest van de data ophaalt.
Directus heeft al een methode om een array mee te geven in een URL.
Dus hoeven wij alleen nog de filter te schrijven en de array op de juiste plek in de URL te plaatsen.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/96d836ed5a0e91eb9bc55b7416a3b69aa07b008c/server.js#L195
Deze data wordt meegegeven aan de bookmarklijst pagina om de cadeau artikelen in te laden.


#### error 404
Als er een URL is die niet bestaat, komt de gebruiker op een error 404 pagina terecht.
Als de response van de URL een 404 statuscode teruggeeft, betekent dit dat de pagina niet gevonden is.
In dat geval gebruiken we render('404.liquid') om de error pagina in te laden.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/96d836ed5a0e91eb9bc55b7416a3b69aa07b008c/server.js#L204-L207
Op deze pagina is er een link terug naar de hoofdpagina.<br/>
<img src="/bewijslast/error-404-pagina.png" alt="error-404-pagina" style="width: 50%;">


#### mobile testing
In de app.listen heb ik '0.0.0.0' toegevoegd. Dit zorgt ervoor dat de server luistert naar alle HTTP verzoeken op het netwerk.
https://github.com/vsheo/the-web-is-for-everyone-interactive-functionality/blob/96d836ed5a0e91eb9bc55b7416a3b69aa07b008c/server.js#L251
Je kunt deze localhost website op je telefoon testen met het volgende:
"het IP-adres van de computer":8000
8000 is het poortnummer dat je zelf meegeeft voor de localhost


### UI states
#### success state
Wanneer er op het bookmark-icoon wordt geklikt, wordt het cadeau toegevoegd aan de bookmarklijst.
Als dit succesvol is, wordt het bookmark icoon ingekleurd, zodat de gebruiker kan zien welke cadeaus al in zijn bookmark lijst staan.<br/>

https://github.com/user-attachments/assets/e166483b-825c-41f3-8434-9163c710869c


#### empty state
Als er geen cadeaus zijn opgeslagen in de bookmarklijst, is er op de bookmarklijst pagina een video voorbeeld van hoe de gebruiker cadeaus kan opslaan.<br/>
<img src="/bewijslast/empty-bookmark-list.png" alt="empty-bookmark-list" style="width: 50%;">


#### loading state
Voor linkjes tussen pagina's komt er een loader in beeld, zodat de gebruiker weet dat er iets gebeurt.<br/>

https://github.com/user-attachments/assets/5c59a533-e9a8-4155-8b20-5cfcf41b487b


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
