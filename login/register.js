window.onload = pageLoad;
function pageLoad(){

    var form = document.getElementById("register")
    form.onsubmit = checkForm

}

//check password and re-type password
function checkForm() {

    var input = document.forms["register"]

     if(input.password.value != input.repassword.value)
    {
        alert("passwords does not match")
        return false;
    }

        else if(input.password.value == input.repassword.value)
    {
        alert("correct password")
        // return false;
    }
}