const canvas2 = document.getElementById("myGame");
const ctx = canvas2.getContext('2d');

let cWidth = canvas2.width;
let cHeight = canvas2.height;

let cPosX = cWidth / 2; //horizontal center
let cPosY = cHeight / 2; //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius = 75;
//drawing the circle
function drawFrame() {
    ctx.clearRect(0, 0, cWidth, cHeight); //giant eraser clearing the space

    ctx.fillStyle = "teal";
    ctx.strokeStyle = "darkorange";

    ctx.beginPath();
    ctx.arc(cPosX, cPosY, 75, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if (cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
        cVelX = cVelX * -1; //we reverse the horizontal direction
    }
    if (cPosY + cRadius >= cHeight || cPosY - cRadius <= 0) {
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX; // change position by velocity
    cPosY = cPosY + cVelY; //

    window.requestAnimationFrame(drawFrame);
}

drawFrame();

//have the counter for clicks
var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();

canvas2.addEventListener("click", function (event) {
    console.log(event);
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;
    console.log("Mouse X: " + mouseXp + "Mouse Y: " + mouseYp);

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    var color = ["white", "red","blue","green","yellow","purple"];

    if (distX < cRadius && distY < cRadius) {
        console.log("HIT!!!");
        cVelX = cVelX * 1.5;
        cVelY = cVelY * 1.5;
        document.getElementById("TimesClicked").innerHTML = add();
        
    }

})

function ColorChangeFunction(){
    var canvas = document.getElementById("myGame");
    var ctx = canvas.getContext('2d');



for(var i = 0; i < 10; i++) {

ctx.fillStyle="red";
}
    
   
    
    
    
  }