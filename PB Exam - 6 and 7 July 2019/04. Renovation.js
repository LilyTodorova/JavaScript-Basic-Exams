function renovation(input) {
  let wallHeight = Number(input[0]);
  let wallWidth = Number(input[1]);
  let percentNoPaint = Number(input[2]);
  let index = 3;
  let command = input[index];
  let area = wallHeight * wallWidth * 4;
  let areaToPaint = Math.ceil(area - (area * percentNoPaint) / 100);
  let totalPaint = 0;

  while (command !== "Tired!") {
    let paintLitre = Number(command);
    totalPaint += paintLitre;
    areaToPaint -= paintLitre;
    if (areaToPaint < 0) {
      let diff = Math.abs(areaToPaint);
      console.log(`All walls are painted and you have ${diff} l paint left! `);
      break;
    }
    if (areaToPaint === 0) {
      console.log(`All walls are painted! Great job, Pesho!`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "Tired!") {
    console.log(`${areaToPaint} quadratic m left.`);
  }
}
renovation(["2", "3", "25", "6", "7", "8"]);
