function graduation(input){
    let name = input[0]
    let grades = 1
    let sum = 0
    let excludedCounter = 0
    let index = 0

    while(grades <= 12){
        index++
        let grade = Number(input[index])
        if(grade < 4){
            excludedCounter++
            if(excludedCounter > 1){
                console.log(`${name} has been excluded at ${grades} grade`)
                
            }
            
            continue;
            
        }else{
            sum += grade
             grades++
        }
        
    }
    if(excludedCounter <= 1){
        let average = sum / 12
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
    
    

}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

