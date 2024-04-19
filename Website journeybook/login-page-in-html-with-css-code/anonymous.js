const firebaseConfig = {
    apiKey: "AIzaSyCX3S-tGekHD0NzEQDhGVkBcHFZq-DFBw4",
    authDomain: "journey-book-2e057.firebaseapp.com",
    databaseURL: "https://journey-book-2e057-default-rtdb.firebaseio.com",
    projectId: "journey-book-2e057",
    storageBucket: "journey-book-2e057.appspot.com",
    messagingSenderId: "598733255007",
    appId: "1:598733255007:web:5661e06bc6addf446046ea",
    measurementId: "G-8WXL648EYQ"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB=firebase.database().ref('journey-Form')

  document.getElementById('journey-Form').addEventListener('submit',submitForm);
  

  function submitForm(e){
    e.preventDefault();

    var startLocation=getElementVal('startLocation');
    var destination=getElementVal("destination");
    var date=getElementVal("date");
    var details=getElementVal("details");
    saveMessages(startLocation,destination,date,details);

    //console.log(startLocation,destination,date,details);

  }


  const saveMessages=(startLocation,destination,date,details) => {
    var newContactForm=contactFormDB.push();
    newContactForm.set({
        startLocation:startLocation,
        destination:destination,
        date:date,
        details:details,

    });

};

  const getElementVal = (id)=> {
    return document.getElementById(id).value;
  }
