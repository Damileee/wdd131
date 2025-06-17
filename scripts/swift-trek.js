// Set current year in footer
document.querySelector("#year").textContent = new Date().getFullYear();

// Destination cards
const destinations = [
  {
    name: "Bali, Indonesia",
    img: "images/bali.webp",
    description: "A tropical paradise known for beaches, temples, and culture."
  },
  {
    name: "Reykjavik, Iceland",
    img: "images/iceland.webp",
    description: "Home of waterfalls, volcanoes, and the northern lights."
  },
  {
    name: "Kyoto, Japan",
    img: "images/kyoto.webp",
    description: "Famous for its temples, cherry blossoms, and traditions."
  }
];

const cardsSection = document.querySelector("#destinationCards");

if (cardsSection) {
  destinations.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${dest.name}</h3>
      <img src="${dest.img}" alt="${dest.name}" loading="lazy">
      <p>${dest.description}</p>
    `;
    cardsSection.appendChild(card);
  });
}

// Booking form handling
const form = document.querySelector("#bookingForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const destination = document.querySelector("#destination").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !destination || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Store form submission count
    let submissionCount = Number(localStorage.getItem("submissionCount")) || 0;
    submissionCount++;
    localStorage.setItem("submissionCount", submissionCount);

    alert(`Thanks ${name}, your booking for ${destination} was received!`);
    form.reset();
  });
}