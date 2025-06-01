"use strict";

const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "images/salt-lake-temple.jpg",
    alt: "Salt Lake Temple"
  },
  {
    name: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002-06-09",
    area: 107240,
    imageUrl: "images/nauvoo-illinois-temple.jpg",
    alt: "Nauvoo Illinois Temple"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1915-06-01",
    area: 193915,
    imageUrl: "images/laie-hawaii-temple.jpg",
    alt: "Laie Hawaii Temple"
  },
  {
    name: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-09-11",
    area: 8700,
    imageUrl: "images/bern-switzerland-temple.jpg",
    alt: "Bern Switzerland Temple"
  },
  {
    name: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923-08-26",
    area: 15500,
    imageUrl: "images/cardston-alberta-temple.jpg",
    alt: "Cardston Alberta Temple"
  },
  {
    name: "London England Temple",
    location: "London, England",
    dedicated: "1958-05-11",
    area: 13905,
    imageUrl: "images/london-england-temple.jpg",
    alt: "London England Temple"
  },
  {
    name: "Kirtland Ohio Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836-03-27",
    area: 4_000,
    imageUrl: "images/kirtland-temple.jpg",
    alt: "Kirtland Ohio Temple"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 42900,
    imageUrl: "images/rome-italy-temple.jpg",
    alt: "Rome Italy Temple"
  },
  {
    name: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "2015-01-31",
    area: 19940,
    imageUrl: "images/payson-utah-temple.jpg",
    alt: "Payson Utah Temple"
  },
  {
    name: "St. George Utah Temple",
    location: "St. George, Utah, USA",
    dedicated: "1877-01-01",
    area: 11860,
    imageUrl: "images/st.-george-utah-temple.jpg",
    alt: "St. George Utah Temple"
  }
];

const gallery = document.querySelector(".gallery");
const sectionTitle = document.getElementById("section-title");
const filterButtons = document.querySelectorAll(".filter-button");

// Sidebar toggle for mobile
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function createTempleCard(temple) {
  const article = document.createElement("article");
  article.className = "temple-card";

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.alt;
  img.loading = "lazy";
  img.className = "temple-image";
  article.appendChild(img);

  const content = document.createElement("div");
  content.className = "temple-content";

  const name = document.createElement("h3");
  name.textContent = temple.name;
  content.appendChild(name);

  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;
  content.appendChild(location);

  const dedicated = document.createElement("p");
  dedicated.textContent = `Dedicated: ${formatDate(temple.dedicated)}`;
  content.appendChild(dedicated);

  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  content.appendChild(area);

  article.appendChild(content);

  return article;
}

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";
  if (filteredTemples.length === 0) {
    gallery.innerHTML = "<p>No temples match this filter.</p>";
    return;
  }
  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    gallery.appendChild(card);
  });
}

function filterTemples(criteria) {
  switch(criteria) {
    case "old":
      // Dedicated before 1950-01-01
      return temples.filter(t => new Date(t.dedicated) < new Date("1950-01-01"));
    case "new":
      return temples.filter(t => new Date(t.dedicated) >= new Date("1950-01-01"));
    case "large":
      return temples.filter(t => t.area > 20000);
    case "small":
      return temples.filter(t => t.area <= 20000);
    case "all":
    default:
      return temples;
  }
}

function updateActiveButton(clickedButton) {
  filterButtons.forEach(btn => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
  });
  clickedButton.classList.add("active");
  clickedButton.setAttribute("aria-pressed", "true");
}

function updateSectionTitle(filterName) {
  let text = "";
  switch(filterName) {
    case "old": text = "Old Temples"; break;
    case "new": text = "New Temples"; break;
    case "large": text = "Large Temples"; break;
    case "small": text = "Small Temples"; break;
    case "all":
    default:
      text = "Home";
  }
  sectionTitle.textContent = text;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    updateActiveButton(button);
    updateSectionTitle(filter);
    const filtered = filterTemples(filter);
    displayTemples(filtered);
    sidebar.classList.remove("open");
  });
});

hamburger.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// On page load, this will display all my temples
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  // Set current year in footer
  const yearSpan = document.getElementById("currentyear");
  yearSpan.textContent = new Date().getFullYear();

  // Set last modified date in footer
  const lastModifiedEl = document.getElementById("lastModified");
  const lastModifiedTime = new Date(document.lastModified);
  lastModifiedEl.textContent = lastModifiedTime.toLocaleString();
  lastModifiedEl.setAttribute("datetime", document.lastModified);
});