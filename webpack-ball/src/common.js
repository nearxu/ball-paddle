const imageFromPath = function(src) {
  let img = document.createElement("img");
  img.src = src;
  return img;
};

// 图片素材路径
const allImg = {
  background: require("./images/background.jpg"),
  paddle: require("./images/paddle.png"),
  ball: require("./images/ball.png"),
  block1: require("./images/block001.png"),
  block2: require("./images/block002.png")
};

export { imageFromPath, allImg };
