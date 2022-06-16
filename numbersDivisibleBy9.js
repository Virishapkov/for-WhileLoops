function numbersBy9(input){
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let sum = 0
    let result = ""

    for(let i = firstNum; i <= secondNum; i++){
        if(i % 9 == 0){
           sum += i
           result += i + "\n"
           
            
        
         }
    }

    console.log("The sum: " + sum)
    console.log(result)
    


    
}
numbersBy9([100, 200])