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

const sectionLinks = document.querySelectorAll(".section-link");
let copyToastTimer;

const showCopyToast = (message) => {
  let toast = document.querySelector(".copy-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "copy-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(copyToastTimer);
  copyToastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
};

const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fall through to the selection-based copy below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.left = "-9999px";
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let copied = false;

  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
};

sectionLinks.forEach((link) => {
  link.addEventListener("click", async (event) => {
    const targetHash = link.getAttribute("href");

    if (!targetHash || !targetHash.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const sectionUrl = new URL(targetHash, window.location.href);
    const target = document.querySelector(targetHash);

    if (target) {
      target.scrollIntoView();
    }

    history.pushState(null, "", sectionUrl.hash);

    const copied = await copyText(sectionUrl.toString());
    showCopyToast(copied ? "Section link copied" : "Copy failed. URL updated");
  });
});
