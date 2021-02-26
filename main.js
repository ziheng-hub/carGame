let canvas;
let context;

let carX;
let carY;

let gameEND = null;
let timecount = 1889;

canvas = document.getElementById("can");
reSizeWindow();
carX = canvas.width / 2;
carY = canvas.height / 2;
context = canvas.getContext("2d");
let count = 0;

context.imageSmoothingEnabled = msImageSmoothingEnabled = false;

let carImage;
let MapImage;
let carImage2;
let carImage3;

let color = [
  "rgb(28,28,28)",
  "rgb(181,181,181)",
  "rgb(207,207,207)",
  "rgb(232,232,232)",
  "rgb(169,169,169)",
  "rgb(79,79,79)",
];

window.addEventListener("resize", reSizeWindow);

window.addEventListener("load", function () {
  carImage = new Image();
  carImage.src = "./img/patcar.png";
  MapImage = new Image();
  MapImage.src = "./img/104.png";
  carImage2 = new Image();
  carImage2.src = "./img/car.png";
  carImage3 = new Image();
  carImage3.src = "./img/105.png";
});

let car = {
  x: carX,
  y: carY,
  dx: 0,
  dy: 0,
  num: 0,

  update: function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0) this.x = canvas.width;
    if (this.y < 0) this.y = canvas.height;
    if (this.x > canvas.width) this.x = 0;
    if (this.y > canvas.height) this.y = 0;
  },
  draw: function () {
    switch (this.num) {
      case 0:
        context.drawImage(carImage, 100, 0, 90, 130, this.x, this.y, 100, 130);
        break;
      case 1:
        context.drawImage(carImage, 0, 0, 100, 130, this.x, this.y, 100, 130);
        break;
      case 2:
        context.drawImage(
          carImage,
          190,
          110,
          355,
          100,
          this.x,
          this.y,
          355,
          100
        );
        break;
      case 3:
        context.drawImage(carImage, 190, 0, 355, 100, this.x, this.y, 355, 100);
    }
  },
};

let item = {
  x: Math.floor(Math.random() * (canvas.width - 355)),

  y: Math.floor(Math.random() * (canvas.height - 100)),

  update: function () {
    this.x += 1.5;
    this.y -= 1.5;

    if (
      Math.floor(car.x / 100) == Math.floor(this.x / 100) &&
      Math.floor(car.y / 100) == Math.floor(this.y / 100)
    ) {
      count += 2;
      //context.drawImage(bom,0,0,320,320,this.x,this.y,320,320);
      this.x = Math.floor(Math.random() * (canvas.width - 355));
      this.y = Math.floor(Math.random() * (canvas.height - 100));
    } else if (
      Math.floor(car.x / 100) + 1 == Math.floor(this.x / 100) &&
      Math.floor(car.y / 100) + 1 == Math.floor(this.y / 100)
    ) {
      count += 2;
      //context.drawImage(bom,0,0,320,320,this.x,this.y,320,320);
      this.x = Math.floor(Math.random() * (canvas.width - 300));
      this.y = Math.floor(Math.random() * (canvas.height - 100 - 50));
    } else if (
      Math.floor(car.x / 100) - 1 == Math.floor(this.x / 100) &&
      Math.floor(car.y / 100) - 1 == Math.floor(this.y / 100)
    ) {
      count += 2;
      //context.drawImage(bom,0,0,320,320,this.x,this.y,320,320);
      this.x = Math.floor(Math.random() * (canvas.width / 2));
      this.y = Math.floor(Math.random() * (canvas.height / 2));
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
  },
  draw: function () {
    context.drawImage(carImage2, 190, 110, 355, 100, this.x, this.y, 355, 100);
  },
};

let item2 = {
  x: Math.floor(Math.random() * 500),

  y: Math.floor(Math.random() * 250),

  update: function () {
    this.x -= 1;
    this.y += 1;

    if (
      Math.floor(car.x / 100) == Math.floor(this.x / 100) &&
      Math.floor(car.y / 100) == Math.floor(this.y / 100)
    ) {
      count++;
      this.x = Math.floor(Math.random() * (canvas.width - 355));
      this.y = Math.floor(Math.random() * (canvas.height - 100));
    } else if (
      Math.floor(car.x / 100) + 1 == Math.floor(this.x / 100) &&
      Math.floor(car.y / 100) + 1 == Math.floor(this.y / 100)
    ) {
      count++;
      this.x = Math.floor(Math.random() * (canvas.width - 355));
      this.y = Math.floor(Math.random() * (canvas.height - 100));
    } else if (
      Math.floor(car.x / 100) - 1 == Math.floor(this.x / 100) &&
      Math.floor(car.y / 100) - 1 == Math.floor(this.y / 100)
    ) {
      count++;
      this.x = Math.floor(Math.random() * (canvas.width - 355));
      this.y = Math.floor(Math.random() * (canvas.height - 100));
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
  },
  draw: function () {
    context.drawImage(carImage3, 0, 0, 100, 60, this.x, this.y, 100, 60);
  },
};

function drawMapImage() {
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      //context.drawImage(MapImage,0,0,120,70,x*120,y*120,120,70);
      index = Math.floor(Math.random() * 5);
      context.fillStyle = color[index];
      context.fillRect(x * 100, y * 100, 100 - 2, 100 - 2);
      //context.drawImage(MapImage,0,0,120,70,x*120,y*70,120,70);
    }
  }
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  car.update();
  item.update();
  item2.update();

  drawMapImage();
  //context.fillStyle = "rgb(100,200,200)";
  //context.fillRect(0,0,canvas.width,canvas.height);

  item.draw();
  item2.draw();
  car.draw();

  let time = new Date();
  context.fillStyle = "rgb(255,0,0)";
  context.font = "45px Impact";
  context.fillText("TIME NOW:" + time, 5, 45);
  context.fillStyle = "rgb(0,0,255)";
  context.fillText("SCORE:" + count, 5, 105);
  timecount--;
  context.fillText("TimeOUT COUNT:" + timecount, 5, 155);

  if (timecount >> 5 <= 0) {
    context.fillText("TimeOUT COUNT:" + count, 5, 155);
    context.fillStyle = "yellow";
    context.font = "60px monospace";
    context.fillText("FINAL SCORE:" + count, 400, 300);
    context.fillStyle = "green";
    context.font = "100px monospace";
    context.fillText("TIME UP", 430, 400);
    context.font = "50px Impact";
    context.fillStyle = "rgb(230,0,0)";
    context.fillText("PRESS ENTER BUTTON=RESET", 350, 500);
    clearInterval(gameEND);
  }
}

function reSizeWindow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onkeydown = function (e) {
  let key = e.keyCode;
  console.log(key);
  switch (key) {
    case 37:
      car.dx = -8;
      car.dy = 0;
      car.num = 3;
      break;

    case 39:
      car.dx = 8;
      car.dy = 0;
      car.num = 2;
      break;

    case 38:
      car.dy = -8;
      car.dx = 0;
      car.num = 0;
      break;

    case 40:
      car.dy = 8;
      car.dx = 0;
      car.num = 1;
      break;

    case 32:
      car.dy = 0;
      car.dx = 0;
      break;

    case 13:
      document.location.reload();
      break;
  }
};

gameEND = setInterval(gameLoop, 1000 / 50);
