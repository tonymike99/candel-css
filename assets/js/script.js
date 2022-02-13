// <!-- Dark mode -->

const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.add('fa-sun');
        themeIcon.classList.remove('fa-moon');
    }
});

// <!-- Modal -->

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

// <!-- Toast -->

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

// <!-- Loading lazy -->

const loadingAttribute = document.createAttribute('loading');
loadingAttribute.value = 'lazy';
document
    .getElementsByTagName('iframe')
    .map((iframeEle) => iframeEle.setAttributeNode(loadingAttribute));
