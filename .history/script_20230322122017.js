window.onload = function () {
  var canvasWidth = 900;
  var canvasHeight = 600;
  var blockSize = 30;
  var ctx;
  var delay = 100;
  var xCoord = 0;
  var yCoord = 0;
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
    xCoord += 5;
    yCoord += 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xCoord, yCoord, 100, 50);
    setTimeout(refreshCanvas, delay);
  }

  function snake() {
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
