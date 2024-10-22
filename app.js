// const text = document.querySelector("ol");
// const b = prompt("Raqam kiriting:");
// const colors = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
// ];
// const randomColor = () => {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += colors[Math.trunc(Math.random() * colors.length)];
//     }
//     return color;
// };
// for (let i = 0; i < Number(b); i++) {
//     const color = randomColor();
//     text.innerHTML += `<li style="color:${color}">${color}</li>`;
// }

// const text = document.querySelector("p");
// text.classList.add("success");
// text.classList.remove("success");
// text.classList.add("error");

// const testP = document.querySelectorAll("p");
// testP.forEach((item) => {
//     if (item.textContent === "error") {
//         item.classList.add("error");
//     } else if (item.textContent === "success") {
//         item.classList.add("success");
//     }
// });

// const article = document.querySelector("article");
// Array.from(article.children).forEach((child) => {
//     child.classList.add("article-child");
// });

// MODAL AKHROR--WEB

const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const addHidden = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
const removeHidden = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        addHidden();
    }
});