window.onload = function(){
    var canvas;
    var ctx;
    var delay = 1000;

    function init() {
        canvas = document.createElement("canvas");
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
       refreshCanvas();
    }
    function refreshCanvas() {
         ctx.fillStyle = "#FF0000";
         ctx.fillRect(30, 30, 100, 50);
    }
    
}