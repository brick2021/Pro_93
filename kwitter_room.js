// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUIuxmKHXNN142e6QguW-cG13OYCgvyXw",
    authDomain: "project93to96.firebaseapp.com",
    databaseURL: "https://project93to96-default-rtdb.firebaseio.com",
    projectId: "project93to96",
    storageBucket: "project93to96.appspot.com",
    messagingSenderId: "621355045321",
    appId: "1:621355045321:web:5b07dddebe60ddb0efd818"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("Roomname", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();