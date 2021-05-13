const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const usernamecheck = urlParams.get("username")
const passwordcheck = urlParams.get("password")

console.log(usernamecheck)
console.log(passwordcheck)

window.onload = pageLoad;
function pageLoad() {

    var login = document.getElementById("myLogin")
    login.onsubmit = checkLogin;
}

//check password and username
function checkLogin() {
   
    var username = document.forms["myLogin"]["username"]
    var password = document.forms["myLogin"]["password"]

    if (usernamecheck != username.value || passwordcheck != password.value || usernamecheck == null || usernamecheck == '' || passwordcheck == null || passwordcheck == '' ) {
    
        alert("username or password is incorrect")

    }

    else if (usernamecheck == username.value && passwordcheck == password.value && usernamecheck != null || usernamecheck != '' || passwordcheck != null || passwordcheck != ''){

        alert("login successful")
        window.location.href = "../index.html"
        return false;

    }

}