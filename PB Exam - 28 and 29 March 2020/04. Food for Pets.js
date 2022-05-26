function foodForPets(input) {
  let totalDays = Number(input[0]); //Брой дни
  let totalFood = Number(input[1]); //Общо количество храна
  let index = 2;
  let dayCounter = 0; // Трябва ми всеки 3 ден за бисквити
  let dogFood = 0; // котешка храна на ден
  let catFood = 0;

  let biscuits = 0;

  for (let i = 1; i <= totalDays; i++) {
    dayCounter++;
    let dogFoodDay = Number(input[index]);
    dogFood += dogFoodDay;
    index++;
    let catFoodDay = Number(input[index]);
    catFood += catFoodDay;
    if (dayCounter % 3 === 0) {
      biscuits += (dogFoodDay + catFoodDay) * 0.1;
    }
    index++;
  }
  let foodEaten = catFood + dogFood;
  let totalBiscuits = Math.round(biscuits);
  let percentEatenFood = (foodEaten * 100) / totalFood;
  let percentDogFood = (dogFood * 100) / foodEaten;
  let percentCatFood = (catFood * 100) / foodEaten;

  console.log(`Total eaten biscuits: ${totalBiscuits}gr.`);
  console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
