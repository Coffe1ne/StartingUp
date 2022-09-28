// Zadaca 1:
let library = [
    { author:"Bill Gates", title:"The Road Ahead", libraryID:1254},
    { author:"Steve Jobs", title:"Walter Isaacson", libraryID:4264},
    { author:"Suzanne Collins", title:"Mockingjay", libraryID:3245},
]
// Funkcija koja gi sortira nizite po ima na title.
library.sort((a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    else {
        return -1;
    }
})
console.log(library);

// Niza vo koja gi ima samo iminjata na avtorite.
let authors = library.map(a => {
    return (a.author);
});
console.log(authors);

// Fukncija koja vrakja niza kade shto ima ID 1254.
let arrayByID = library.find(a => {
    if (a.libraryID === 1254) {
        return 1
    }
})
console.log(arrayByID);

// Zadaca 2:
class Car {
    constructor(brand, year, hp){
        this.brand = brand;
        this.year = year;
        this.hp = hp;
    }
    age(x) {
        return x - this.year;
    }
    userPermission(){
        for(let i = 0; i < this.year.length; i++) {
            if(this.year[i] > 25) {
                return (this.brand[i] + " can drive any car");
            } else {
                return (this.brand[i] + " limited to 105hp");
            }
        }
    }
}
let date = new Date();
let year = date.getFullYear();

let myCar = new Car("BMW", 2015, 380);
console.log(myCar.age(year));

let users = [
    { fullName:"Bill Gates", age:"75"},
    { fullName:"Steve Jobs", age:"40"},
    { fullName:"Suzanne Collins", age:"17"},
];

let userName = users.map(function(name){
    return name.fullName;
})

let userAge = users.map(function(age){
    return age.age
})

let permission = new Car(userName, userAge);
console.log(permission.userPermission(users));