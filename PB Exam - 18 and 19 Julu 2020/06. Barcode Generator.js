function barcodeGenerator(input) {
    let start = input[0];
    let end = input[1];
    let aStart = Number(start[0])
    let bStart = Number(start[1])
    let cStart = Number(start[2])
    let dStart = Number(start[3])

    let aEnd = Number(end[0])
    let bEnd = Number(end[1])
    let cEnd = Number(end[2])
    let dEnd = Number(end[3])

    let printLine = "";

    for (let a = aStart; a <= aEnd; a++) {
        for (let b = bStart; b <= bEnd; b++) {
            for (let c = cStart; c <= cEnd; c++) {
                for (let d = dStart; d <= dEnd; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        printLine += `${a}${b}${c}${d} `;
                    }
                }
            }
        }
    }
    console.log(printLine)
}
barcodeGenerator(["2345", "6789"]);
