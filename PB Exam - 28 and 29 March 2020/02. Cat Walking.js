function catWalking(input) {
  let walksMinutes = Number(input[0]); //минути разходка на ден
  let countOfWalks = Number(input[1]); //броят на разходките дневно
  let calories = Number(input[2]); //приетите от котката калории на ден

  let totalMinutes = walksMinutes * countOfWalks;
  let caloriesBurned = totalMinutes * 5;
  //let caloriesLeft = calories - caloriesBurned

  if (caloriesBurned >= calories * 0.5) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`
    );
  }
}
catWalking(["40", "2", "300"]);
