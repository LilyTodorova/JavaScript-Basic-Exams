function mountainRun(input) {
  let record = Number(input[0]); //Рекордът в секунди
  let distance = Number(input[1]); //Разстоянието в метри
  let timePerMetre = Number(input[2]); //Времето в секунди, за което изкачва 1 м.

  let delayTimes = Math.floor(distance / 50);
  let delay = delayTimes * 30;

  let totalSec = distance * timePerMetre + delay;
  if (totalSec < record) {
    console.log(`Yes! The new record is ${totalSec.toFixed(2)} seconds.`);
  } else {
    let diff = Math.abs(record - totalSec);
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
mountainRun(["1377", "389", "3"]);
