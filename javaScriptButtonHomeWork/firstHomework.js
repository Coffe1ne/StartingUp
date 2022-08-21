let fullName = "Filip Mateski";
let age = 22;
let isEmployed = true;
let gender = "Male";
let isLiveInSkopje = true;

let info = {
    fullName,
    age,
    isEmployed,
    gender,
    isLiveInSkopje,
};

console.log(info)

let btn = document.getElementById('click');
btn.addEventListener('click', function(){alert(age)});