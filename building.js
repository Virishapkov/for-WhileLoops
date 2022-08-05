function building(input) {
    let floorMax = Number(input[0])
    let aptMax = Number(input[1])


    for (let floor = floorMax; floor >= 1; floor--) {
        let floorAptString = ""
        for (let apt = 0; apt < aptMax; apt++) {
           
            if (floor === floorMax) {
                floorAptString += `L${floor}${apt} `
            } else if (floor % 2 === 0) {
                floorAptString += `O${floor}${apt} `
            } else {
                floorAptString += `A${floor}${apt} `

            }

            
        }

        console.log(floorAptString)
    }

}
building(["6", "4"])