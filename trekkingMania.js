function trekkingMania(input){
    let index = 0
    let numberOfGroups = Number(input[index])
    index++

    let musala = 0
    let monblan = 0
    let kilimandjaro = 0
    let k2 =0
    let everest = 0
    let total = 0

    for(let i = 0; i < numberOfGroups; i++){
        let peopleInGroup = Number(input[index])
        index++
        total += peopleInGroup

        if(peopleInGroup <= 5){
            musala += peopleInGroup
        } else if(peopleInGroup >= 6 && peopleInGroup <= 12){
            monblan += peopleInGroup
        }else if(peopleInGroup>= 13 && peopleInGroup <= 25){
            kilimandjaro += peopleInGroup
        }else if(peopleInGroup>= 26 && peopleInGroup <= 40){
            k2 += peopleInGroup
        }else{
            everest += peopleInGroup
        }
    }

    let percMusala = musala / total *100
    let percMonblan = monblan / total *100
    let percKilimandjaro = kilimandjaro / total * 100
    let percK2 = k2 / total * 100
    let percEverest = everest / total * 100

    console.log(percMusala.toFixed(2) + "%")
    console.log(percMonblan.toFixed(2) + "%")
    console.log(percKilimandjaro.toFixed(2) + "%")
    console.log(percK2.toFixed(2) + "%")
    console.log(percEverest.toFixed(2) + "%")
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
