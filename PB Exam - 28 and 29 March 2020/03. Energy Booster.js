function energyBooster(input) {
  let fruit = input[0]; //"Watermelon", "Mango", "Pineapple" или "Raspberry"
  let size = input[1]; //"small" или "big"
  let orderedSets = Number(input[2]); //Брой на поръчаните сетове

  let price = 0;
  let totalGels = 0;

  if (fruit === "Watermelon") {
    if (size === "small") {
      totalGels = orderedSets * 2;
      price = totalGels * 56;
    } else if (size === "big") {
      totalGels = orderedSets * 5;
      price = totalGels * 28.7;
    }
  } else if (fruit === "Mango") {
    if (size === "small") {
      totalGels = orderedSets * 2;
      price = totalGels * 36.66;
    } else if (size === "big") {
      totalGels = orderedSets * 5;
      price = totalGels * 19.6;
    }
  } else if (fruit === "Pineapple") {
    if (size === "small") {
      totalGels = orderedSets * 2;
      price = totalGels * 42.1;
    } else if (size === "big") {
      totalGels = orderedSets * 5;
      price = totalGels * 24.8;
    }
  } else if (fruit === "Raspberry") {
    if (size === "small") {
      totalGels = orderedSets * 2;
      price = totalGels * 20;
    } else if (size === "big") {
      totalGels = orderedSets * 5;
      price = totalGels * 15.2;
    }
  }

  if (price >= 400 && price <= 1000) {
    price *= 0.85;
  } else if (price > 1000) {
    price *= 0.5;
  } else {
    price = price;
  }

  console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(["Mango",
"big",
"25"])


