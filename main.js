var mouseEvent ="empty";
var last_position_of_x, last_position_of_y;

canvas =document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color ="black";
width_of_line = 3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{


    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currennt_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    currennt_position_of_mouse_y= e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth=width_of_line;

    console.log("Last position of x and y coordinates =");
    console.log("x =" + last_position_of_x + "y=" +last_position_of_y)
   ctx.moveTo(last_position_of_x,last_position_of_y);

   console.log("Current position of and y cordinates = ");
   console.log("x=" + currennt_position_of_mouse_x + "y="+currennt_position_of_mouse_y)
   ctx.lineTo(currennt_position_of_mouse_x,currennt_position_of_mouse_y);
   ctx.stroke();
   }
   last_position_of_x = currennt_position_of_mouse_x;
   last_position_of_y = currennt_position_of_mouse_y;
}

