
// Домашка № 1 dz2

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