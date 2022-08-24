const body = document.querySelector("body");
const topHeader = document.querySelector(".top-header");
const topHeaderWrapper = document.querySelector(".top-header-wrapper");
const checkbox = document.querySelector(".checkbox");
const gridBoxTotal = document.querySelectorAll(".grid-box-total");
const gridBoxToday = document.querySelectorAll(".grid-box-today");

checkbox.addEventListener("change", () => {
  gridBoxTotal.forEach((gridBoxTotal) => {
    gridBoxTotal.classList.toggle("dark");
  });
});
checkbox.addEventListener("change", () => {
  gridBoxToday.forEach((gridBoxToday) => {
    gridBoxToday.classList.toggle("dark");
  });
});

checkbox.addEventListener("change", () => {
  body.classList.toggle("dark");
  topHeader.classList.toggle("dark");
  topHeaderWrapper.classList.toggle("dark");
});
