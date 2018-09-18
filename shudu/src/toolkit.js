
const matrixToolkit = {
    make(value = 0) {
        return Array.from(
            { length: 9 },
            () => matrixToolkit.makeRow()
        )
    },
    makeRow(value = 0) {
        const arr = new Array(9);
        arr.fill(value);
        return arr;
    },
    // 随机洗牌
    shuffle(array) {
        const len = array.length;
        const endIndex = len - 1;
        const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
        for (let i = 0; i < endIndex; i++) {
            const j = random(i, endIndex);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

const boxToolkit = {
    /** 根据给定的宫号(从0开始)获取一个数组，
    * 这个数组按先行后列从左到右的顺序包含宫内每个元素的值
    */
    getBoxCells(matrix, boxIndex) {
        const startRowIndex = Math.floor(boxIndex / 3) * 3;
        const startColIndex = boxIndex % 3 * 3;
        const result = [];
        for (var i = 0; i < 9; i++) {
            const rowIndex = startRowIndex + Math.floor(i / 3);
            const colIndex = startColIndex + i % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    }
}


export default class Toolkit {
    static get matrix() {
        return matrixToolkit;
    }
    static get box() {
        return boxToolkit;
    }
}