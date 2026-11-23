// ---------- Data (edit or add your own here) ----------
// To use pictures, put image files in the "images" folder and
// set the image path below. If a picture is missing, the colour shows instead.
const statues = [
  {
    name: "Nok Terracotta Sculptures",
    place: "Kaduna and Plateau region",
    age: "About 1500 BCE to 200 CE",
    color: "#b5532f",
    image: "images/nok.jpg",
    text: "Made by the Nok culture, these are among the oldest known sculptures in sub-Saharan Africa. They show people and animals with elongated heads and carefully shaped eyes."
  },
  {
    name: "Ife Bronze Heads",
    place: "Ile-Ife, Osun State",
    age: "About the 12th to 15th century",
    color: "#a67c2e",
    image: "images/ife.jpg",
    text: "These lifelike heads were cast in copper alloys and show great skill in metalwork. They are linked to the kings of the ancient Yoruba city of Ile-Ife."
  },
  {
    name: "Benin Bronzes",
    place: "Benin City, Edo State",
    age: "From the 13th century onward",
    color: "#7a4a1d",
    image: "images/benin.jpg",
    text: "Plaques and heads made by guilds of the Edo people for the royal court of the Kingdom of Benin. Many record the history of the Obas (kings)."
  },
  {
    name: "Igbo-Ukwu Bronzes",
    place: "Igbo-Ukwu, Anambra State",
    age: "About the 9th century",
    color: "#2f6b4f",
    image: "images/igbo.jpg",
    text: "Finely detailed bronze vessels and ornaments found in burial sites. They are admired for their delicate, intricate decoration."
  },
  {
    name: "Esie Soapstone Figures",
    place: "Esie, Kwara State",
    age: "Several centuries old",
    color: "#5d6b73",
    image: "images/esie.jpg",
    text: "Over a thousand carved stone figures kept at the Esie Museum, one of the largest collections of its kind in West Africa."
  },
  {
    name: "Yoruba Ere Ibeji Figures",
    place: "Yoruba land, southwestern Nigeria",
    age: "Traditional, still made today",
    color: "#8a3a24",
    image: "images/ibeji.jpg",
    text: "Small wooden figures carved in memory of a twin who has died. The family cares for the figure as if it were the living child."
  }
];

const cultures = [
  {
    name: "Yoruba",
    text: "The Yoruba live mainly in the southwest. They are known for the Egungun masquerade, Adire indigo cloth, talking drums and a rich tradition of art and oral poetry."
  },
  {
    name: "Igbo",
    text: "The Igbo live mainly in the southeast. The New Yam Festival (Iri Ji) celebrates the harvest, and colourful masquerades and highlife music are an important part of community life."
  },
  {
    name: "Hausa",
    text: "The Hausa live mainly in the north. Kano's old dye pits, the Durbar festival with horse riders in colourful dress, and the city walls show a long history of trade and craft."
  },
  {
    name: "Edo",
    text: "The Edo people of Benin City created the Kingdom of Benin. Their royal court art, especially brass casting, is known all over the world."
  },
  {
    name: "Efik and Ibibio",
    text: "Found in the southeast near Calabar. They are known for the Ekpe society, the Calabar Carnival, and dishes such as edikang ikong soup."
  },
  {
    name: "Tiv",
    text: "The Tiv live mainly in the Benue Valley. They are known for striking striped A'nger cloth and energetic traditional dances."
  }
];

// ---------- Statues page ----------
const statueList = document.getElementById("statue-list");
const search = document.getElementById("search");

function showStatues(filter) {
  statueList.innerHTML = "";
  const text = (filter || "").toLowerCase();

  const results = statues.filter(function (s) {
    return s.name.toLowerCase().includes(text) || s.place.toLowerCase().includes(text);
  });

  if (results.length === 0) {
    statueList.textContent = "No statues found. Try a different word.";
    return;
  }

  results.forEach(function (s) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="card-color" style="background:' + s.color + '">' +
        '<img class="card-img" src="' + s.image + '" alt="' + s.name + '" onerror="this.remove()">' +
      "</div>" +
      '<div class="card-body">' +
        "<h3>" + s.name + "</h3>" +
        "<small>" + s.place + "</small>" +
        '<div class="card-details">' +
          "<p><strong>Age:</strong> " + s.age + "</p>" +
          "<p>" + s.text + "</p>" +
        "</div>" +
      "</div>";

    card.addEventListener("click", function () {
      card.classList.toggle("open");
    });

    statueList.appendChild(card);
  });
}

if (statueList) {
  showStatues();
  search.addEventListener("input", function () {
    showStatues(search.value);
  });
}

// ---------- Cultures page ----------
const cultureList = document.getElementById("culture-list");

if (cultureList) {
  cultures.forEach(function (c) {
    const box = document.createElement("div");
    box.className = "culture";
    box.innerHTML =
      '<button class="culture-title">' + c.name + "</button>" +
      '<p class="culture-text">' + c.text + "</p>";

    box.querySelector("button").addEventListener("click", function () {
      box.classList.toggle("open");
    });

    cultureList.appendChild(box);
  });
}

// ---------- Contact page ----------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const note = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
      note.style.color = "#a32020";
      note.textContent = "Please fill in all the fields.";
    } else {
      note.style.color = "#0b6b3a";
      note.textContent = "Thank you, " + name + ". Your message has been received.";
      contactForm.reset();
    }
  });
}

// ---------- Footer year (all pages) ----------
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
