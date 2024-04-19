const firebaseConfig = {
  apiKey: "AIzaSyCdCwBdFU76Qp-EA2vB8klCcI606dpknew",
  authDomain: "hidden-caf0c.firebaseapp.com",
  databaseURL: "https://hidden-caf0c-default-rtdb.firebaseio.com",
  projectId: "hidden-caf0c",
  storageBucket: "hidden-caf0c.appspot.com",
  messagingSenderId: "983923514126",
  appId: "1:983923514126:web:e105f1f51f6aa9cb2e155f"
};
firebaseConfig.initializeApp(firebaseConfig);

const database = firebase.database()

function save() {
  var placeName= document.getElementById("placeName").value
  var placeDescription = document.getElementById("placeDescription").value
  var placeImage = document.getElementById("placeImage").value
  var placeLocation = document.getElementById("placeLocation").value
  database.ref('placeName/' + placeName).set({
    placeDescription: placeDescription,
    placeImage:placeImage,
    placeLocation:placeLocation
  })

  alert('Saved')
}