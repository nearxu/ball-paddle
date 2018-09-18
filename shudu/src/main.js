import Grid from './ui';
import PopupNumbers from './popup'
import './main.css';
function main() {
    const $container = $("#container");
    const $popupNumbers = $("#popupNumbers");
    const grid = new Grid($container);
    grid.bindPopup(new PopupNumbers($popupNumbers));
    grid.rebuild();

    $("#check").on("click", () => {
        if (grid.check()) {
            alert("成功");
        }
    });

    // 重置
    $("#reset").on("click", () => grid.reset());
    $("#clear").on("click", () => grid.clear());
    $("#rebuild").on("click", () => grid.rebuild());
}

main();
