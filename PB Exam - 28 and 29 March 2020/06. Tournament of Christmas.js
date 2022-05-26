function tournamentOfChristmas(input) {
    let index = 0
    let daysOfTournament = Number(input[index])
    index++
    let totalMoney = 0
    let totalWindays = 0
    let totalLosedays = 0

    for (let i = 1; i <= daysOfTournament; i++) {
        let command = input[index]
        let win = 0
        let lose = 0
        let dayMoney = 0
        while (command !== "Finish") {
            //let sport = command
            index++
            let result = input[index]

            if (result === "win") {
                dayMoney += 20
                win++
            } else if (result === "lose") {
                lose++
            }
            index++
            command = input[index]
        }
        index++
        if (win > lose) {
            dayMoney *= 1.1
            totalWindays++
        } else if (win < lose) {
            totalLosedays++
        }
        totalMoney += dayMoney
    }

    if (totalWindays > totalLosedays) {
        let winMoney = totalMoney * 1.2
        console.log(`You won the tournament! Total raised money: ${winMoney.toFixed(2)}`)
    } else if (totalWindays < totalLosedays) {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }

}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
