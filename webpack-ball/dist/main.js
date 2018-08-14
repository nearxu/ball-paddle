/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar imageFromPath = exports.imageFromPath = function imageFromPath(src) {\n  var img = new Image();\n  img.src = \"./images/\" + src;\n  return img;\n};\n\n// 图片素材路径\nvar allImg = exports.allImg = {\n  background: \"background.jpg\",\n  paddle: \"paddle.png\",\n  ball: \"ball.png\",\n  block1: \"block001.png\",\n  block2: \"block002.png\"\n};\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n  function Game(main) {\n    _classCallCheck(this, Game);\n\n    this.main = main;\n    this.canvas = document.getElementById(\"canvas\");\n    this.context = document.getElementById(\"canvas\").getContext(\"2d\");\n    this.timer = null;\n    this.fps = main.fps;\n    this.tiemr = null;\n    this.keydowns = {};\n    this.actions = {};\n  }\n\n  _createClass(Game, [{\n    key: \"draw\",\n    value: function draw(paddle, blockList, ball, score) {\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.drawBg();\n      this.drawImage(ball);\n      this.drawImage(paddle);\n      this.drawBlocks(blockList);\n      this.drawText(score);\n    }\n  }, {\n    key: \"drawBg\",\n    value: function drawBg() {\n      var bg = imageFromPath(allImg.background);\n      // bg.onload = () => {\n      this.context.drawImage(bg, 0, 0);\n      // };\n    }\n  }, {\n    key: \"drawImage\",\n    value: function drawImage(obj) {\n      // let image = obj.image;\n      // image.onload = () => {\n      this.context.drawImage(obj.image, obj.x, obj.y);\n      // };\n    }\n  }, {\n    key: \"drawBlocks\",\n    value: function drawBlocks(lists) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          this.drawImage(item);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"drawText\",\n    value: function drawText(obj) {\n      this.context.font = \"24px Microsoft YaHei\";\n      this.context.fillStyle = \"#fff\";\n      // 绘制分数\n      this.context.fillText(obj.text + obj.allScore, obj.x, obj.y);\n      // 绘制关卡\n      this.context.fillText(obj.textLv + obj.lv, this.canvas.width - 100, obj.y);\n    }\n    // 注册事件\n\n  }, {\n    key: \"registerAction\",\n    value: function registerAction(key, callback) {\n      this.actions[key] = callback;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var paddle = this.main.paddle;\n      var blockList = this.main.blockList;\n      var ball = this.main.ball;\n      var score = this.main.score;\n      this.setTimer(paddle, blockList, ball, score);\n      // 绑定事件\n      window.addEventListener(\"keydown\", function (e) {\n        _this.keydowns[e.keyCode] = true;\n      });\n      window.addEventListener(\"keyup\", function (e) {\n        _this.keydowns[e.keyCode] = false;\n      });\n      this.registerAction = function (key, callback) {\n        _this.actions[key] = callback;\n      };\n      this.registerAction(\"37\", function () {\n        paddle.moveLeft();\n        ball.fire = true;\n      });\n      this.registerAction(\"39\", function () {\n        paddle.moveRight();\n      });\n      // this.registerAction(\"32\", () => {\n      //   ball.fire = true;\n      // });\n      // 发射球\n      // window.addEventListener(\"keydown\", e => {\n      //   switch (e.keyCode) {\n      //     case 32:\n      //       ball.fire = true;\n      //       break;\n      //     default:\n      //       break;\n      //   }\n      // });\n    }\n  }, {\n    key: \"setTimer\",\n    value: function setTimer(paddle, blockList, ball, score) {\n      var _this2 = this;\n\n      this.timer = setInterval(function () {\n        var actions = Object.keys(_this2.actions);\n        for (var i = 0; i < actions.length; i++) {\n          var key = actions[i];\n          if (_this2.keydowns[key]) {\n            // 如果按键被按下，调用注册的action\n            _this2.actions[key]();\n          }\n        }\n        // 专打光了\n        if (blockList.length === 0) {\n          if (_this2.main.LV === _this2.main.MAXLV) {\n            _this2.finalGame();\n          } else {\n            _this2.freshLv();\n          }\n        }\n        _this2.checkBallBlock(paddle, blockList, ball, score);\n        _this2.draw(paddle, blockList, ball, score);\n      }, 1000 / this.fps);\n    }\n  }, {\n    key: \"finalGame\",\n    value: function finalGame() {\n      clearInterval(this.timer);\n      // 清除画布\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      // 绘制背景图\n      this.drawBg();\n      // 绘制提示文字\n      this.context.font = \"48px Microsoft YaHei\";\n      this.context.fillStyle = \"#fff\";\n      this.context.fillText(\"恭喜通关全部关卡\", 308, 226);\n    }\n  }, {\n    key: \"freshLv\",\n    value: function freshLv() {\n      var _this3 = this;\n\n      // 清除定时器\n      clearInterval(this.timer);\n      // 清除画布\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      // 绘制背景图\n      this.drawBg();\n      // 绘制提示文字\n      this.context.font = \"48px Microsoft YaHei\";\n      this.context.fillStyle = \"#fff\";\n      this.context.fillText(\"恭喜晋级下一关卡\", 308, 226);\n      setTimeout(function () {\n        _this3.nextGameStart();\n      }, 1000);\n    }\n  }, {\n    key: \"nextGameStart\",\n    value: function nextGameStart() {\n      this.main.start(++this.main.LV);\n    }\n  }, {\n    key: \"checkBallBlock\",\n    value: function checkBallBlock(paddle, blockList, ball, score) {\n      var p = paddle,\n          b = ball;\n      if (paddle.crash(ball)) {\n        // 当小球运动方向趋向挡板中心时，Y轴速度取反，反之则不变\n        if (Math.abs(b.y + b.h / 2 - p.y + p.h / 2) > Math.abs(b.y + b.h / 2 + b.speedY - p.y + p.h / 2)) {\n          b.speedY *= -1;\n        } else {\n          b.speedY *= 1;\n        }\n      }\n      blockList.forEach(function (item, i, arr) {\n        if (item.crash(b)) {\n          if (!item.alive) {\n            arr.splice(i, 1);\n          }\n          // 撞专反方向\n          if (b.y < item.y && b.speedY < 0 || b.y > item.y && b.speedY > 0) {\n            if (b.speedY < 0) {\n              b.speedY *= -1;\n            } else {\n              b.speedY *= 1;\n            }\n          }\n          score.computeScore();\n        }\n      });\n      ball.move();\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.Game = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nvar _scene = __webpack_require__(/*! ./scene */ \"./src/scene.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Main = function () {\n  function Main() {\n    _classCallCheck(this, Main);\n\n    this.LV = 1;\n    this.paddle = null;\n    this.blockList = null;\n    this.ball = null;\n    this.fps = 60;\n    this.paddle_x = 449;\n    this.paddle_y = 450;\n    this.ball_x = 491;\n    this.ball_y = 432;\n    this.score_x = 10;\n    this.score_y = 30;\n    this.score = null;\n  }\n\n  _createClass(Main, [{\n    key: \"start\",\n    value: function start() {\n      this.scene = new _scene.Scene(this.LV);\n      this.blockList = this.scene.initBlockList();\n\n      this.paddle = new _scene.Paddle(this);\n      this.ball = new _scene.Ball(this);\n      this.game = new _game.Game(this);\n      this.score = new _scene.Score(this);\n      this.game.init(this);\n    }\n  }]);\n\n  return Main;\n}();\n\nvar main = new Main();\nmain.start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Score = exports.Ball = exports.Paddle = exports.Block = exports.Scene = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _common = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = function () {\n  function Scene(lv) {\n    _classCallCheck(this, Scene);\n\n    var s = {\n      lv: lv,\n      canvas: document.getElementById(\"canvas\"), // canvas对象\n      blockList: []\n    };\n    Object.assign(this, s);\n  }\n\n  _createClass(Scene, [{\n    key: \"initBlockList\",\n    value: function initBlockList() {\n      this.createBlockList();\n      var arr = [];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.blockList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n          var _iteratorNormalCompletion2 = true;\n          var _didIteratorError2 = false;\n          var _iteratorError2 = undefined;\n\n          try {\n            for (var _iterator2 = item[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n              var list = _step2.value;\n\n              if (list.type === 1) {\n                var obj = new Block(list.x, list.y);\n                arr.push(obj);\n              } else if (list.type === 2) {\n                var _obj = new Block(list.x, list.y, 2);\n                arr.push(_obj);\n              }\n            }\n          } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                _iterator2.return();\n              }\n            } finally {\n              if (_didIteratorError2) {\n                throw _iteratorError2;\n              }\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return arr;\n    }\n  }, {\n    key: \"createBlockList\",\n    value: function createBlockList() {\n      var lv = this.lv,\n          // 游戏难度级别\n      c_w = this.canvas.width,\n          // canvas宽度\n      c_h = this.canvas.height,\n          // canvas高度\n      xNum_max = c_w / 50,\n          // x轴砖块最大数量\n      yNum_max = 12,\n          // y轴砖块最大数量\n      x_start = 0,\n          // x轴起始坐标，根据砖块数量浮动\n      y_start = 60;\n\n      switch (lv) {\n        case 1:\n          var xNum = 16,\n              // x轴砖块第一层数量\n          yNum = 9;\n          for (var i = 0; i < yNum; i++) {\n            var arr = [];\n            if (i === 0) {\n              xNum = 1;\n            } else if (i === 1) {\n              xNum = 2;\n            } else {\n              xNum += 2;\n            }\n            x_start = (xNum_max - xNum) / 2 * 50;\n            for (var k = 0; k < xNum; k++) {\n              if (i < 3) {\n                // 前三排为特殊砖块\n                arr.push({\n                  x: x_start + k * 50,\n                  y: y_start + i * 20,\n                  type: 2\n                });\n              } else {\n                arr.push({\n                  x: x_start + k * 50,\n                  y: y_start + i * 20,\n                  type: 1\n                });\n              }\n            }\n            this.blockList.push(arr);\n          }\n          return this.blockList;\n          break;\n        case 2:\n          // 倒三角\n          var xNum = 16,\n              // x轴砖块第一层数量\n          yNum = 9;\n          for (var _i = 0; _i < yNum; _i++) {\n            var _arr = [];\n            if (_i === yNum - 1) {\n              xNum = 1;\n            } else if (_i === 0) {\n              xNum = xNum;\n            } else {\n              xNum -= 2;\n            }\n            x_start = (xNum_max - xNum) / 2 * 50;\n            for (var _k = 0; _k < xNum; _k++) {\n              if (_i < 3) {\n                // 前三排为特殊砖块\n                _arr.push({\n                  x: x_start + _k * 50,\n                  y: y_start + _i * 20,\n                  type: 2\n                });\n              } else {\n                _arr.push({\n                  x: x_start + _k * 50,\n                  y: y_start + _i * 20,\n                  type: 1\n                });\n              }\n            }\n            this.blockList.push(_arr);\n          }\n          return this.blockList;\n          break;\n\n        case 3:\n          // 工字型\n          var xNum = 16,\n              // x轴砖块第一层数量\n          yNum = 9;\n          for (var _i2 = 0; _i2 < yNum; _i2++) {\n            var _arr2 = [];\n            if (_i2 > 4) {\n              xNum += 2;\n            } else if (_i2 === 0) {\n              xNum = xNum;\n            } else {\n              xNum -= 2;\n            }\n            x_start = (xNum_max - xNum) / 2 * 50;\n            for (var _k2 = 0; _k2 < xNum; _k2++) {\n              if (_i2 < 3) {\n                // 前三排为特殊砖块\n                _arr2.push({\n                  x: x_start + _k2 * 50,\n                  y: y_start + _i2 * 20,\n                  type: 2\n                });\n              } else {\n                _arr2.push({\n                  x: x_start + _k2 * 50,\n                  y: y_start + _i2 * 20,\n                  type: 1\n                });\n              }\n            }\n            this.blockList.push(_arr2);\n          }\n          return this.blockList;\n          break;\n\n        default:\n          break;\n      }\n    }\n  }]);\n\n  return Scene;\n}();\n\nvar Block = function () {\n  function Block(x, y) {\n    var life = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n\n    _classCallCheck(this, Block);\n\n    this.x = x;\n    this.y = y;\n    this.w = 50;\n    this.h = 20;\n    this.life = life;\n    this.alive = true;\n    this.image = life == 1 ? (0, _common.imageFromPath)(_common.allImg.block1) : (0, _common.imageFromPath)(_common.allImg.block2);\n  }\n\n  _createClass(Block, [{\n    key: \"kill\",\n    value: function kill() {\n      this.life--;\n      if (this.life == 0) {\n        this.alive = false;\n      } else if (this.life == 1) {\n        this.image = (0, _common.imageFromPath)(_common.allImg.block1);\n      }\n    }\n  }, {\n    key: \"crash\",\n    value: function crash(ball) {\n      var b = ball;\n      if (Math.abs(b.x + b.w / 2 - (this.x + this.w / 2)) < (b.w + this.w) / 2 && Math.abs(b.y + b.h / 2 - (this.y + this.h / 2)) < (b.h + this.h) / 2) {\n        this.kill();\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"collBlock\",\n    value: function collBlock(ball) {\n      var b = ball;\n      var rangeX = 0;\n      var rangeY = 0;\n    }\n  }]);\n\n  return Block;\n}();\n\nvar Paddle = function () {\n  function Paddle(props) {\n    _classCallCheck(this, Paddle);\n\n    this.x = props.paddle_x;\n    this.y = props.paddle_y;\n    this.w = 102;\n    this.h = 22;\n    this.speed = 10;\n    this.image = (0, _common.imageFromPath)(_common.allImg.paddle);\n  }\n\n  _createClass(Paddle, [{\n    key: \"moveLeft\",\n    value: function moveLeft() {\n      this.x -= this.speed;\n    }\n  }, {\n    key: \"moveRight\",\n    value: function moveRight() {\n      this.x += this.speed;\n    }\n  }, {\n    key: \"crash\",\n    value: function crash(ball) {\n      var b = ball;\n      var p = this;\n      if (Math.abs(b.x + b.w / 2 - (p.x + p.w / 2)) < (b.w + p.w) / 2 && Math.abs(b.y + b.h / 2 - (p.y + p.h / 2)) < (b.h + p.h) / 2) {\n        return true;\n      }\n      return false;\n    }\n  }]);\n\n  return Paddle;\n}();\n\nvar Ball = function () {\n  function Ball(props) {\n    _classCallCheck(this, Ball);\n\n    this.x = props.ball_x;\n    this.y = props.ball_y;\n    this.w = 18;\n    this.h = 18;\n    this.image = (0, _common.imageFromPath)(_common.allImg.ball);\n    this.speedX = 1;\n    this.speedY = 5;\n    this.fired = true;\n  }\n\n  _createClass(Ball, [{\n    key: \"move\",\n    value: function move() {\n      if (this.fired) {\n        if (this.x < 0 || this.x > 1000 - this.w) {\n          this.speedX *= -1;\n        }\n        if (this.y < 0 || this.y > 500) {\n          this.speedY *= -1;\n        }\n        this.x -= this.speedX;\n        this.y -= this.speedY;\n      }\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar Score = function () {\n  function Score(main) {\n    _classCallCheck(this, Score);\n\n    this.x = main.score_x;\n    this.y = main.score_y;\n    this.text = \"分数\";\n    this.textLv = \"官咖:\";\n    this.score = 200;\n    this.allScore = 0;\n    this.blockList = main.blockList;\n    this.blockListLen = main.blockList.length;\n    this.lv = main.LV;\n  }\n\n  _createClass(Score, [{\n    key: \"computeScore\",\n    value: function computeScore() {\n      var num = 0;\n      var allNum = this.blockListLen;\n      num = this.blockListLen - this.blockList.length;\n      this.allScore = this.score * num;\n    }\n  }]);\n\n  return Score;\n}();\n\nexports.Scene = Scene;\nexports.Block = Block;\nexports.Paddle = Paddle;\nexports.Ball = Ball;\nexports.Score = Score;\n\n//# sourceURL=webpack:///./src/scene.js?");

/***/ })

/******/ });