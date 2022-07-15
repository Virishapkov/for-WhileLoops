function maximumNum(input){
    let index = 0
    let command = input[index]
    index++
    let max = Number.MIN_SAFE_INTEGER

    while(command !== "stop"){
        let number = Number(command)
        if(number > max){
            max = number
        }
        command = input[index]
        index++
    }
    console.log(max)
     
}
maximumNum([6, 78, 300, -7, 100, "stop"])