const logreg_box = document.querySelector(".logreg_box");
const login_link = document.querySelector(".login_link");
const register_link = document.querySelector(".register_link");

register_link.addEventListener("click", () => {
    logreg_box.classList.add("active");
})

login_link.addEventListener("click", () => {
    logreg_box.classList.remove("active");
})