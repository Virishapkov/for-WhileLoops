function vacation(input){
    let index = 0
    let neededMoney = Number(input[index])
    index++
    let money = Number(input[index])
    index++
    counterSpend = 0
    let totalDays = 0
    

    while(money < neededMoney){
        let command = input[index]
        index++
        let spendSaveMoney = Number(input[index])
        index++
        totalDays++

        switch(command){
            case "save": money += spendSaveMoney; counterSpend = 0; break;
            case "spend": counterSpend++;  money -= spendSaveMoney;
            if(money < 0){
                money = 0
            }
            break;

        
        }

        if(counterSpend === 5){
            console.log(`You can't save the money.`)
            console.log(`${totalDays}`)
            break;
        }

        
        

    }

    if(money >= neededMoney){
        console.log(`You saved the money for ${totalDays} days.`)
    }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

