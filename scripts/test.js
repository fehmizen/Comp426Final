// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
const serviceAccount = require('./quatroah-firebase-adminsdk-75jw9-299700a0ad');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://quatroah.firebaseio.com"
});

const db = admin.firestore();

db.collection('nba').get().then((snapshot) => {
    console.log(snapshot.docs.map(doc => doc.data()));
    process.exit();
});