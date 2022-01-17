// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'pangwin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// const person = {
//     name: 'Brian',
//     age: 28,
//     location: {
//         city: 'Belingham',
//         temp: 40
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age} years old.`)

// const { temp: temperature, city } = person.location
// console.log(`It's ${temperature} in ${city}.`)


// const address = ['1700 Pine St', 'Seattle', 'Washington', '98101']

// const [, city, state = 'United States'] = address
// console.log(`You are in ${city}, ${state}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}.`)