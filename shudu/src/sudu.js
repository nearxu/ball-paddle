
import Toolkit from './toolkit'

class Generate {
    generate() {
        while (!this.interGenerate()) {
            console.log('rebuild');
        }
        return this.matrix;
    }
    interGenerate() {
        this.matrix = Toolkit.matrix.make();
        this.orders = Array.from({ length: 9 })
            .map(() => Array.from({ length: 9 }, (x, i) => i))
            .map(row => Toolkit.matrix.shuffle(row));

        const a = Array.from({ length: 9 })
            .every((n, i) => this.fillNumber(i + 1));

        console.log(a, 'a');
        return a;
    }
    fillNumber(number) {
        return this.fillRow(number, 0);
    }
    fillRow(n, rowIndex) {
        if (rowIndex >= 9) {
            return true;
        }
        const row = this.matrix[rowIndex];
        const orders = this.orders[rowIndex];
        for (let i = 0; i < orders.length; i++) {
            const colIndex = orders[i];
            // 如果这个位置已经有值，跳过
            if (row[colIndex]) {
                continue;
            }
            row[colIndex] = n;

            // 去下一行填 n，如果没填进去，就回退
            if (!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0;
                continue;
            }

            return true;
        }

        return false
    }

}

export default class Sudu {
    constructor() {
        this.matrix = new Generate().generate() || [];
    }
    make(level = 1) {
        this.puzzleMatrix = this.matrix.map(row => {
            return row.map(v => Math.random() * 9 < level ? 0 : v)
        })
        return this.puzzleMatrix;
    }
}