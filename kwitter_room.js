const firebaseConfig = {
    apiKey: "AIzaSyD02-NsCNguTOSpnGgMAnfo-x_LUaKw_kc",
    authDomain: "kwiiter-fac59.firebaseapp.com",
    databaseURL: "https://kwiiter-fac59-default-rtdb.firebaseio.com",
    projectId: "kwiiter-fac59",
    storageBucket: "kwiiter-fac59.appspot.com",
    messagingSenderId: "386018160196",
    appId: "1:386018160196:web:6e61f9eb0c8eb32b971611"
  };
  

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log(room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML = row;
    
    });});}
getData()

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}