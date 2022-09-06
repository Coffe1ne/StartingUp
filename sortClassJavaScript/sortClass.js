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
