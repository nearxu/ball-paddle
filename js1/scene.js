class Scene {
  constructor(lv) {
    let s = {
      lv: lv,
      canvas: document.getElementById("canvas"), // canvas对象
      blockList: []
    };
    Object.assign(this, s);
  }
  initBlockList() {
    this.createBlockList();
    let arr = [];
    for (let item of this.blockList) {
      for (let list of item) {
        if (list.type === 1) {
          let obj = new Block(list.x, list.y);
          arr.push(obj);
        } else if (list.type === 2) {
          let obj = new Block(list.x, list.y, 2);
          arr.push(obj);
        }
      }
    }
    return arr;
  }
  createBlockList() {
    let lv = this.lv, // 游戏难度级别
      c_w = this.canvas.width, // canvas宽度
      c_h = this.canvas.height, // canvas高度
      xNum_max = c_w / 50, // x轴砖块最大数量
      yNum_max = 12, // y轴砖块最大数量
      x_start = 0, // x轴起始坐标，根据砖块数量浮动
      y_start = 60;

    switch (lv) {
      case 1:
        var xNum = 16, // x轴砖块第一层数量
          yNum = 9;
        for (let i = 0; i < yNum; i++) {
          let arr = [];
          if (i === 0) {
            xNum = 1;
          } else if (i === 1) {
            xNum = 2;
          } else {
            xNum += 2;
          }
          x_start = ((xNum_max - xNum) / 2) * 50;
          for (let k = 0; k < xNum; k++) {
            if (i < 3) {
              // 前三排为特殊砖块
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 2
              });
            } else {
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 1
              });
            }
          }
          this.blockList.push(arr);
        }
        return this.blockList;
        break;
      case 2: // 倒三角
        var xNum = 16, // x轴砖块第一层数量
          yNum = 9;
        for (let i = 0; i < yNum; i++) {
          let arr = [];
          if (i === yNum - 1) {
            xNum = 1;
          } else if (i === 0) {
            xNum = xNum;
          } else {
            xNum -= 2;
          }
          x_start = ((xNum_max - xNum) / 2) * 50;
          for (let k = 0; k < xNum; k++) {
            if (i < 3) {
              // 前三排为特殊砖块
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 2
              });
            } else {
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 1
              });
            }
          }
          this.blockList.push(arr);
        }
        return this.blockList;
        break;

      case 3: // 工字型
        var xNum = 16, // x轴砖块第一层数量
          yNum = 9;
        for (let i = 0; i < yNum; i++) {
          let arr = [];
          if (i > 4) {
            xNum += 2;
          } else if (i === 0) {
            xNum = xNum;
          } else {
            xNum -= 2;
          }
          x_start = ((xNum_max - xNum) / 2) * 50;
          for (let k = 0; k < xNum; k++) {
            if (i < 3) {
              // 前三排为特殊砖块
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 2
              });
            } else {
              arr.push({
                x: x_start + k * 50,
                y: y_start + i * 20,
                type: 1
              });
            }
          }
          this.blockList.push(arr);
        }
        return this.blockList;
        break;

      default:
        break;
    }
  }
}

class Block {
  constructor(x, y, life = 1) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 20;
    this.life = life;
    this.image =
      life == 1 ? imageFromPath(allImg.block1) : imageFromPath(allImg.block2);
  }
}

class Paddle {
  constructor(props) {
    this.x = props.paddle_x;
    this.y = props.paddle_y;
    this.w = 102;
    this.h = 22;
    this.speed = 10;
    this.image = imageFromPath(allImg.paddle);
  }
  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  crash(ball) {
    if (
      Math.abs(
        ball.x + ball.w / 2 - (this.x + this.w / 2) < (ball.w + this.w) / 2
      ) &&
      Math.abs(ball.y + ball.h / 2 - this.y < (ball.h + this.h) / 2)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Ball {
  constructor(props) {
    this.x = props.ball_x;
    this.y = props.ball_y;
    this.w = 18;
    this.h = 18;
    this.image = imageFromPath(allImg.ball);
    this.speedX = 1;
    this.speedY = 5;
    this.fired = true;
  }
  move() {
    if (this.fired) {
      if (this.x < 0 || this.x > 1000 - this.w) {
        this.speedX *= -1;
      }
      if (this.y < 0 || this.y > 500) {
        this.speedY *= -1;
      }
      this.x -= this.speedX;
      this.y -= this.speedY;
    }
  }
}
