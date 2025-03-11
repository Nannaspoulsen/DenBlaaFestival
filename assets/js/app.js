const events = [
  {
    spillested: "John Bull Pub",
    artist: "TogoRhino - African Blues",
    spilletid: "Fredag, kl. 23:00",
    beskrivelse: "Beskrivelse af bandet.......",
    billede: "./assets/img/img1163.jpg"
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

// Finder det sted på websiden hvor events skal vises
const eventsContainer = document.querySelector("#events-container1");

// Gennemgår hver eneste event fra arrayet
events.forEach(function(event) {
  // Opretter en event-boks
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event-card"); // Tilføjer klasse til styling
  eventDiv.innerHTML = `
      <h3>${event.artist}</h3>
      <p>${event.spillested} - ${event.spilletid}</p>
  `;

  // Når brugeren klikker på event-boksen, vis popup
  eventDiv.addEventListener("click", function() {
    showPopup(event);
  });
  eventsContainer.appendChild(eventDiv);
});

// Funktion der viser popup med event-detaljer
function showPopup(event) {
  // Gør popup'en synlig
  document.querySelector("#popup").style.display = "flex";

  // Sætter event-detaljer ind i popup
  document.querySelector("#popup-artist").textContent = event.artist;
  document.querySelector("#popup-spillested").textContent = "Spillested: " + event.spillested;
  document.querySelector("#popup-spilletid").textContent = "Spilletid: " + event.spilletid;
  document.querySelector("#popup-beskrivelse").textContent = event.beskrivelse;

  // Sætter billede, hvis der findes et (findes ikke på alle artister)
  const popupBillede = document.querySelector("#popup-billede");
  if (event.billede) {
    popupBillede.src = event.billede;
    popupBillede.style.display = "block";
  } else {
    popupBillede.style.display = "none";
  }
}

// Luk popup når man klikker på krydset
document.querySelector("#popup-luk").addEventListener("click", function () {
  document.querySelector("#popup").style.display = "none";
});
