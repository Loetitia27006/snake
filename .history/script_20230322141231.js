window.onload = function () {
  var canvasWidth = 900;
  var canvasHeight = 600;
  var blockSize = 30;
  var ctx;
  var delay = 100;
  var snakee;

  init();

  function init() {
    canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    snakee = new Snake([
      [6, 4],
      [5, 4],
      [4, 4],
    ]);
    refreshCanvas();
  }

  function refreshCanvas() {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snakee.draw();
    setTimeout(refreshCanvas, delay);
  }

  function drawBlock(ctx, position){
    var x = position[0] * blockSize;
    var y = position[1] * blockSize;
    ctx.fillRect(x, y, blockSize, blockSize)
  }

  function snake(body) {
    this.body = body;
    this.draw = function () {
      ctx.save();
      ctx.fillstyle = "#FF0000";
      for (var i = 0; i < this.body.lenght; i++) {
        drawBlock(ctx, this.body[i]);
      }
      ctx.restore();
    };
  }
};
