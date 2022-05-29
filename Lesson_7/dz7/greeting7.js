// Урок 7. (Домашка):



class House{
    constructor(height, color, doors, windows, plot, toilet, hall, basement, attic, gates){

    this.height = height;
    this.color = color;
    this.doors = doors;
    this.windows = windows;
    this.plot = plot;   
    this.toilet = toilet;
    this.hall = hall;   
    this.basement = basement;
    this.attic = attic;    
    this.gates = gates;
   
}
    

}

class school extends House{
    constructor(height, color, doors, windows,plot, toilet, hall, basement, attic, gates, mainentrance, vestibule, classes, gym, wardrobe){

        super(height, color, doors, windows, plot, toilet, hall,  basement, attic, gates)
                
        this.mainentrance = mainentrance;
        this.vestibule = vestibule;
        this.classes = classes;
        this.gym = gym;
        this.wardrobe = wardrobe;
    }


    purpose(){
        console.log(`school height: ${this.height}\nschool color: ${this.color}\nschool doors: ${this.doors}`)
    } 
}

const Myschool = new school(
    5,
    "green",
    15,
    40,
    1,
    7,
    1,
    1,
    1,
    2,
    1,
    1,
    25,
    1,
    1

)



Myschool.purpose()

console.log(Myschool)
