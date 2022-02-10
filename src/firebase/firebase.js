// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjiNWmk7kinVxdh9pVrgU9tchYXjcQa4o",
  authDomain: "expensify-10c03.firebaseapp.com",
  databaseURL: "https://expensify-10c03-default-rtdb.firebaseio.com",
  projectId: "expensify-10c03",
  storageBucket: "expensify-10c03.appspot.com",
  messagingSenderId: "711361767444",
  appId: "1:711361767444:web:5d1135b42a9e0ed1899f01"
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