class Main {
  constructor() {
    this.LV = 1;
    this.paddle = null;
    this.blockList = null;
    this.ball = null;
    this.fps = 60;
    this.paddle_x = 449;
    this.paddle_y = 450;
    this.ball_x = 491;
    this.ball_y = 432;
    this.score_x = 10;
    this.score_y = 30;
    this.score = null;
  }
  start() {
    this.scene = new Scene(this.LV);
    this.blockList = this.scene.initBlockList();

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.game = new Game(this);
    this.score = new Score(this);
    this.game.init(this);
  }
}

var main = new Main();
main.start();
