function balls(input) {
  let ballCount = Number(input[0]); //брой топки, които се теглят
  let totalDifferentBallCount = 0; // брой топки извън петте цвята
  let totalPoints = 0; // общо точки от всички изтеглени цвята

  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let blackBalls = 0;

  for (let i = 1; i <= ballCount; i++) {
    let ballColor = input[i];  //Number(input[i]) - ако получаваме числа, а не стрингове
    // когато имаме да вземем неизвестн брой променливи от масива на всяко превъртане на loop - а
    // input[i] - колкото пъти се върти i, в случая 3, толкова пъти взимаме нова променлива
    if (ballColor == "red") {
      totalPoints += 5;
      redBalls += 1;
      // нарастващия брой топки от нула, на всяко превърнате се увеличават с 1
    } else if (ballColor == "orange") {
      totalPoints += 10;
      orangeBalls += 1;
    } else if (ballColor == "yellow") {
      totalPoints += 15;
      yellowBalls += 1;
    } else if (ballColor == "white") {
      totalPoints += 20;
      whiteBalls += 1;
    } else if (ballColor == "black") {
      totalPoints = Math.floor(totalPoints/ 2);
      blackBalls += 1;
    } else {
      totalDifferentBallCount += 1;
    }
  }
  console.log(`Total points: ${Math.floor(totalPoints)}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${totalDifferentBallCount}`);
  console.log(`Divides from black balls: ${blackBalls}`);
}
balls(["3", "white", "black", "pink"]);
