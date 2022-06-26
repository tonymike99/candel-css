// <!-- Dark mode -->

const themeIcon = document.getElementById("theme-icon");

let storedTheme = localStorage.getItem("theme");
if (storedTheme != null && storedTheme == "dark-theme") {
  document.body.classList.add(storedTheme);
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
}

themeIcon.addEventListener("click", () => {
  let storedTheme = localStorage.getItem("theme");

  if (storedTheme == null) localStorage.setItem("theme", "dark-theme");
  else if (storedTheme == "dark-theme") localStorage.setItem("theme", "");
  else if (storedTheme == "") localStorage.setItem("theme", "dark-theme");

  let newStoredTheme = localStorage.getItem("theme");

  if (newStoredTheme == "dark-theme") document.body.classList.add("dark-theme");
  else if (newStoredTheme == "") document.body.classList.remove("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.add("fa-sun");
    themeIcon.classList.remove("fa-moon");
  }
});

/* ---------------------------------------------------------------------------------------------------- */

// Loader

const loaderWrapper = document.getElementById("loader-wrapper");

window.addEventListener("load", () => {
  loaderWrapper.style.display = "none";
});

/* ---------------------------------------------------------------------------------------------------- */

// Lazy load for img and iframe

Array.from(document.getElementsByTagName("img")).map((imgEle) =>
  imgEle.setAttribute("loading", "lazy")
);

Array.from(document.getElementsByTagName("iframe")).map((iframeEle) =>
  iframeEle.setAttribute("loading", "lazy")
);

/* ---------------------------------------------------------------------------------------------------- */
