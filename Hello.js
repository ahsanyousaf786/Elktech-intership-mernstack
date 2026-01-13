// print hello world in node js to check node.js is working 
console.log('helo_world')



// taking input from user and printing string 

//Method 1: Beginners level 

// const readline = require ("node:readline")
// const input = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })


// input.question("Enter yoru age: ", (age)=> {
//     age = Number(age)

//     if (isNaN(age) || age<=0){
//         console.log("Please enter a valid age!")


//     } else if (age>=18){
//         console.log("you can drive ")

//     } else {
//         console.log("Underage!, You can not drive" )    
//     }
// input.close()

// })

// write in promise method 

const readline = require("node:readline")
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function askage() {
    return new Promise((resolve) => {
        input.question("Enter your age: ", (age) => {
            age = Number(age)

            if (isNaN(age) || age <= 0) {
                console.log("please enter a valid age!")
                resolve(askage())
            } else {
                resolve(age)
            }
        })
    })
}

askage().then((age)=>{
    if (age >= 18){
        console.log("you can drive")
    }else{
        console.log("underage! you cant drive")
    }
    input.close()
})