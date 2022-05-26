function careOfPuppy(input) {
  let index = 0;
  let foodInKg = Number(input[index]);
  index++;
  let command = input[index];
  let foodGrms = foodInKg * 1000;
  let totalFoodEaten = 0;

  while (command !== "Adopted") {
    let foodEaten = Number(command);
    totalFoodEaten += foodEaten;
    index++;
    command = input[index];
  }

  let diff = Math.abs(foodGrms - totalFoodEaten);
  if (totalFoodEaten > foodGrms) {
    console.log(`Food is not enough. You need ${diff} grams more.`);
  } else if (totalFoodEaten <= foodGrms) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  }
}
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
