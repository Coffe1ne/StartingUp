// funkcijata koja ima 3 parametri, zapishana so dve ednakvi za da moze da sporedi vrednost pomegju int i string.
function equalityBetween (a, b, c) {
    if (a == b || b == c || a == c){
        return true;
    }
    else {
        return false;
    }
}
let number1 = 4
let number2 = 9
let number3 = "4"
// console.log ja koristam funkcijata na kreiranite variabli
console.log(equalityBetween(number1,number2,number3));

// Ne mi funkcioniraat prvite dva uslovi kako shto treba. direktno ide na else i ne znam zashto.
function theMonth (randomMonth){
    let daysWith31 = ["1", "3", "5", "7", "8", "10", "12"];
    let daysWith30 = ["4", "6", "9", "11"];
    randomMonth = prompt("Enter number of Month")
    if (daysWith31.includes(randomMonth)){
        return "Has 31"
    }
    else if (daysWith30.includes(randomMonth)){
        return "Has 30"
    }
    else{
        let year = prompt("The Year");
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return "Has 29";
        } 
        else {
        return "Has 28";
    }
    }
}

console.log(theMonth())