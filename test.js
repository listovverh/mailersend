const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


