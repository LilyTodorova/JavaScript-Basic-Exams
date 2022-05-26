function oscarsWeek(input) {
  let movie = input[0]; //"A Star Is Born", "Bohemian Rhapsody","Green Book", "The Favourite"
  let venue = input[1]; // "normal", "luxury" или "ultra luxury"
  let ticketsSold = Number(input[2]);
  let profit = 0;

  if (movie === "A Star Is Born") {
    switch (venue) {
      case "normal":
        profit = ticketsSold * 7.5;
        break;
      case "luxury":
        profit = ticketsSold * 10.5;
        break;
      case "ultra luxury":
        profit = ticketsSold * 13.5;
        break;
    }
  } else if (movie === "Bohemian Rhapsody") {
    switch (venue) {
      case "normal":
        profit = ticketsSold * 7.35;
        break;
      case "luxury":
        profit = ticketsSold * 9.45;
        break;
      case "ultra luxury":
        profit = ticketsSold * 12.75;
        break;
    }
  } else if (movie === "Green Book") {
    switch (venue) {
      case "normal":
        profit = ticketsSold * 8.15;
        break;
      case "luxury":
        profit = ticketsSold * 10.25;
        break;
      case "ultra luxury":
        profit = ticketsSold * 13.25;
        break;
    }
  } else if (movie === "The Favourite") {
    switch (venue) {
      case "normal":
        profit = ticketsSold * 8.75;
        break;
      case "luxury":
        profit = ticketsSold * 11.55;
        break;
      case "ultra luxury":
        profit = ticketsSold * 13.95;
        break;
    }
  }
  console.log(`${movie} -> ${profit.toFixed(2)} lv.`);
}
oscarsWeek(["The Favourite", "ultra luxury", "34"]);
