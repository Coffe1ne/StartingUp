function showError (errorElement, errorMessage)



let form = document.forms["signUpForm"];
form.onsubmit = function(event){
    if (form.email.value === ""){
        showError("email-error", "Please enter email")
        return false;
    }
}