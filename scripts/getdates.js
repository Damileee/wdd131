const yearSpan = document.getElementById("currentyear");
const lastModifiedP = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;