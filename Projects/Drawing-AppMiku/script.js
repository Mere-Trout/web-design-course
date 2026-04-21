const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = "#000000";

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => 
{
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener("mousemove", draw);

function draw(e) 
{
    if (!drawing) return;

    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 3, 0, Math.PI * 2);
    ctx.fill();
}

document.querySelectorAll(".color").forEach(btn => 
{
    btn.addEventListener("click", () => 
    {
        currentColor = btn.dataset.color;
    });
});

document.getElementById("eraser").addEventListener("click", () => 
{
    currentColor = "#ffffff";
});

document.getElementById("clear").addEventListener("click", () => 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});