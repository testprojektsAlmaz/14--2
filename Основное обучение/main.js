// Урок № 1.

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



//Урок № 2.


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





// Урок № 3.




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
/*
const user = {

    first_name: "Belek",

    last_name: "Belekov"
}

const anonum = function (user) {
    console.log(user)
}
anonum(user);
*/
/*
function numbers(number1, number2) {
    if(number1 > number2) {
        console.log("Первое число больше!")
    } else if(number1 < number2){
        console.log("Второе число больше!")
    }*/
/* else{
     console.log("Они равны!")
 }
}*/
/*
const number = {
    number1: 5,
    number2: 2
} */

// numbers( 3, 6 ) 


/*
function numbers(number1, number2) {
    if(number1 < number2) {
        console.log(number1)
    } else if(number1 > number2) {
        console.log(number2)
    }
} 

const number = {
    number1: 15,
    number2: 17
} 


numbers(number.number1, number.number2); */


// Вычисление длины массива.

/*
function twoMass(arr1, arr2) {
    console.log(arr1, arr2)
    if(arr1.length > arr2.length){
        console.log(arr1 > arr2)
    } else if(arr1.length < arr2.length){
        console.log(arr1 < arr2)
    }else {
        console.log( "===" )
    }
}

    const arr1 = [12123, 123, 1232, 33232]

    const arr2 = [33232, 43, 34]

    twoMass(arr1, arr2)  */





// Урок № 4. 


/*const blocks = document.getElementsByClassName('block');
console.log(blocks)

const block3 = document.getElementById('block3');*/

//block3.className = "changedClass"

//block3.classList.add("changedCl")

//block3.classList.remove("this")


//console.log(block3.classList)

//console.log(document)

/*

block3.onclick = () => {
    block3.classList.toggle("active")

}

const block = document.querySelectorAll(".block")

console.log(block)

*/


/*
const button = document.getElementById("button");

const input = document.getElementById("input");

function createNewDiv() {

    const div = document.createElement('div')

    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete"
    deleteButton.onclick = (event) => {
        event.path[1].remove()
    }

    div.setAttribute('class', 'block')
    div.innerText = input.value
    div.append(deleteButton)
    document.body.append(div)

        input.value = " "
}

button.onclick = createNewDiv;*/




/*
button.onclick = (event) => {
    
    console.log(event)

    console.log("Clicked")

}


input.onchange = (event) => {
    
    console.log(event)

    console.log(event.target)

    console.log(event.target.value)

}  */



// Урок № 5.

/*
const list = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input');


function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list');

    for (let i = 0; i < list.length; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p);

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement('button');
        changeButton.innerText = "change";


        
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "delete";
      




        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div);

    }




    const form = document.querySelector('.form');

    document.querySelector('.list').remove();
    
    form.append(mainDiv);
}



addButton.onclick = function () {
    const obj = {
        id: list.length + 1,
        text: input.value
    };
    list.push(obj);
    console.log(list);
    render();
}; */


    







/*
const list = [];

const addButton = document.getElementById('button')
const input = document.getElementById('input')


function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')

    for (let i = 0; i < list.length; i++) {
        const div = document.createElement("div");
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement("button");
        changeButton.innerText = "change";

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("class", 'delete');
        deleteButton.innerText = "delete";
        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div)
    }
    const form = document.querySelector('.form');

    form.append(mainDiv)
}

addButton.onclick = function () {
    const obj = {
        id: list.length + 1,
        text: input.value
    }
    list.push(obj)
    console.log(list)
    render();
}; */



// Урок № 6.

//console.log(a)
//const a = "Hello"

//let b = 10
//es5
//console.log(b)

//var c = "ghghghghghg"

 //c = "adf"

//console.log(c)


// es6, string expression-интерполляция строк.




//const last_name = "Barbaro";
//const first_name = "Jack";

//console.log(first_name,last_name);

//console.log(first_name + ' ' + last_name);

//console.log(`full Name: ${first_name} $//{last_name}`);


//const getFullName = (user) => {
   // return"First Name: " + user.first_name + '\n' + "Last Name: " + user.last_name

   // return `First Name: ${user.first_name} //\n Last Name: ${user.last_name}`
//}
 //const user = {
   // first_name: "Atay",
    //last_name: "Zaplach" 
 //}

 //console.log(getFullName(user));


 // Spread operator


 //const mass = [1,2,3,4,5]

 //const mass2 = [...mass]

 //for(let i = 0; i < mass.length; i++){
     //mass2.push(mass[i])
 //}

//console.log(mass2);

//const obj =  {
    //username: "Beka",

    //last_name: "Beckmamatov",

    //age: 16,

    //full_name: "Beka Beckmamatov" 

//}

//const obj2 = [{...obj}]

//console.log(obj2)


// Деструктуризация


//const props = {
   // onSubmit: () => {
        //console.log("Submit")
   // },
    //data: [
        //{
            //key: "value"
        //},
        //{
           // key2: "value2"
       // },
        //{
           // key3: "value3"
        //}
    //]

//}

//console.log(props.data[1].key2)



//const  {data, onSubmit} = props;

//console.log(props) ;

//onSubmit();





