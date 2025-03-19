// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

const loggedInUserID = 2 // viresh in dit geval

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


// Maak een GET route voor de index
app.get('/', async function (request, response) {
  // Render index.liquid uit de Views map
  // Geef hier eventueel data aan mee
  const giftResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products/?fields=id,slug,name,image,tags')
  const giftResponseJSON = await giftResponse.json()

  response.render('index.liquid', {giftData: giftResponseJSON.data})
})


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
app.post('/:id', async function (request, response) {
 
  // Haal de data het cadeau id op die in de bookmark list moet komen
  const getId = request.params.id;

  // url waar het cadeau opgeslagen moet worden
  const postURL = 'https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products/'

  // url om te kijken als het cadeau al opgeslagen is
  const GiftFilter = `?filter={"milledoni_users_id":"${loggedInUserID}","milledoni_products_id":"${getId}"}`;
  const checkGift = await fetch(postURL + GiftFilter)
  const checkGiftResponseJSON = await checkGift.json()

  if (checkGiftResponseJSON.data.length > 0) {
    await fetch(postURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        milledoni_users_id: loggedInUserID,
        milledoni_products_id: getId
      }),
    })
    console.log('Product verwijderd')
  }
  // Voeg de nieuwe waarde toe aan de bookmark list in directus
  else {
    await fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        milledoni_users_id: loggedInUserID,
        milledoni_products_id: getId
      }),
    })
    console.log('Product opgeslagen')
  }

  // Redirect terug naar de index pagina
  response.redirect('/')
})



// details pagina
app.get('/details/:slug', async function (request, response) {
  // haal de slug op uit de url
  const slug = request.params.slug;
  // voeg de slug toe als filter
  const giftURL = `https://fdnd-agency.directus.app/items/milledoni_products/?fields=slug,name,image,description,url&filter={"slug":"${slug}"}`
  
  // fetch de nieuwe filter
  const giftResponse = await fetch(giftURL)
  const giftResponseJSON = await giftResponse.json()

  response.render('details.liquid', {giftData: giftResponseJSON.data[0]})
})

/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/

/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})
