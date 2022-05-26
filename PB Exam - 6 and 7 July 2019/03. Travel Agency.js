function travelAgency(input) {
    let town = input[0];
    let extras = input[1];
    let vipDiscount = input[2];
    let daysCount = Number(input[3])

    let price = 0

    if (town === "Bansko" || town === "Borovets") {
        if (extras === "withEquipment") {
            if (vipDiscount === "yes") {
                price = 100 * 0.90;
            } else if (vipDiscount === "no") {
                price = 100;
            } else {
                console.log(`Invalid input!`)
            }
        } else if (extras === "noEquipment") {
            if (vipDiscount === "yes") {
                price = 80 * 0.95;
            } else if (vipDiscount === "no") {
                price = 80;
            } else {
                console.log(`Invalid input!`)
            }
        } else {
            console.log(`Invalid input!`)
        }
    } else if (town === "Varna" || town === "Burgas") {
        if (extras === "withBreakfast") {
            if (vipDiscount === "yes") {
                price = 130 * 0.88;
            } else if (vipDiscount === "no") {
                price = 130;
            } else {
                console.log(`Invalid input!`)
            }
        } else if (extras === "noBreakfast") {
            if (vipDiscount === "yes") {
                price = 100 * 0.93

            } else if (vipDiscount === "no") {
                price = 100
            } else {
                console.log(`Invalid input!`)
            }
        } else {
            console.log(`Invalid input!`)
        }
    } else {
        console.log(`Invalid input!`)
    }


    let totalPrice = price * daysCount

    if (daysCount < 1) {
        console.log(`Days must be positive number!`)
    }

    if (daysCount > 7 && totalPrice > 0) {
        let discountPrice = totalPrice - price * 1
        console.log(`The price is ${discountPrice.toFixed(2)}lv! Have a nice time!`)
    } else if (daysCount >= 1 && daysCount <= 7 && totalPrice > 0) {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`)
    }
}
travelAgency(["Gabrovo", "noBreakfast", "no", 3]);
