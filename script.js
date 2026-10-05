const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", opened);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const form = document.getElementById("form");
const status = document.getElementById("status");
const toast = document.getElementById("toast");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  status.textContent = "Спасибо! Демо-заявка принята.";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
});
