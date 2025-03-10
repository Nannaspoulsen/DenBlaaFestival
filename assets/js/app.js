const events = [
  {
    spillested: "John Bull Pub",
    artist: "TogoRhino - African Blues",
    spilletid: "Fredag, kl. 23:00"
  },
  {
    spillested: "John Bull Pub",
    artist: "Johnny Burgin Trio",
    spilletid: "Lørdag, kl. 23:00"
  },
  {
    spillested: "Salling Rooftop",
    artist: "HP Lange & Jarno Varsted",
    spilletid: "Fredag, kl. 17:00"
  },
  {
    spillested: "Salling Rooftop",
    artist: "Kwella/Sejthen Duo",
    spilletid: "Søndag, kl. 14:00"
  },
  {
    spillested: "Salling Rooftop",
    artist: "Sahra da Silva & Alain Apaloo",
    spilletid: "Lørdag, kl. 14:00"
  },
  {
    spillested: "Kulturcenter Fjordbyen",
    artist: "Big Creek Slim & Johnny Burgin",
    spilletid: "Fredag, kl. 15:00"
  },
  {
    spillested: "Kulturcenter Fjordbyen",
    artist: "Jesper Theis & RJ Mischo",
    spilletid: "Lørdag, kl. 15:00"
  },
  {
    spillested: "Duus Vinkælder",
    artist: "Wash & Kjær",
    spilletid: "Fredag, kl. 21:00"
  },
  {
    spillested: "Duus Vinkælder",
    artist: "Villy Moesgaard Jazz4",
    spilletid: "Lørdag, kl. 21:00"
  },
  {
    spillested: "Kaffefair",
    artist: "The Downshifters",
    spilletid: "Fredag, kl. 15:00"
  },
  {
    spillested: "Kaffefair",
    artist: "Late Lunch and Laidback Grooves",
    spilletid: "Lørdag, kl. 15:00"
  },
  {
    spillested: "Kystens Perle",
    artist: "Malthe Nielsen & Henning Jensen",
    spilletid: "Fredag, kl. 15:00"
  },
  {
    spillested: "Kystens Perle",
    artist: "The Muleskinners",
    spilletid: "Lørdag, kl. 15:00"
  },
  {
    spillested: "El Mariachi",
    artist: "Jimi and Double af Trouble",
    spilletid: "Fredag, kl. 23:00"
  },
  {
    spillested: "El Mariachi",
    artist: "Sweet Marta og Johnny BigStone",
    spilletid: "Lørdag, kl. 22:00"
  }
];
//Vi kan også indsætte billede af hver artist i denne liste. Vi skal bare blive enige om, hvilket billede. 

// Vi vil gruppere events efter spillested. Det gør vi med denne funktion, da vi får en liste af events og returnerer en liste af events grupperet efter spillested.
function groupEventsByVenue(events) {
    const grouped = {};

    events.forEach(event => {
        if (!grouped[event.spillested]) {
            grouped[event.spillested] = [];
        }
        grouped[event.spillested].push(event);
    });

    return grouped;
}
const eventsContainer = document.querySelector("#eventsContainer");

