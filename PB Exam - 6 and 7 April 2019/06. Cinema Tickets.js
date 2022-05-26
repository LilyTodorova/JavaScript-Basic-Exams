function cinemaTickets(input) {
    let index = 0;
    let command = input[index]//до получаване на командата "Finish" - име на филма
    let allTickets = 0
    let standard = 0
    let student = 0
    let kid = 0

    while( command !== "Finish") {
        let movie = command
        index++
        let freeSeats = Number(input[index])
        index++
        let tickets = input[index] 
        let totalTickets = 0       
        while( tickets !== "End" ) {
            if(tickets === "student") {
                student++
            } else if( tickets === "standard") {
                standard++
            } else if (tickets === "kid") {
                kid++
            }
            totalTickets ++
            if (totalTickets >= freeSeats) {
                break;
            }
            index++
            tickets = input[index]     
        }
        allTickets += totalTickets
        let percent = totalTickets * 100 /freeSeats
        console.log(`${movie} - ${percent.toFixed(2)}% full.`)
        index++
        command = input[index]
    }
    let percentStudent = student * 100 / allTickets
    let percentStandard = standard * 100 / allTickets
    let percentKid = kid * 100 / allTickets
    console.log(`Total tickets: ${allTickets}`)
    console.log(`${percentStudent.toFixed(2)}% student tickets.`)
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`)
    console.log(`${percentKid.toFixed(2)}% kids tickets.`)
    
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

