const x = 'Hello, this a bird but not a number what is will do ?'
const key = 'This'
const search = x.toLocaleLowerCase().includes(key.toLocaleLowerCase())
console.log(search)

// -----------------------------------
// index of search
// console.log(x.indexOf(key))
const indexSearch = x.toLocaleLowerCase().indexOf(key.toLocaleLowerCase())

if (indexSearch !== -1) {
    console.log("find it")
}
else {
    console.log("cant find !")
}

// ---------------------------------------------------------
// start with search 
const startKey = 'Hello'

const startWithSearch = x.toLocaleLowerCase().startsWith(startKey.toLocaleLowerCase())

if (startWithSearch === true) {
    console.log("start with search : find it")
}
else {
    console.log("start with search : cant find !")
}

// ---------------------------------------------------------
// Ends  with search 
const endsKey = '?'
const endsWithSearch = x.toLocaleLowerCase().endsWith(endsKey.toLocaleLowerCase())

if (endsWithSearch === true) {
    console.log("Ends with search : find it")
}
else {
    console.log("Ends with search : cant find !")
}