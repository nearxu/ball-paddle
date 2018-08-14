export const imageFromPath = function(src) {
  let img = new Image();
  img.src = "./images/" + src;
  return img;
};

// 图片素材路径
export const allImg = {
  background: "background.jpg",
  paddle: "paddle.png",
  ball: "ball.png",
  block1: "block001.png",
  block2: "block002.png"
};
