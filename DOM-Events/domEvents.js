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

function blur() {
let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value;
let email = document.getElementById('mail').value;
let age = document.getElementById('age').value;
let address = document.getElementById('address').value;
    if(fName == "") {
        document.querySelector(".errorfName").innerHTML = "Please Fill";
    }
}