const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccount.json')

  const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount,{
      "private_key": process.env.FIREBASE_PRIVATE_KEY,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://vue-covid-19-project.firebaseio.com",
  });
  
  
  const db = firebase.firestore()
  
  module.exports = {db}
  // db.collection('statesSearched').get().then((snapshot) => {
  //   snapshot.docs.forEach(doc => {
  //       console.log(doc.data())
  //   })
  // })

// db.collection('statesSearched').add({
//     state: 'pa'
//   })