function helloWorld() {
    return 'Hello World'
} // function ini mempunyai nilai 'Hello World'
console.log(helloWorld())


function test() {
    console.log('test')
} // function ini tidak memiliki nilai karena tidak memberikan return ke dalamnya. output: undefined
console.log(test())


let hello = helloWorld()
let hello1 = "Hello World"
console.log(`${hello} 1 ${hello1} 2`)


function tambahAngka(angka1, angka2) { // () adalah parameter, nilainya bisa banyak sekali disesuaikan dengan kebutuhan
    return angka1 + angka2
}

console.log(tambahAngka(1, 2))
console.log(tambahAngka(5, 3))
console.log(tambahAngka(2, 3))
console.log(tambahAngka(7, 3))
console.log(tambahAngka()) // Not a Number or undefined

let angka5 = tambahAngka(4, 1)
console.log (angka5)

console.log ('')

function balikKata(kata) {
    let balikKata = ''
    for (let i = kata.length - 1; i >= 0 ; i--) {
        balikKata += kata[i]
    } 
    return balikKata
}

console.log(balikKata("gajah"))
console.log(balikKata("katak"))
console.log(balikKata("jerapah"))
console.log(balikKata('ad'))

console.log ('')

function nambahinKapitalSetelahSpasi(kata) {
    let result = ''
    for (let i = 0; i < kata.length; i++) {
        if (i === 0 || kata[i - 1] === ' ') {
            result += kata[i].toUpperCase()
        } else {
            result += kata[i]
        }
    }
    return result
}

console.log(nambahinKapitalSetelahSpasi('diego maradona'))
console.log(nambahinKapitalSetelahSpasi('m hafidz athaya'))
console.log(nambahinKapitalSetelahSpasi('lionel andreas messi'))
console.log(nambahinKapitalSetelahSpasi('cristiano ronaldo'))

