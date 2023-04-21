const computerBtn = document.getElementById("computers");
const vehicleBtn = document.getElementById("vehicles");
const hideBtn = document.getElementById("hide");
const computerSec = document.querySelector(".sec-1");
const vehicleSec = document.querySelector(".sec-2");

computerBtn.addEventListener("click", () => {
  if (computerSec.classList.contains("hidden")) {
    computerSec.classList.remove("hidden");
  }
  if (!vehicleSec.classList.contains("hidden")) {
    vehicleSec.classList.add("hidden");
  }
});
vehicleBtn.addEventListener("click", () => {
  if (vehicleSec.classList.contains("hidden")) {
    vehicleSec.classList.remove("hidden");
  }
  if (!computerSec.classList.contains("hidden")) {
    computerSec.classList.add("hidden");
  }
});
hideBtn.addEventListener("click", () => {
  computerSec.classList.add("hidden");
  vehicleSec.classList.add("hidden");
});
