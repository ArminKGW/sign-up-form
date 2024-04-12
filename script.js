const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

function validatePassword(){
    if(password.value === confirmPassword.value){
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else{
        password.setCustomValidity("passwords do not match");
        confirmPassword.setCustomValidity("passwords do not match");
    }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);