const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = "#000000";

// Drawing events
canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;

    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 3, 0, Math.PI * 2);
    ctx.fill();
}

// 🎨 Color selection
document.querySelectorAll(".color").forEach(btn => {
    btn.addEventListener("click", () => {
        currentColor = btn.dataset.color;
    });
});

// 🧽 Eraser (draws in white)
document.getElementById("eraser").addEventListener("click", () => {
    currentColor = "#ffffff";
});

// 🗑️ Clear canvas
document.getElementById("clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});