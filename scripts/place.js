function calculateWindChill(t, s) {
  return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const chillElem = document.getElementById("chill");

  if (temp <= 50 && speed > 3) {
    const chill = calculateWindChill(temp, speed);
    chillElem.textContent = chill.toFixed(1) + " °F";
  } else {
    chillElem.textContent = "N/A";
  }

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
});