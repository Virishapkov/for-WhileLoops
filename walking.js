function walking (input){
    let index = 0
    let goalSteps = 10000
    let command = input[index]
    index++
    let totalSteps = 0

    while(command !== "Going home"){
      let currentSteps = Number(command)
        totalSteps += currentSteps

        let diff = Math.abs(totalSteps - goalSteps)

       if(totalSteps >= goalSteps){
           console.log(`Goal reached! Good job!`)
           console.log(`${diff} steps over the goal!`) 
            break;
        }

        command = input[index]
        index++

    }

    if(command === "Going home"){
        let steps = Number(input[index])
       index++
        totalSteps += steps

        let diff = Math.abs(totalSteps - goalSteps)    
        if(totalSteps >= goalSteps){
            console.log(`Goal reached! Good job!`)
            console.log(`${diff} steps over the goal!`)
        } else{
            console.log(`${diff} more steps to reach goal.`)
        }
        
        
    }

    

}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

