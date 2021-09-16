let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let form = document.getElementById("form")
let errorFirstName = document.getElementById("errorFirstName")
let errorLastName = document.getElementById("errorLastName")
let errorEmail = document.getElementById("errorEmail")
let errorPassword = document.getElementById("errorPassword")

firstName.addEventListener("blur",function(event){
    if (event.target.value===""){
        errorFirstName.textContent = "First Name cannot be empty"
    }else{
        errorFirstName.textContent=""
    }
})
lastName.addEventListener("blur",function(event){
    if (event.target.value===""){
        errorLastName.textContent = "Last Name cannot be empty"
    }else{
        errorLastName.textContent=""
    }
})
email.addEventListener("blur",function(event){
    if (event.target.value===""){
        errorEmail.textContent = "email cannot be empty"
    }else{
        errorEmail.textContent=""
    }
})
password.addEventListener("blur",function(event){
    if (event.target.value===""){
        errorPassword.textContent = "Passsword cannot be empty"
    }else{
        errorPassword.textContent=""
    }
})
form.addEventListener("submit",function(event){
    event.preventDefault();
})