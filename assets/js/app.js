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

document.addEventListener("DOMContentLoaded", () => {
const eventsContainer = document.getElementById("eventsContainer");

    // Grupér events efter spillested
    const groupedEvents = {};
    events.forEach(event => {
        if (!groupedEvents[event.spillested]) {
            groupedEvents[event.spillested] = [];
        }
        groupedEvents[event.spillested].push(event);
    });

    // Opret kortene i HTML
    for (const [spillested, events] of Object.entries(groupedEvents)) {
        const spillestedDiv = document.createElement("div");
        spillestedDiv.classList.add("spillested-card");

        const spillestedHeader = document.createElement("h2");
        spillestedHeader.textContent = spillested;
        spillestedDiv.appendChild(spillestedHeader);

        events.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event-card");

            const artistLink = document.createElement("a");
            artistLink.href = "#";
            artistLink.textContent = event.artist;
            artistLink.classList.add("artist-link");

            artistLink.addEventListener("click", () => {
                showPopup(event);
            });

            const spilletidP = document.createElement("p");
            spilletidP.textContent = event.spilletid;

            eventDiv.appendChild(artistLink);
            eventDiv.appendChild(spilletidP);
            spillestedDiv.appendChild(eventDiv);
        });

        eventsContainer.appendChild(spillestedDiv);
    }

    // Popup funktioner
    function showPopup(event) {
        document.getElementById("popup-artist").textContent = event.artist;
        document.getElementById("popup-spillested").textContent = "Spillested: " + event.spillested;
        document.getElementById("popup-spilletid").textContent = "Spilletid: " + event.spilletid;
        document.getElementById("popup-beskrivelse").textContent = event.beskrivelse;
        document.getElementById("popup").style.display = "block";
    }

    document.getElementById("popup-luk-btn").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });

    document.getElementById("popup-luk").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });
});
