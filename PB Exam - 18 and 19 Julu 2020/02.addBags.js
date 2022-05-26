function addBags(input) {
    const bagsPriceAbove20Kg = Number(input[0]);
    const totalBagsInKilograms = Number(input[1]);
    const daysBeforeTravel = Number(input[2]);
    const bagsCount = Number(input[3]);
    let totalBagsPrice = 0

    if (totalBagsInKilograms <10) {
        totalBagsPrice = bagsPriceAbove20Kg * bagsCount * 0.2;
    } else if (totalBagsInKilograms >= 10 && totalBagsInKilograms <=20) {
        totalBagsPrice = bagsPriceAbove20Kg * bagsCount * 0.5;
    } else {
        totalBagsPrice = bagsPriceAbove20Kg * bagsCount
    } 
    if (daysBeforeTravel > 30) {
        totalBagsPrice = totalBagsPrice * 0.10 + totalBagsPrice;
    } else if (daysBeforeTravel >= 7 && daysBeforeTravel <= 30) {
        totalBagsPrice = totalBagsPrice * 0.15 + totalBagsPrice;
    } else {
        totalBagsPrice = totalBagsPrice * 0.4 + totalBagsPrice
    }
    console.log(`The total price of bags is: ${totalBagsPrice.toFixed(2)} lv. `)

}
addBags(["25.50", "5", "36", "6"]);

/*



*/
