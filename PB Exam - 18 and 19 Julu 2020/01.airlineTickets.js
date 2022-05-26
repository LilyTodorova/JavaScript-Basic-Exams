function airlineTickets(input) {
  const airlinesName = input[0];
  const adultTicketCount = Number(input[1]);
  const childrenTicketCount = Number(input[2]);
  const netPriceAdultTicket = Number(input[3]);
  const priceService = Number(input[4]);

  let childrenTicketNetPrice = netPriceAdultTicket * 0.3;
  let totalChildrenTicketSold =
    (childrenTicketNetPrice + priceService) * childrenTicketCount;
  let totalAdultTicketSole =
    (netPriceAdultTicket + priceService) * adultTicketCount;
  let totalTicketSold = totalChildrenTicketSold + totalAdultTicketSole;
  let totalProfit = totalTicketSold * 0.2;
  console.log(`The profit of your agency from ${airlinesName} tickets is ${totalProfit.toFixed(2)} lv.`);
}
airlineTickets(["WizzAir", "15", "5", "120", "40"]);

/*
 */
