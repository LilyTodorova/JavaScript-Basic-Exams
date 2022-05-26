function aluminiumJoinery(input) {
    let alumJoinCount = Number(input[0]); 
    let typeOfJoinery = input[1]; 
    let deliveryOrNot = input[2]; 
    let price = 0;
    let price90X30 = 110;
    let price100X150 = 140;
    let price130X180 = 190;
    let price200X300 = 250;

    if (typeOfJoinery === "90X130") {
        if (alumJoinCount > 30 && alumJoinCount <= 60) {
            price = price90X30 * 0.95;
        } else if (alumJoinCount > 60) {
            price = price90X30 * 0.92;
        } else if (alumJoinCount >= 10 && alumJoinCount <= 30) {
            price = price90X30
        } else if (alumJoinCount < 10) {
            console.log(`Invalid order`);
        }
    } else if (typeOfJoinery === "100X150") {
        if (alumJoinCount > 40 && alumJoinCount <= 80) {
            price = price100X150 * 0.94;
        } else if (alumJoinCount > 80) {
            price = price100X150 * 0.9;
        } else if (alumJoinCount >= 10 && alumJoinCount <= 40) {
            price = price100X150
        } else if (alumJoinCount < 10) {
            console.log(`Invalid order`);
        }
    } else if (typeOfJoinery === "130X180") {
        if (alumJoinCount > 20 && alumJoinCount <= 50) {
            price = price130X180 * 0.93;
        } else if (alumJoinCount > 50) {
            price = price130X180 * 0.88;
        } else if (alumJoinCount >= 10 && alumJoinCount <= 20) {
            price = price130X180
        } else if (alumJoinCount < 10) {
            console.log(`Invalid order`);
        }
    } else if (typeOfJoinery === "200X300") {
        if (alumJoinCount > 25 && alumJoinCount <= 50) {
            price = price200X300 * 0.91;
        } else if (alumJoinCount > 50) {
            price = price200X300 * 0.86;
        } else if (alumJoinCount >= 10 && alumJoinCount <= 25) {
            price = price200X300
        } else if (alumJoinCount < 10) {
            console.log(`Invalid order`);
        }
    }

    let totalPrice = alumJoinCount * price;

    if (deliveryOrNot === "With delivery") {
        totalPrice += 60;
    } else if (deliveryOrNot === "Without delivery") {
        totalPrice = totalPrice;
    }
    if (alumJoinCount > 99) {
        totalPrice *= 0.96;
    }
    if (alumJoinCount >= 10) {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}
aluminiumJoinery(["0",
    "100X150",
    "With delivery"])



