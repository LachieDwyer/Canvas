window.onload = function (){
canvas=document.getElementById("paint-canvas");
context=canvas.getContext("2d")
var boundings = canvas.getBoundingClientRect()

var mousex = 0;
var mousey= 0;

context.strokeStyle = "black";
context.lineWidth = 1;
var isDrawing = false;

var colors = document.getElementsByClassName("colors")[0]

colors.addEventListener('click', function(event){
    context.strokeStyle=event.target.value || "black"
})

var brushes = document.getElementsByClassName("brushes")[0]

brushes.addEventListener('click', function(event){
    context.lineWidth=event.target.value || 1
})

function setMouseCoordinates(event){
    mouseX = event.clientX - boundings.left
    mouseY = event.clientY - boundings.top
}

canvas.addEventListener('mousedown', function(event){
    setMouseCoordinates(event)
    isDrawing = true;

    context.beginPath()
    context.moveTo(mouseX, mouseY)
})

canvas.addEventListener('mousemove', function(event){
    setMouseCoordinates(event)

    if(isDrawing){
        context.lineTo(mouseX, mouseY)
        context.stroke()
    }
})



canvas.addEventListener('mouseup', function(event){
    setMouseCoordinates(event)
    isDrawing = false;
})





var clearButton = document.getElementById("clear")

clearButton.addEventListener("click", function(){
context.clearRect(0, 0, canvas.width, canvas.height);
})

var saveButton = document.getElementById("save")

saveButton.addEventListener("click", function(){
var imageName = prompt("Please enter an image name")
var canvasDataURL = canvas.toDataURL();
var a = document.createElement('a')
a.href = canvasDataURL;
a.download = imageName || "drawing"
a.click()
})







}

