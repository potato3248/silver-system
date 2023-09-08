
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBNZfT2zCmnyKzZsiwqpSMrSCt3lMT4WOA",
      authDomain: "kwitter-773a7.firebaseapp.com",
      databaseURL: "https://kwitter-773a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-773a7",
      storageBucket: "kwitter-773a7.appspot.com",
      messagingSenderId: "13013888609",
      appId: "1:13013888609:web:1ecd7529697a952ad58420"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}



function send(){
   msg = document.getElementById("msg").value
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   })
   document.getElementById("msg").value=""
}

