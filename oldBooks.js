function oldBooks(input){
    let index = 0
    let favouriteBook = input[index]
    index++
    let nextBook = input[index]
    index++
    let bookChecker = 1
    let isFoundBook = false

    while(nextBook !== "No More Books"){
        
       

        if(favouriteBook === nextBook){
            isFoundBook = true
            break;
        }
        bookChecker++
        nextBook = input[index]
        index++
    }
    if(isFoundBook === false){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${bookChecker - 1} books.`)
    }else{
        console.log(`You checked ${bookChecker - 1} books and found it.`)
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



