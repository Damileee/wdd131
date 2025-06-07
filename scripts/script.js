const products = [
  { id: "fvm3", name: "FluxVision Mixer 3000" },
  { id: "aeg2", name: "Aegis Edge Guard" },
  { id: "prx1", name: "ProX Smart Sensor" },
  { id: "spt9", name: "SparkTrack 9000" },
  { id: "vltx", name: "Voltix Charge Hub" }
];

const select = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});