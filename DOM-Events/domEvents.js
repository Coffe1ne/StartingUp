1.
function submitInput() {
let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value;
let email = document.getElementById('mail').value;
let age = document.getElementById('age').value;
let address = document.getElementById('address').value;
    if(fName !== "" &&
        lName !== "" &&
        email !== "" &&
        age !== "" &&
        address !== "") {
            alert("ok")
        }
        else {
            alert("Empty field, please fill in.")
    }
}
// 2.
const form = document.getElementById('form');

function myF() {
    let fName = document.getElementById('fName').value; 
    let lName = document.getElementById('lName').value;
    let email = document.getElementById('mail').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;

    let fNameError = document.getElementById('errorfName');
    let lNameError = document.getElementById('errorLName');
    let errorMail = document.getElementById('errorMail');
    let errorAge = document.getElementById('errorAge');
    let errorAddress = document.getElementById('errorAddress');
    if(fName == "") {
        fNameError.innerHTML = "Input required";
        return false;
    }
    if(lName == "") {
        lNameError.innerHTML = "Input required";
        return false;
    }
    if(email == "") {
        errorMail.innerHTML = "Input required";
        return false;
    }
    if(age == "") {
        errorAge.innerHTML = "Input required";
        return false;
    }
    if(address == "") {
        errorAddress.innerHTML = "Input required";
        return false;
    }
}

function key() {
    document.getElementById('errorfName').innerHTML = "";
    document.getElementById('errorLName').innerHTML = "";
    document.getElementById('errorMail').innerHTML = "";
    document.getElementById('errorAge').innerHTML = "";
    document.getElementById('errorAddress').innerHTML = "";
}
// 3.
let counter = 0;

document.getElementById('fName').addEventListener("click", function () {
  counter++;
  console.log(counter);
});

document.getElementById("reset").addEventListener("click", function () {
  counter = 0;
});
console.log(counter);