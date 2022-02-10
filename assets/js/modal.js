const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementsByClassName('modal')[0];

modalOpen.addEventListener('click', () => {
    modal.classList.add('modal-visible');
    document.body.classList.add('modal-overlay');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    document.body.classList.remove('modal-overlay');
});
