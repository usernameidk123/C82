canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseevent="empty";
var last_position_of_x, last_position_of_y;
color="black";
width_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_of_line").value;

    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;

        console.log("last position of x and y cordinates are ");
        console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y cordinates are ");
        console.log("x= "+current_position_of_x+"y= "+current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}

function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}