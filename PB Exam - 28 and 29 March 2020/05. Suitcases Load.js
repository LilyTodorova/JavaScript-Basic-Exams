function suitcasesLoad(input) {
  let index = 0;
  let areaOfPlane = Number(input[index]);
  index++;
  let command = input[index];
  let totalSuitcaseAtea = areaOfPlane;
  let totalSuitcases = 0;

  while (command !== "End") {
    let suitcase = Number(command);
    if (index % 3 === 0) {
      suitcase *= 1.1;
    }
    if (suitcase > totalSuitcaseAtea) {
      console.log(`No more space!`);
      break;
    }
    totalSuitcaseAtea -= suitcase;

    totalSuitcases++;
    index++;
    command = input[index];
  }
  if (command === "End") {
    console.log(`Congratulations! All suitcases are loaded!`);
  }
  console.log(`Statistic: ${totalSuitcases} suitcases loaded.`);
}
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
