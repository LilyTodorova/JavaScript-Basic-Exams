function bestPlayer(input) {
  let index = 0;
  let command = input[index]; // до END
  let maxGoas = Number.MIN_SAFE_INTEGER;
  let bestPlayer = "";

  while (command !== "END") {
    let futbolPlayer = command; //Име на играч
    index++;
    let goals = Number(input[index]); //Брой вкарани голове
    if (goals >= 10) {
      bestPlayer = futbolPlayer;
      maxGoas = goals;
      break;
    }
    if (goals > maxGoas) {
      maxGoas = goals;
      bestPlayer = futbolPlayer;
    }
    index++;
    command = input[index];
  }
  console.log(`${bestPlayer} is the best player!`);
  if (maxGoas >= 3) {
    console.log(`He has scored ${maxGoas} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoas} goals.`);
  }
}
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
