const BLOCK_WIDTH = 48;     // 这是在样式表中固定的大小
const OFFSET = BLOCK_WIDTH + 2;
const POPUP_WIDTH = BLOCK_WIDTH * 3 + 10;

export default class PopUpNumber {
    constructor(div) {
        this.pannel = div;
        this.pannel.on('click', 'span', e => {
            const cell = $(e.target);
            if (cell.hasClass('empty')) {
                this.emptyTarget();
            } else if (cell.hasClass('mark')) {
                this.markTarget(cell.data('mark'))
            } else {
                this.setTargetValue(cell.text());
            }
            this.pannel.hide();
            this.targetCell = null;
        })
            .hide()
            .removeClass("hidden");
    }
    emptyTarget() {
        this.targetCell
            .text("0")
            .removeClass("mark1 mark2 error")
            .addClass("empty");
    }
    markTarget(marker) {
        const target = this.targetCell;
        if (target.hasClass(marker)) {
            target.removeClass("mark1 mark2 error");
        } else {
            target.removeClass("mark1 mark2 error").addClass(marker);
        }
    }
    setTargetValue(value) {
        this.targetCell
            .text(value)
            .removeClass("empty error");
    }
    popup(cell) {
        this.targetCell = cell;
        const cellPosition = cell.position();
        const left = Math.min(
            Math.max(cellPosition.left - OFFSET, 0),
            $(window).width() - POPUP_WIDTH);
        const top = Math.max(cellPosition.top - OFFSET, 0);
        this.pannel
            .css({
                left: `${left}px`,
                top: `${top}px`
            })
            .show();
    }
}