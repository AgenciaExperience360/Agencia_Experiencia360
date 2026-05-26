// =========================
// NAVBAR AL HACER SCROLL
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// MENÚ RESPONSIVE
// =========================

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// =========================
// CERRAR MENÚ AL HACER CLICK
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================

const elements = document.querySelectorAll(
    ".card, .portfolio-item, .step, .blog-card, .about-text, .about-box, .contact-info, .contact-form, .stats div"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.18
});

elements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// =========================
// FORMULARIOS DEMO
// =========================

const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente. Esto es una demo del proyecto.");
        form.reset();
    });
});
