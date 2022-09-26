const hamburger = document.querySelector(".hamburger");
const box2 = document.querySelector(".box-2");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    box2.classList.toggle("active");
})

document.querySelectorAll(".nav-links") .forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    box2.classList.remove("active");
}))