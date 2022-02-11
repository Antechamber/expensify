// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABARE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase()

export { app, database as default }

// onChildRemoved(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// onChildChanged(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// onChildAdded(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// onValue(ref(db, 'expenses'), (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// const expenses = [
//   {
//     description: 'Cat seed',
//     note: 'Sarissa needs cat seed',
//     amount: 100,
//     createdAt: 0
//   },
//   {
//     description: 'rent',
//     note: "I don't pay rent right now and I feel bad about it...",
//     amount: 0,
//     createdAt: 0
//   },
//   {
//     description: 'Cat fence',
//     note: 'She keeps getting out',
//     amount: 999.99,
//     createdAt: 0
//   },
// ]

// expenses.forEach((expense) => {
//   push(ref(db, 'expenses'), expense)
// })

// const notes = [
//   {
//     id: 12,
//     body: 'this is the 12th note'
//   },
//   {
//     id: 15,
//     body: 'sample other note'
//   }
// ]

// const newNoteRef = push(ref(db, 'notes'), notes[0]).then((ref) => {
//   console.log(`Uploaded succesfully with key: ${ref.key}`)
// }).catch((e) => {
//   console.log('Error', e)
// })

// push(ref(db, 'notes'), notes[1]).then((ref) => {
//   console.log(`Uploaded succesfully with key: ${ref.key}`)
// }).catch((e) => {
//   console.log('Error', e)
// })

// update(ref(newNoteRef), {
//   body: 'new note body'
// })