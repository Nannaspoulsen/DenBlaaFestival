   document.addEventListener("DOMContentLoaded", () => {
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
    ]; // Christoffers artist kode
    const artistContainer = document.getElementById("artist-container");
    

    if (!artistContainer) {
        console.warn("Elementet #artist-container blev ikke fundet!");
        return;
    }

    // Fjern dubletter og sorter alfabetisk
    const uniqueArtists = [...new Map(events.map(event => [event.artist, event])).values()]
        .sort((a, b) => a.artist.localeCompare(b.artist));

    // Opret kort til hver artist
    uniqueArtists.forEach(({ artist, billede }) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = billede || "./assets/img/default.jpg"; // Brug default-billede hvis mangler
        // img.alt = artist;
        img.classList.add("artist-image");

        const name = document.createElement("p");
        name.textContent = artist;

        card.appendChild(img);
        card.appendChild(name);
        artistContainer.appendChild(card);
        
    });
});