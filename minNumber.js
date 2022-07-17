function minNumber(input){

    let element = input[0]
    let index = 0
    let min = Number.MAX_SAFE_INTEGER

    while( element !== "Stop"){
        let number = Number(element)
        if(number < min){
            min = number
        }
        index++
        element = input[index]
        
    }
    console.log(min)

}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])
