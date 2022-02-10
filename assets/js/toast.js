// Primary toast

const toastPrimaryBtn = document.getElementById('toast-primary');
const toast1 = document.getElementById('toast1');

toastPrimaryBtn.addEventListener('click', () => {
    toast1.classList.add('toast-visible');
});

toast1.addEventListener('click', () => {
    toast1.classList.remove('toast-visible');
});

// Danger toast

const toastDangerBtn = document.getElementById('toast-danger');
const toast2 = document.getElementById('toast2');

toastDangerBtn.addEventListener('click', () => {
    toast2.classList.add('toast-visible');
});

toast2.addEventListener('click', () => {
    toast2.classList.remove('toast-visible');
});
