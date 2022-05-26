function movieRatings(input) {
    let index = 0
    let movieCount = Number(input[index]);//Брой филми, които си е набелязала Деси
    index++
    let maxRate = Number.MIN_SAFE_INTEGER
    let minRate = Number.MAX_SAFE_INTEGER
    let maxRateMovie = ""
    let minRateMovie = ""
    let totalMovies = 0
    let totalRate = 0
    while (totalMovies < movieCount) {
        let movie = input[index];
        totalMovies++
        index++
        let rate = Number(input[index])
        totalRate += rate
        if (rate > maxRate) {
            maxRate = rate;
            maxRateMovie = movie
        }
        if (rate < minRate) {
            minRate = rate;
            minRateMovie = movie
        }
        index++
    }
    console.log(`${maxRateMovie} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${minRateMovie} is with lowest rating: ${minRate.toFixed(1)}`);
    let averageScore = totalRate / movieCount
    console.log(`Average rating: ${averageScore.toFixed(1)}`)

}
movieRatings(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"])
