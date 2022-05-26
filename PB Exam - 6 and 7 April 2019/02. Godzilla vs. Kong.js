function godzillaVsKong(input) {
    let budget = Number(input[0])//Бюджет за филма
    let extras = Number(input[1])//Брой на статистите
    let clothesPerExtra = Number(input[2]);//Цена за облекло на един статист

    let decorPrice = budget * 0.1
    let totalClothesPrice = extras * clothesPerExtra
    if (extras >150) {
        totalClothesPrice *= 0.9
    }
    let totalMoneyNeeded = decorPrice + totalClothesPrice
    let diff = Math.abs(budget - totalMoneyNeeded)

    if(totalMoneyNeeded > budget) {
        
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])


