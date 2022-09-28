// 1. Funkcija koja dodava eden row i dve koloni, dvapati e povikana za da ima dve redici!
function insertTable() {
    let row = document.getElementById("table").insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "bla";
    cell2.innerHTML = "bla";
}
insertTable()
insertTable()
// 2.
let root = document.getElementById("list");
root.style.color = 'green';
let list = root.childNodes[1];
let next = list.nextElementSibling;
next.style.color = 'red';
let third = next.nextElementSibling;
third.style.color = 'blue';
// 3.
let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "grey";
    }
// 4.
function submitInput(){
    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    console.log(fName, lName);
    document.getElementById("fullName").innerHTML = fName + " " + lName;
}
