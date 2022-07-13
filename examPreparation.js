function examPreparation(input){
    let index = 0
    let maxBadGrades = Number(input[index])
    index++
    let command = input[index]
    index++
    let counterBadGrades = 0
    let sumGrade = 0
    let counterProblems = 0
    let isNeedABreak = false
    let lastProblem = ""


    while(command !== "Enough"){
        let taskName = command
        lastProblem = taskName
        let grade = Number(input[index])
        index++
        counterProblems++
        sumGrade += grade

        if(grade <= 4){
            counterBadGrades++
        }
        if(counterBadGrades === maxBadGrades){
            console.log(`You need a break, ${counterBadGrades} poor grades.`)
            isNeedABreak = true
            break;
        }

        command = input[index]
        index++

    }

    if(isNeedABreak === false){
        let avg = sumGrade / counterProblems
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${counterProblems}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
