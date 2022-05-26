function birthdayParty(input) {

    let venueRent =  Number(input); // без index[0] или input[0]
    let cakePrice = venueRent * 0.2
    let drinksPrice = cakePrice * 0.55
    let animatorPrice = venueRent / 3
    
    let totalBudget = venueRent + cakePrice + drinksPrice + animatorPrice

    console.log(totalBudget.toFixed(1))


}
birthdayParty([2250])