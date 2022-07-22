// <!-- Modal -->

const modal = document.getElementsByClassName("modal")[0];
const modalOpen = document.getElementById("modal-open");
const modalClose = document.getElementById("modal-close");

modalOpen.addEventListener("click", () => {
  modal.classList.add("modal-visible");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal-visible");
});

/* ---------------------------------------------------------------------------------------------------- */

// <!-- Toast -->

// Primary toast

const toastPrimaryBtn = document.getElementById("toast-primary");
const toast1 = document.getElementById("toast1");

toastPrimaryBtn.addEventListener("click", () => {
  toast1.classList.add("toast-visible");
  setTimeout(() => toast1.classList.remove("toast-visible"), 1500);
});

toast1.addEventListener("click", () => {
  toast1.classList.remove("toast-visible");
});

// Danger toast

const toastDangerBtn = document.getElementById("toast-danger");
const toast2 = document.getElementById("toast2");

toastDangerBtn.addEventListener("click", () => {
  toast2.classList.add("toast-visible");
  setTimeout(() => toast2.classList.remove("toast-visible"), 1500);
});

toast2.addEventListener("click", () => {
  toast2.classList.remove("toast-visible");
});

/* ---------------------------------------------------------------------------------------------------- */
