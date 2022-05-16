// Урок №1.

// Переменные

/*
const a = "a" // string

const b = 20 // number

const bool = true; // boolean

const bool2 = false; //

console.log(typeof a)
*/   /*
const obj = {
    key: "value",
    username: "Alex",
    data: {
        first_name: "Jack",
        last_name: "Jayson"

    }
}

console.log(obj.data)  */

//Массивы

/*
const arr = ["Alex", true, false, 34]

console.log(arr[0])

const arr2 = [
    {
        key: "value"
    },
    {
        key: "value"
    },
    {
        key: "value3"
    },
]
console.log(arr2[2].key)  */

/*
const name = prompt("Как вас зовут?");

console.log("Hello " + name)
*/

//const name = alert("Вам запрещено")
/*
const first_number = prompt("Введите число");
const last_number = prompt("Введите второе число");

if (first_number > last_number) {

    console.log(first_number + ">" + last_number)
} else if (first_number < last_number) {
    console.log(first_number + "<" + last_number)
} else {
    console.log(first_number + "=" + last_number)
}

*/


/*
const a = "afad";

let c = 235;

 console.log(c)

c = 23;


console.log(c)

*/



//Урок №2.


/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

console.log(arr[9]);

let obj = {
    username: "Jone",
    followers: [
        {
            username: "Alex"
        },
        {
            username: "Jone",
            followers: [
                {
                    username: "Jack"
                },
                {
                    username: "Jack2"
                },
                {
                    username: "Jack"
                }
            ]
        }

    ]
}

console.log(obj.followers[1].followers[1].username);     */
/*
const array = [

    {
        username: "Jack",
        full_name: "Barbarossa"
    },
    {
        username: "Jack",
        full_name: "Barbarossa"
    },

    {
        username: "Jack",
        full_name: "Barbarossa"
    },
    {
        username: "Jack",
        full_name: "Barbarossa"
    },

    {
        username: "Jack",
        full_name: "Barbarossa"
    },

    {
        username: "Jack",
        full_name: "Barbarossa"
    },

]


let i = 0; // инкриментация i = i + 1
i++
i++
i++
//console.log(i);

//for (let i = 0; i < array.length; i++) {
//    console.log(array[i]);
//} //индексы для вывода элементов.


//for (let user of array) {
//  console.log(user);
//}
*/

/*
const obj = {

    key1: "h1",
    key2: "h2",
    key3: "h3",
    key4: "h4",
    key5: "h5",
    key6: "h6",
    key7: "h7",
    key8: "h8",
    key9: "h9",
    key10: "h10",


}*/
//console.log(obj.key2);
/*
for (let key in obj) {
    //  console.log(obj)
    console.log(obj[key])

} */
/*
let i = 0;
while (i < 5) {
    console.log("Hello")
     // Консоль будет бесконечно выводить результат, остановить можно только перезагрузкой.
}

console.log(i);  */



//Методы


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
console.log(filteredUsers); */




/*
const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers); */

/*
for (let user of users) {
    if (user.salary > 500) {
        console.log(user)
    }

} */





// Урок №3




/*
function sayHello() {
    console.log("Hello");
}
sayHello();*/

/*
function getFullName(user , age, user2) {


     if (age < 18) {
    console.log("CLOSE")

}
   else {
 console.log(user.last_name, user2.last_name + " " + "OPEN")
}

}
 
    const user = {

        first_name: "Belek",

        last_name: "Belekov"
    }



const user2 = {
 
    first_name: "Nurlan",
 
    last_name: "kaumov"
 
 
 
}


getFullName(user);*/

























