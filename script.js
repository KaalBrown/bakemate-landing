// BakeMate Landing Page

const header = document.querySelector(".header");

// Header animation on scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
    }
);

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});

// Button hover animation
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-2px) scale(1.02)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });
});

// FAQ Accordion
document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
        if (detail.open) {
            document.querySelectorAll("details").forEach((other) => {
                if (other !== detail) {
                    other.open = false;
                }
            });
        }
    });
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    menuButton.classList.toggle("active");

});