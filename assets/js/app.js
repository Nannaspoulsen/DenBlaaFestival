document.addEventListener("DOMContentLoaded", () => {
    const events = [
  {
    spillested: "John Bull Pub",
    artist: "TogoRhino - African Blues",
    spilletid: "Fredag, kl. 23:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "John Bull Pub",
    artist: "Johnny Burgin Trio",
    spilletid: "Lørdag, kl. 23:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Salling Rooftop",
    artist: "HP Lange & Jarno Varsted",
    spilletid: "Fredag, kl. 17:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Salling Rooftop",
    artist: "Kwella/Sejthen Duo",
    spilletid: "Søndag, kl. 14:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Salling Rooftop",
    artist: "Sahra da Silva & Alain Apaloo",
    spilletid: "Lørdag, kl. 14:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Kulturcenter Fjordbyen",
    artist: "Big Creek Slim & Johnny Burgin",
    spilletid: "Fredag, kl. 15:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Kulturcenter Fjordbyen",
    artist: "Jesper Theis & RJ Mischo",
    spilletid: "Lørdag, kl. 15:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Duus Vinkælder",
    artist: "Wash & Kjær",
    spilletid: "Fredag, kl. 21:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Duus Vinkælder",
    artist: "Villy Moesgaard Jazz4",
    spilletid: "Lørdag, kl. 21:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Kaffefair",
    artist: "The Downshifters",
    spilletid: "Fredag, kl. 15:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Kaffefair",
    artist: "Late Lunch and Laidback Grooves",
    spilletid: "Lørdag, kl. 15:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Kystens Perle",
    artist: "Malthe Nielsen & Henning Jensen",
    spilletid: "Fredag, kl. 15:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "Kystens Perle",
    artist: "The Muleskinners",
    spilletid: "Lørdag, kl. 15:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "El Mariachi",
    artist: "Jimi and Double af Trouble",
    spilletid: "Fredag, kl. 23:00",
    beskrivelse: "Lorem Ipsum.........."
  },
  {
    spillested: "El Mariachi",
    artist: "Sweet Marta og Johnny BigStone",
    spilletid: "Lørdag, kl. 22:00",
    beskrivelse: "Lorem Ipsum.........."
  }
];
//Vi kan også indsætte billede af hver artist i denne liste. Vi skal bare blive enige om, hvilket billede. 

// Vi vil gruppere events efter spillested. Det gør vi med denne funktion, da vi får en liste af events og returnerer en liste af events grupperet efter spillested.
// Funktion til at gruppere events efter spillested
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

    // Finder containeren i HTML
    const eventsContainer = document.querySelector("#eventsContainer");

    if (eventsContainer) {
        // Henter grupperede events
        const groupedEvents = groupEventsByVenue(events);

        // Looper igennem de grupperede events og opretter kort (cards)
        for (const [spillested, eventList] of Object.entries(groupedEvents)) {
            const card = document.createElement("div");
            card.classList.add("event-card"); // CSS-klasse til styling

            // Titel på spillested
            let eventContent = `<h3>${spillested}</h3>`;

            // Tilføjer alle events til kortet
            eventList.forEach(event => {
                eventContent += `<p><strong>${event.spilletid}:</strong> ${event.artist}</p>`;
            });

            card.innerHTML = eventContent;
            eventsContainer.appendChild(card);
        }
    }
});
