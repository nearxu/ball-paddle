import Sudu from './sudu';
import Checker from './checker.js'

export default class Grid {
    constructor(container) {
        this.container = container;
    }
    rebuild() {
        const sudu = new Sudu();
        const matrix = sudu.make();
        const rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
        const colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];
        // 创建矩阵数组对应的 span 二维数组
        this.cells = matrix.map(rowValues => rowValues.map((cellValue, colIndex) => {
            return $("<span>")
                .text(cellValue)
                .addClass(cellValue ? "fixed" : "empty")
                .addClass(colGroupClasses[colIndex % 3]);
        }));

        // 创建 DOM
        const rows = this.cells.map((rowCells, rowIndex) => {
            return $("<div>")
                .addClass("row")
                .addClass(rowGroupClasses[rowIndex % 3])
                .append(rowCells);
        });
        this.container.empty().append(rows);
        this.layout();
    }
    layout() {
        const width = $("span:first", this.container).width();
        $("span", this.container)
            .height(width)
            .css({
                "line-height": `${width}px`,
                "font-size": width < 32 ? `${width / 2}px` : ""
            });
    }
    bindPopup(popupNumbers) {
        this.container.on('click', 'span', e => {
            const cell = $(e.target);
            if (cell.hasClass('fixed')) {
                return;
            }
            popupNumbers.popup(cell);
        })
    }
    reset() {
        // $("span:not(.fixed)", this._$container)
        //     .text("0")
        //     .removeClass("mark1 mark2 error")
        //     .addClass("empty");
    }
    clear() {
        // $("span.error", this._$container).removeClass("error");
    }
    check() {
        const data = this.cells.map(rowCells => rowCells.map(span => span.text()))
        const checker = new Checker(data).check();

    }
}
