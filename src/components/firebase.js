import firebase from 'firebase'

const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyA7u28PEEl_LBXobbX1a9Hbmf18O0_84t4",
    authDomain: "avinash-4178c.firebaseapp.com",
    databaseURL: "https://avinash-4178c.firebaseio.com",
    projectId: "avinash-4178c",
    storageBucket: "avinash-4178c.appspot.com",
    messagingSenderId: "301565956049",
    appId: "1:301565956049:web:80419921246e41dd121af0",
    measurementId: "G-MLDJ2L7HLX"
})

const db=firebaseApp.firestore()
const auth=firebase.auth()

export{db,auth}




// const firebaseConfig = {
//     apiKey: "AIzaSyA7u28PEEl_LBXobbX1a9Hbmf18O0_84t4",
//     authDomain: "avinash-4178c.firebaseapp.com",
//     databaseURL: "https://avinash-4178c.firebaseio.com",
//     projectId: "avinash-4178c",
//     storageBucket: "avinash-4178c.appspot.com",
//     messagingSenderId: "301565956049",
//     appId: "1:301565956049:web:80419921246e41dd121af0",
//     measurementId: "G-MLDJ2L7HLX"
//   };