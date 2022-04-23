const confirmBtn = document.querySelector(".del-confirm-btn");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".confirm-modal");
const cancelBtn = document.querySelector(".cancel");

confirmBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modalContainer.classList.remove("modal-hide");
});

cancelBtn.addEventListener("click", () => {
  modalContainer.classList.add("modal-hide");
});

document.addEventListener("click", (e) => {
  const isModalClicked = modal.contains(e.target);
  if (!isModalClicked) {
    modalContainer.classList.add("modal-hide");
  }
});
