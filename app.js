// UYGA VAZIFA
const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const clearBtn = document.getElementById("clear-btn");

const addHidden = () => {
    modal.classList.add("hidden");
};
const removeHidden = () => {
    modal.classList.remove("hidden");
};
showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", () => {
    addHidden();
    document.body.style.backgroundColor = "#00ffff";
});

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        addHidden();
    }
    document.body.style.backgroundColor = "#00ffff";
    modal.style.backgroundColor = "#ffffff";
});

clearBtn.addEventListener("click", () => {
    text.textContent = "";
    document.body.style.backgroundColor = "#00ffff";
    modal.style.backgroundColor = "#ffffff";
});

const text = document.querySelector(".li-parent");
const b = 6;
const colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];
const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colors[Math.trunc(Math.random() * colors.length)];
    }
    return color;
};
for (let i = 0; i < Number(b); i++) {
    const color = randomColor();
    text.innerHTML += `<li class="list-style" style="color:${color}"> ${color} 
      <div class="all-btn"> 
        <button class="delet-btn"data-color=${color} >Delete</button>
        <button class="apply-btn" data-color=${color}>Apply</button>
      </div>
    </li>`;
}
document.addEventListener("click", (e) => {
    if (e.target.textContent === "Delete") {
        e.target.parentElement.parentElement.remove();
        const colour = e.target.dataset.color;
        modal.style.backgroundColor = colour;
    } else if (e.target.textContent === "Apply") {
        const colour2 = e.target.dataset.color;
        // console.log(color);
        document.body.style.backgroundColor = colour2;
    }
});
// AKHROR WEB YOUTUBE DARSLARI
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

// MODEL AKHROR WEB YOUTUBE

// const showBtn = document.getElementById("show-btn");
// const modal = document.getElementById("modal");
// const closeBtn = document.getElementById("close-btn");
// const overlay = document.getElementById("overlay");

// const addHidden = () => {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// };
// const removeHidden = () => {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// };

// showBtn.addEventListener("click", removeHidden);

// closeBtn.addEventListener("click", addHidden);

// overlay.addEventListener("click", addHidden);

// document.addEventListener("keydown", (e) => {
//     if (e.key == "Escape") {
//         addHidden();
//     }
// });