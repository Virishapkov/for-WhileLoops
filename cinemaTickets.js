function cinemaTickets(input) {
    let index = 0
    let command = input[index]
    index++
    let totalTickets = 0
    let studentCounter = 0
    let standardCounter = 0
    let kidsCounter = 0




    while (command !== "Finish") {
        let movie = command
        let freePlaces = Number(input[index])
        index++

        let tempCommand = input[index]
        index++
        let ticketCounter = 0

        while (tempCommand !== "End") {
            let typeSoldTickets = tempCommand

            totalTickets++

            ticketCounter++

            switch (typeSoldTickets) {
                case "student": studentCounter++; break;
                case "standard": standardCounter++; break;
                case "kid": kidsCounter++; break;
            }

            if (ticketCounter >= freePlaces) {
                break;
            }

            tempCommand = input[index]
            index++

        }
        let fullnessP = ticketCounter / freePlaces * 100
        console.log(`${movie} - ${fullnessP.toFixed(2)}% full.`)

        command = input[index]
        index++
    }

    let studentP = studentCounter / totalTickets * 100
    let standardP = standardCounter / totalTickets * 100
    let kidP = kidsCounter / totalTickets * 100
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${studentP.toFixed(2)}% student tickets.`)
    console.log(`${standardP.toFixed(2)}% standard tickets.`)
    console.log(`${kidP.toFixed(2)}% kids tickets.`)



}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

