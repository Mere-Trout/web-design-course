const canvas = document.getElementById("drawCanvas");
const pointer = canvas.getContext("2d");

let drawing = false;
let currentColor = "#000000";


pointer.lineWidth = 3;
pointer.lineCap = "round";   
pointer.lineJoin = "round";    

// Start drawing
canvas.addEventListener("mousedown", (e) => 
{
    drawing = true;
    pointer.beginPath();
    pointer.moveTo(e.offsetX, e.offsetY); 
});


canvas.addEventListener("mouseup", () => 
{
    drawing = false;
    pointer.beginPath(); 
});


canvas.addEventListener("mousemove", (e) => 
{
    if (!drawing) return;

    pointer.strokeStyle = currentColor;
    pointer.lineTo(e.offsetX, e.offsetY);
    pointer.stroke();
});


document.querySelectorAll(".color").forEach(btn => 
{
    btn.addEventListener("click", () => {
        currentColor = btn.dataset.color;
    });
});


document.getElementById("eraser").addEventListener("click", () => 
{
    currentColor = "#ffffff";
});


document.getElementById("clear").addEventListener("click", () => 
{
    pointer.clearRect(0, 0, canvas.width, canvas.height);
});