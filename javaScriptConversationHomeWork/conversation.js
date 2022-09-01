// 1.Kreirav funkcija kade shto vo nea ima varijable index, koja ja bara pozicijata na zaednickiot value od a i b.
// Posle toa ja brishe pozicijata(indexot) za edno i ja vrakja nizata.
let arr = [1, 2, 3, 4, 5, 6, 7 ];
let delNum = 5;
function remove (a, b) {
    let index = a.indexOf(b)
    a.splice(index, 1)
    return a;
}

console.log(remove(arr, delNum));

// 2. Copy paste od net :)
let digits = 12345123123;
function countDigits(num) {
    let count = 0;
    if (num >= 1) ++count;
  
    while (num / 10 >= 1) {
      num /= 10;
      ++count;
    }
  
    return count;
}

console.log(countDigits(digits));

// 3. Kreirav funkcija so eden parametar kade shto vo samata funkcija kreirav promenliva koja kje bide ednakva na 
// vrednosta koja zapocnuva na index 0, loop koj vrti niz cela niza od brojki, i funkcija kade shto ja proveruva sekoja vrednost
// i od koga kje zavrshi loopot ja vrakja promenlivata largest so najgolemiot broj.
let numArr = [12, 34, 1, 514, 1002, 5, -1000];
function largestNum (a) {
    let largest = a[0];
    for (let i = 0; i < numArr.length; i++) {
        if(largest < numArr[i]){
            largest = numArr[i];
        }
    }
    return largest
}

console.log(largestNum(numArr));