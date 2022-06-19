function oscars(input){
    let index = 0
    let nominatedActor = input[index]
    index++
    let academyPoints = Number(input[index])
    index++
    let juryCount = Number(input[index])
    index++

    for(let i = 1; i <= juryCount; i++){
        let name = input[index]
        index++
        let temporaryPoints = Number(input[index])
        index++

        academyPoints = academyPoints + (name.length * temporaryPoints) / 2

        if(academyPoints > 1250.5){
            console.log(`Congratulations, ${nominatedActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
            break;
        }
    }

    let diff = Math.abs(1250.5 - academyPoints)

    if(academyPoints <= 1250.5){
        console.log(`Sorry, ${nominatedActor} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
