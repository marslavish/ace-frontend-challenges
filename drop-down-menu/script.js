const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown__menu");

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("dropdown-open");
});
