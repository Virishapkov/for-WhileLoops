function cleverLily(input){
    let age = Number(input[0])
    let washingMachine = Number(input[1])
    let toyPrice = Number(input[2])

    let money = 0
    let toy = 0
    let increasingMoney = 10

    for(i = 1; i <= age; i++){
        if( i % 2 == 0){
            
            money = money + increasingMoney
            increasingMoney = increasingMoney + 10
            money = money - 1
            
            

        }else{
            toy = toy + 1
        }
    }

    let totalMoney = toy * toyPrice + money
    let diff = Math.abs(washingMachine - totalMoney)

    if(totalMoney >= washingMachine){
        console.log( `Yes! ${diff.toFixed(2)}`)
    }else{
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["21",
"1570.98",
"3"])


