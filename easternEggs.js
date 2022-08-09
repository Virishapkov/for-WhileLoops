function easternEggs(input){
    let index = 0
    let clients = Number(input[index])
    index++
    let totalSum = 0

    for(let i = 1; i <= clients; i++){
        let command = input[index]
        index++
        let sum = 0
        let counter = 0

        while(command !== "Finish"){
            let item = command
            

            switch(item){
                case "basket": sum += 1.50; counter++; break;
                case "wreath": sum += 3.80; counter++; break;
                case "chocolate bunny": sum += 7; counter++;break;
            }

           

            command = input[index]
            index++
        }

        if(counter % 2 ===0){
            sum *= 0.80
        }
            

       totalSum += sum
        console.log(`You purchased ${counter} items for ${sum} leva.`)

    }
    console.log(totalSum)
    let avgSpend = totalSum / clients
    console.log(avgSpend)

}
easternEggs(["2",
   "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])