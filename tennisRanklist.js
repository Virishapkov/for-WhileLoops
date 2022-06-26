function tennisRanklist(input){
    let index = 0
    let countTournirs = Number(input[index])
    index++
    let points = Number(input[index])
    index++

    let currentPoints = 0
    let winCounter = 0
    let totalPoints = 0

    for(let i = 0; i < countTournirs; i++){
        let typeOfWin = input[index]
        index++
        
        switch(typeOfWin){
            case "W": currentPoints += 2000;
            winCounter++;break;
            case "F": currentPoints += 1200; break;
            case "SF": currentPoints += 720; break;
        }
       
    }

    totalPoints = points + currentPoints

    let averagePoints = currentPoints / countTournirs
    let winPercent = winCounter / countTournirs * 100

    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${winPercent.toFixed(2)}%`)
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

