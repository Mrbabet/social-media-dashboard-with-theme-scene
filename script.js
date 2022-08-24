const body = document.querySelector("body");
const topHeader = document.querySelector(".top-header");
const topHeaderWrapper = document.querySelector(".top-header-wrapper");
const checkbox = document.querySelector(".checkbox");
const gridBoxTotal = document.querySelectorAll(".grid-box-total");
const gridBoxToday = document.querySelectorAll(".grid-box-today");
const newTextDocument = document.querySelector(".Dark-mode-text");

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

checkbox.addEventListener("click", function handleClick() {
  const initialText = "Dark mode";

  if (
    newTextDocument.textContent
      .toLowerCase()
      .includes(initialText.toLowerCase())
  ) {
    newTextDocument.textContent = "Light mode";
  } else {
    newTextDocument.textContent = initialText;
  }
});
