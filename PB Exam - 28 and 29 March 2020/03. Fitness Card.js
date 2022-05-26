function fitnessCard(input) {
    let money = Number(input[0]); //Сумата, с която разполагаме
    let sex = input[1]; //'m' за мъж и 'f' за жена
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0

    if (sex === "m") {
        switch (sport) {
            case "Gym": price = 42;
                break;
            case "Boxing": price = 41;
                break;
            case "Yoga": price = 45;
                break;
            case "Zumba": price = 34;
                break;
            case "Dances": price = 51;
                break;
            case "Pilates": price = 39;
                break
        }
    } else if (sex === "f") {
        switch (sport) {
            case "Gym": price = 35;
                break;
            case "Boxing": price = 37;
                break;
            case "Yoga": price = 42;
                break;
            case "Zumba": price = 31;
                break;
            case "Dances": price = 53;
                break;
            case "Pilates": price = 37;
                break
        }
    }
    if (age <= 19) {
        price *= 0.8;
    } else {
        price = price
    }

    if (money >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let diff = Math.abs(price - money);
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`)
    }
}
fitnessCard(["100",
"m",
"15",
"Pilates"])


