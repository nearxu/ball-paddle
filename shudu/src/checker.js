import Toolkit from "./toolkit";

export default class Checker {
    constructor(matrix) {
        this.matrix = matrix;
    }
    get success() {
        return this._success;
    }
    static checkArray(arr) {
        const marks = Array(arr.length);
        marks.fill(true);

        arr.forEach((v, i) => {
            if (!v) {
                marks[i] = false;
                return;
            }
            if (marks[i]) {
                for (let j = i + 1; j < 9; j++) {
                    if (v === arr[j]) {
                        marks[i] = false;
                        marks[j] = false;
                    }
                }
            }
        })
        return marks
            .map((v, i) => v ? -1 : i)
            .filter(index => index >= 0);

    }

    check() {
        this.marks = Toolkit.matrix.make(true);
        this.checkRows();
        this.checkCols();
        this.checkBoxes();
        this._success = this.marks.every(row => row.every(v => v));
        return this;
    }
    checkRows() {
        const marks = this.marks;
        this.matrix.forEach((row, rowIndex) => {
            const rowMarks = Checker.checkArray(row);
            rowMarks.forEach(colIndex => {
                marks[rowIndex][colIndex] = false;
            });
        });
    }
    checkCols() {
        const { matrix, marks } = this;
        for (let colIndex = 0; colIndex < 9; colIndex++) {
            const cols = Array.from({ length: 9 })
                .map((v, i) => matrix[i][colIndex]);
            const colMarks = Checker.checkArray(cols);
            colMarks.forEach(rowIndex => marks[rowIndex][colIndex] = false);
        }
    }
    checkBoxes() {
        const { matrix, marks } = this;
        const boxes = Array.from({ length: 9 })
            .map((v, i) => Toolkit.box.getBoxCells(matrix, i))

        boxes.forEach((box, boxIndex) => {
            const boxMarks = Checker.checkArray(box);
            boxMarks.forEach(cellIndex => {
                const { rowIndex, colIndex }
                    = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex);
                marks[rowIndex][colIndex] = false;
            });
        });
    }
}