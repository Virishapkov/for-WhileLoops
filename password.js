function password(input){
    let username = input[0]
    let password = input[1]
    let data = input[2]
    let index = 3

    while(password !== data){
        data = input[index]
        index++

    }
    console.log(`Welcome ${username}!`)

}
password(["Nakov",
"1234","1234"
])

