let download = require("./functions/download2");
const admin = require("firebase-admin");
const firebase = require("firebase");
// download("https://static.ankama.com/dofus/www/game/items/200/16362.png");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseUrl: "https://brofus.firebaseio.com",
});

const db = admin.firestore();

const collection = db.collection("users");

collection
  .get()
  .then((snapshot) => snapshot.forEach((data) => console.log(data.id)))
  .catch((err) => console.log(err));
