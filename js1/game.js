class Game {
  constructor(main) {
    this.main = main;
    this.canvas = document.getElementById("canvas");
    this.context = document.getElementById("canvas").getContext("2d");
    this.timer = null;
    this.fps = main.fps;
    this.tiemr = null;
    this.keydowns = {};
    this.actions = {};
  }
  draw(paddle, blockList, ball) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBg();
    this.drawImage(ball);
    this.drawImage(paddle);
    this.drawBlocks(blockList);
  }
  drawBg() {
    let bg = imageFromPath(allImg.background);
    // bg.onload = () => {
    this.context.drawImage(bg, 0, 0);
    // };
  }
  drawImage(obj) {
    // let image = obj.image;
    // image.onload = () => {
    this.context.drawImage(obj.image, obj.x, obj.y);
    // };
  }
  drawBlocks(lists) {
    for (let item of lists) {
      this.drawImage(item);
    }
  }
  // 注册事件
  registerAction(key, callback) {
    this.actions[key] = callback;
  }
  init() {
    let paddle = this.main.paddle;
    let blockList = this.main.blockList;
    let ball = this.main.ball;
    this.setTimer(paddle, blockList, ball);
    // 绑定事件
    window.addEventListener("keydown", e => {
      this.keydowns[e.keyCode] = true;
    });
    window.addEventListener("keyup", e => {
      this.keydowns[e.keyCode] = false;
    });
    this.registerAction = (key, callback) => {
      this.actions[key] = callback;
    };
    this.registerAction("37", () => {
      paddle.moveLeft();
      ball.fire = true;
    });
    this.registerAction("39", () => {
      paddle.moveRight();
    });
    // this.registerAction("32", () => {
    //   ball.fire = true;
    // });
    // 发射球
    // window.addEventListener("keydown", e => {
    //   switch (e.keyCode) {
    //     case 32:
    //       ball.fire = true;
    //       break;
    //     default:
    //       break;
    //   }
    // });
  }
  setTimer(paddle, blockList, ball) {
    this.timer = setInterval(() => {
      let actions = Object.keys(this.actions);
      for (let i = 0; i < actions.length; i++) {
        let key = actions[i];
        if (this.keydowns[key]) {
          // 如果按键被按下，调用注册的action
          this.actions[key]();
        }
      }
      this.checkBallBlock(paddle, blockList, ball);
      this.draw(paddle, blockList, ball);
    }, 1000 / this.fps);
  }
  checkBallBlock(paddle, blockList, ball) {
    // if (paddle.crash(ball)) {
    //   // if (
    //   //   Math.abs(ball.y + ball.h / 2 - paddle.y + paddle.h / 2) >
    //   //   Math.abs(ball.y + ball.h / 2 + ball.speedY - paddle.y + paddle.h / 2)
    //   // ) {
    //   //   ball.speedY *= -1;
    //   // } else {
    //   //   ball.speedY *= 1;
    //   // }
    //   ball.speedY *= -1;
    // }
    ball.move();
  }
}
