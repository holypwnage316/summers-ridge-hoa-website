const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("#mainNav");
    const toggler = document.querySelector(".navbar-toggler");

    if (nav && toggler && nav.classList.contains("show")) {
      toggler.click();
    }
  });
});
