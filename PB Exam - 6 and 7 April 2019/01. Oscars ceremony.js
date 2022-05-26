function oscarsCeremony(input) {
    let venueRent = Number(input[0]);

    let oscarsStatues = venueRent * 0.7
    let catering = oscarsStatues * 0.85
    let audio = catering/2

    let totalPrice = venueRent + oscarsStatues + catering + audio
    console.log(totalPrice.toFixed(2))

}
oscarsCeremony(["3500"])