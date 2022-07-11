function books(input){
    let index = 0
    let favouriteBook = input[index]
    index++
    let nextBook = input[index]
    index++
    counter = 0
    isFound = false

    while(nextBook !== "No More Books"){
        

        if(nextBook === favouriteBook){
            isFound = true
            break;
        }
        counter++

        nextBook = input[index]
        index++
    }

    if(isFound === true){
        console.log(`You checked ${counter - 1} books and found it.`)
    }else{
        console.log(`The book you search is not here!`)
        console.log(`You checked ${counter - 1} books.`)
    }
    




}
books(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

