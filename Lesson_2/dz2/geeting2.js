
// Домашка № 1 dz2
/*
const users = [
    {
        username: "Apollon",
        power: 1000,
        speed: 600
    },

    {
        username: "Poseidon",
        power: 2000,
        speed: 700
    },
    {
        username: "Afina",
        power: 3000,
        speed: 400
    },

    {
        username: "Zeus",
        power: 5000,
        speed: 900

    },

    {
        username: "Aid",
        power: 7000,
        speed: 800
    },
]

const filteredUsers = users.filter(user => user.power > 3000)
console.log(filteredUsers);
*/


// Домашка № 2 dz2

/*
const limit = 7
let counter = 0

while (counter <= limit) {
    let result = ""
    for (let i = 0; i < counter; i++) {
        result += "#"
    }
    console.log(result)
    counter++

} */

// Домашка № 3 dz2

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Bizz");
    } else {
        console.log(i);
    }
}


