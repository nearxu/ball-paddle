import { imageFromPath, allImg } from "./common";

export class Game {
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
  draw(paddle, blockList, ball, score) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBg();
    this.drawImage(ball);
    this.drawImage(paddle);
    this.drawBlocks(blockList);
    this.drawText(score);
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
  drawText(obj) {
    this.context.font = "24px Microsoft YaHei";
    this.context.fillStyle = "#fff";
    // 绘制分数
    this.context.fillText(obj.text + obj.allScore, obj.x, obj.y);
    // 绘制关卡
    this.context.fillText(obj.textLv + obj.lv, this.canvas.width - 100, obj.y);
  }
  // 注册事件
  registerAction(key, callback) {
    this.actions[key] = callback;
  }
  init() {
    let paddle = this.main.paddle;
    let blockList = this.main.blockList;
    let ball = this.main.ball;
    let score = this.main.score;
    this.setTimer(paddle, blockList, ball, score);
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
  setTimer(paddle, blockList, ball, score) {
    this.timer = setInterval(() => {
      let actions = Object.keys(this.actions);
      for (let i = 0; i < actions.length; i++) {
        let key = actions[i];
        if (this.keydowns[key]) {
          // 如果按键被按下，调用注册的action
          this.actions[key]();
        }
      }
      // 专打光了
      if (blockList.length === 0) {
        if (this.main.LV === this.main.MAXLV) {
          this.finalGame();
        } else {
          this.freshLv();
        }
      }
      this.checkBallBlock(paddle, blockList, ball, score);
      this.draw(paddle, blockList, ball, score);
    }, 1000 / this.fps);
  }
  finalGame() {
    clearInterval(this.timer);
    // 清除画布
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // 绘制背景图
    this.drawBg();
    // 绘制提示文字
    this.context.font = "48px Microsoft YaHei";
    this.context.fillStyle = "#fff";
    this.context.fillText("恭喜通关全部关卡", 308, 226);
  }
  freshLv() {
    // 清除定时器
    clearInterval(this.timer);
    // 清除画布
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // 绘制背景图
    this.drawBg();
    // 绘制提示文字
    this.context.font = "48px Microsoft YaHei";
    this.context.fillStyle = "#fff";
    this.context.fillText("恭喜晋级下一关卡", 308, 226);
    setTimeout(() => {
      this.nextGameStart();
    }, 1000);
  }
  nextGameStart() {
    this.main.start(++this.main.LV);
  }
  checkBallBlock(paddle, blockList, ball, score) {
    let p = paddle,
      b = ball;
    if (paddle.crash(ball)) {
      // 当小球运动方向趋向挡板中心时，Y轴速度取反，反之则不变
      if (
        Math.abs(b.y + b.h / 2 - p.y + p.h / 2) >
        Math.abs(b.y + b.h / 2 + b.speedY - p.y + p.h / 2)
      ) {
        b.speedY *= -1;
      } else {
        b.speedY *= 1;
      }
    }
    blockList.forEach(function(item, i, arr) {
      if (item.crash(b)) {
        if (!item.alive) {
          arr.splice(i, 1);
        }
        // 撞专反方向
        if ((b.y < item.y && b.speedY < 0) || (b.y > item.y && b.speedY > 0)) {
          if (b.speedY < 0) {
            b.speedY *= -1;
          } else {
            b.speedY *= 1;
          }
        }
        score.computeScore();
      }
    });
    ball.move();
  }
}
