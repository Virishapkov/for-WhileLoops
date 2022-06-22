function salary(input){
    let index = 0
    let openTabs = Number(input[index])
    index++
    let curentSalary = Number(input[index])
    index++

    for( i = 1; i <= openTabs; i++){
        let website = input[index]
        index++

        switch(website){
            case "Facebook": curentSalary = curentSalary - 150;break;
            case "Instagram": curentSalary= curentSalary - 100; break;
            case "Reddit": curentSalary = curentSalary - 50; break;


        }

        if(curentSalary <= 0){
            console.log(`You have lost your salary.`)
            break;
        }
        
        
    }

    if(curentSalary > 0){
        console.log(Math.trunc(curentSalary))
    }

    

}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


