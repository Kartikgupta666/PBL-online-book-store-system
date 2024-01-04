// login form

let loginForm = document.querySelector('#login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})



function login() {
    const Email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(Email, password)
        .catch((error) => {
            const errorMessage = error.message;
            const errorCode = error.code;
            console.log("Error :", errorMessage);
            // alert("Error :", errorCode);
        })
    let field = document.getElementById("email_field");
    field.innerHTML = Email;
}



function signUp() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {

            const errorMessage = error.message;
            console.log("Error : ", errorMessage);
            alert("Account Created successfully...")
        });

    var messagesRef = firebase.database().ref('users');
    saveMessage(email, password);
    function getInputVal(id) {
        return document.getElementById(id).value;

    }
    function saveMessage(email, pwd) {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            email: email,
            password: password
        });
    }

}






function forgotPass() {
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}
