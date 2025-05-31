// Hamburger Toggle
document.getElementById("menu-button").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  document.getElementById("menu-button").textContent =
    nav.style.display === "flex" ? "✖" : "☰";
});

// Footer Date Info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;